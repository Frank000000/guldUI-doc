import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'guldUI',
      description: 'guldUI',
    },
    '../zn': {
      lang: 'zh-CN',
      title: 'guldUI',
      description: 'guldUI',
    },
  }
})