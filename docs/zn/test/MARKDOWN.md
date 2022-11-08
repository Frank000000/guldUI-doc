# 链接
<!-- 相对路径 -->
[首页](../README.md)
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
[我的](./zn/guide/getting-started.md)
<!-- URL -->
[GitHub](https://github.com)

# Emoji

VuePress 2 已经发布 :tada: ！

[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)

# 目录

[[toc]]

# code blocks

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```ts
// line-numbers is enabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```md
<!-- This will be kept as is by default -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- This will be compiled by Vue -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

<!-- minimal syntax -->
@[code json:no-line-numbers](../../../package.json)

# public

![VuePress Logo](/images/hero.png)

# 多语言支持

