# 女拳词打码浏览器扩展 🛡️


![Chrome Version](https://img.shields.io/badge/Chrome%20Version-133.0.6943.142-blue)

智能实时替换网页敏感内容的浏览器扩展，支持动态DOM监控和正则表达式过滤。适用于隐私保护和内容审查场景。

![演示截图](screenshots/demo.gif)

## 🚀 核心特性
- ​**实时文本监控**：基于MutationObserver API的DOM变化监听
- ​**多策略过滤**：
  - 正则表达式过滤（支持转义特殊字符）
  - 大小写不敏感匹配
  - 全词匹配模式
- ​**动态加载支持**：自动处理AJAX/XHR内容更新
- ​**性能优化**：
  - 防抖处理高频DOM更新
  - 选择性文本节点遍历
- ​**跨框架支持**：`all_frames: true`配置实现iframe内容处理

## ⚙️ 技术架构
```bash
├── manifest.json        # 扩展清单文件
├── content-script.js    # 内容注入脚本
├── sensitive-words.js   # 敏感词库配置
└── icons/               # 扩展图标资源