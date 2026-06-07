# 个人网站项目进度

## 基本信息
- **线上地址**：https://sweetnning.github.io/can/
- **本地路径**：/Users/ning/Desktop/个人网页/
- **GitHub 仓库**：sweetnning/can
- **技术栈**：纯 HTML/CSS/JS，GitHub Pages 部署，中英双语，亮暗主题

## 文件结构
```
个人网页/
├── index.html                 # 主页
├── assets/
│   ├── css/style.css          # 全部样式
│   ├── js/
│   │   ├── i18n.js            # 中英切换引擎
│   │   └── main.js            # 页面渲染 + 数据
│   └── images/
│       └── placeholder-cover.svg  # 占位图
├── lang/
│   ├── zh.json                # 中文内容（核心文件）
│   └── en.json                # 英文内容
├── pages/projects/
│   ├── project1.html          # 红色旅游文创产品策划
│   ├── project2.html          # 康养旅游发展研究
│   └── project3.html          # GoSafari 露营地调研
└── .gitignore
```

## 已完成的板块

### 1. Hero（首页头部）
- 头像占位（CSS 圆圈 "CN"）
- 名字：李灿宁 / Canning Li
- 副标题三行：东南大学 旅游管理 → 港中文 可持续旅游 → 中青旅博汇·深圳科学技术馆
- 联系方式：邮箱 haleylcn@163.com / 微信 Sco-nn-18

### 2. 近期工作（深科馆两月记）
- 供应商沟通采购
- 品牌化 IP 方案建设
- 抖音小红书全线运营
- 选品销售

### 3. 项目案例（3 个真实项目）
- 红色旅游文创产品策划（特等奖）
- 康养旅游发展研究（大创 + 论文 + 年会报告）
- GoSafari 露营地调研（港中文项目 + 扎根理论）

### 4. 经历时间轴（8 条）
- 2019-2023 东南大学 旅游管理 本科
- 2021.03-05 红色旅游创意策划大赛 特等奖
- 2021.11-2022.04 国家级大创 康养旅游发展研究
- 2022.06-2023.06 创合智联文化科技 市场部实习生
- 2023.09-2024.06 留学文书个人工作室
- 2024.09-2025.11 香港中文大学 可持续旅游 硕士
- 2025.03-06 港中文 GoSafari 露营地调研
- 至今 中青旅博汇 深圳科学技术馆派驻

### 5. 专业能力
- 旅游管理 / 品牌策划 / 项目管理 / AI 工作流搭建
- 研究分析：定量研究、质性研究、报告撰写、政策分析
- 语言能力：英语 IELTS 7.0、普通话母语

## 待完善
- [ ] 头像照片（现在是 CSS 占位 "CN"）
- [ ] 项目案例配图（现在是占位 SVG）
- [ ] 经历时间轴的精确日期确认
- [ ] 如果有新项目/经历可继续填充
- [ ] 可选：AI 工作流搭建 加到 Skills（已讨论未加）

## 如何继续
1. 打开终端，`cd /Users/ning/Desktop/个人网页`
2. 起本地预览：`python3 -m http.server 8080`，浏览器打开 http://localhost:8080
3. 修改内容主要改 `lang/zh.json` 和 `lang/en.json`
4. 修改完 `git add -A && git commit -m "说明" && git push` 推上线
5. 等 15 秒自动部署到 https://sweetnning.github.io/can/

## 重要提醒
- 改 JSON 时避免中文引号 " " 出现在字符串内部，用「」代替
- 只 `git add` 网站文件，隐私文件夹在 `.gitignore` 里
- 隐私资料在 `/Users/ning/Desktop/个人文件/`（不会上传）
