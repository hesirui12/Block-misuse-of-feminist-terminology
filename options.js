document.addEventListener('DOMContentLoaded', function() {
    // 加载已保存的词库
    chrome.storage.local.get({ sensitiveWords: [] }, function(data) {
      document.getElementById('words').value = data.sensitiveWords.join('\n');
    });
  
    // 保存按钮点击事件
    document.getElementById('save').addEventListener('click', function() {
      const words = document.getElementById('words').value
        .split('\n')
        .map(word => word.trim())
        .filter(word => word.length > 0);
  
      chrome.storage.local.set({ sensitiveWords: words }, function() {
        alert('设置已保存！');
      });
    });
  });