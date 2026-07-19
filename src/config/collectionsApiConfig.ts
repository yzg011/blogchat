import type { CollectionsApiConfig } from "../types/config";

// 使用 favicon 服务获取网站图标
const favicon = (domain: string) => `https://favicon.im/${domain}`;

export const collectionsApiConfig: CollectionsApiConfig = {
	// 页面标题，留空则使用 i18n 翻译
	title: "",
	// 页面描述，留空则使用 i18n 翻译
	description: "",

	// API 收藏列表（按 category 分组）
	apis: [
		{
			category: "工具箱",
			items: [
				{
					name: "网络工具 | 中科大测速",
					url: "https://test.ustc.edu.cn/",
					description:
						"中科大提供的网络测速工具，用于快速测试本地带宽与网络延迟。",
					icon: favicon("test.ustc.edu.cn"),
					enabled: true,
				},

				{
					name: "设备展示 | Fireship",
					url: "https://fireship.dev/",
					description:
						"用于生成设备展示效果的在线工具，方便快速制作产品截图与演示。",
					icon: favicon("fireship.dev"),
					enabled: true,
				},
			],
		},
		{
			category: "AI 助手",
			items: [

				{
					name: "Grok",
					url: "https://grok.com/",
					description: "xAI 开发的 AI 助手，支持实时搜索、图像生成与深度推理。",
					icon: favicon("grok.com"),
					enabled: true,
				},
			],
		},
		{
			category: "AI 工具",
			items: [

				{
					name: "模型部署 | Ollama",
					url: "https://ollama.com/",
					description:
						"本地运行大语言模型的轻量框架，支持一键部署 Llama、Qwen 等开源模型。",
					icon: favicon("ollama.com"),
					enabled: true,
				},
			],
		},
		{
			category: "AI BOT",
			items: [

				{
					name: "LLBot",
					url: "https://github.com/LLOneBot/LuckyLilliaBot",
					description: "基于 NTQQ 的轻量 QQ 机器人框架，支持 OneBot 协议。",
					icon: favicon("github.com"),
					enabled: true,
				},
			],
		},
		{
			category: "前端组件库",
			items: [

				{
					name: "3D模型 | Sketchfab",
					url: "https://sketchfab.com/",
					description: "大型 3D 模型展示与分享平台，支持在线预览和免费下载。",
					icon: favicon("sketchfab.com"),
					enabled: true,
				},
			],
		},
		{
			category: "学习知识库",
			items: [

				{
					name: "牛客网",
					url: "https://www.nowcoder.com/",
					description:
						"IT 求职备考与技术学习平台，提供笔试、面试题库与在线编程练习。",
					icon: favicon("nowcoder.com"),
					enabled: true,
				},
			],
		},
		{
			category: "动漫&漫画",
			items: [
				{
					name: "AGE 动漫",
					url: "https://www.agedm.io/update",
					description: "免费动漫资源聚合站，提供高清动漫在线观看与更新推送。",
					icon: favicon("agedm.io"),
					enabled: true,
				},
				{
					name: "ManhwaTop",
					url: "https://manhwatop.com/",
					description: "韩漫与漫画阅读平台，收录热门连载与完结漫画资源。",
					icon: favicon("manhwatop.com"),
					enabled: true,
				},
			],
		},
		{
			category: "API 接口",
			items: [

				{
					name: "Tavily",
					url: "https://app.tavily.com/home",
					description: "AI 优化的搜索引擎 API，为大模型提供实时网页检索能力。",
					icon: favicon("tavily.com"),
					enabled: true,
				},
			],
		},
	],
};
