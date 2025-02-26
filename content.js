// 从存储中获取敏感词并执行替换
function filterText() {
    chrome.storage.local.get({ sensitiveWords: [] }, function(data) {
      const sensitiveWords = data.sensitiveWords;
      if (sensitiveWords.length === 0) return;
  
      // 创建正则表达式，忽略大小写
      const regex = new RegExp(sensitiveWords.map(escapeRegExp).join('|'), 'gi');
      
      // 遍历所有文本节点
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
  
      let node;
      while ((node = walker.nextNode())) {
        if (node.parentNode.nodeName.toLowerCase() === 'script') continue;
        if (node.parentNode.nodeName.toLowerCase() === 'style') continue;
        node.textContent = node.textContent.replace(regex, '***');
      }
    });
  }
  
  // 转义正则特殊字符
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // 初始化执行
  filterText();
  
  // 监听存储变化（当用户更新词库时自动刷新）
  chrome.storage.onChanged.addListener(filterText);