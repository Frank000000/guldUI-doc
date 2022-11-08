import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: '',
      description: '',
      selectLanguageName: 'English',
    },
    '../zn': {
      lang: 'zh-CN',
      title: '',
      description: '',
      selectLanguageName: '简体中文',
    },
  }
})