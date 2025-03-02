const sensitiveWords = [
    '女性安全',
    '女性力量',
    '男凝',
    '生物爹',
  ].map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // 转义特殊字符
  
  const sensitiveRegex = new RegExp(`(${sensitiveWords.join('|')})`, 'gi');