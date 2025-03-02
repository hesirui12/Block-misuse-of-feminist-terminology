function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(sensitiveRegex, '***');
    }
    else {
      for (const child of node.childNodes) {
        replaceText(child);
      }
    }
  }
  
  function startObserving() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            replaceText(node);
          }
        });
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // 初始处理
  replaceText(document.body);
  // 监听动态内容变化
  startObserving();