(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{274:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("h2",{attrs:{id:"限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[t._v("#")]),t._v(" 限制")]),t._v(" "),a("p",[t._v("此方案虽然将整个 Web 端框架包含进来并提供了适配层，但是也不是银弹，无法满足所有场景，限制的原因主要出于以下两种：")]),t._v(" "),a("ul",[a("li",[t._v("开发资源不足，比如小程序部分内置组件暂不支持。")]),t._v(" "),a("li",[t._v("小程序本身的运行机制限制。")])]),t._v(" "),a("h2",{attrs:{id:"答疑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答疑"}},[t._v("#")]),t._v(" 答疑")]),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：kbone 主要有哪些依赖包？如何安装升级 kbone 依赖？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：kbone 依赖主要包含三个："),a("code",[t._v("mp-webpack-plugin")]),t._v("、"),a("code",[t._v("miniprogram-element")]),t._v(" 和 "),a("code",[t._v("miniprogram-render")]),t._v("。其中 "),a("code",[t._v("mp-webpack-plugin")]),t._v(" 是一个 webpack 插件，需要安装在项目目录中。"),a("code",[t._v("miniprogram-element")]),t._v(" 和 "),a("code",[t._v("miniprogram-render")]),t._v(" 则是小程序代码的依赖，需要安装在小程序目录中。默认情况下，使用 webpack 和 "),a("code",[t._v("mp-webpack-plugin")]),t._v(" 生成小程序代码的时候，会在小程序目录生成 pakckage.json，直接在小程序目录执行 "),a("code",[t._v("npm install")]),t._v(" 就会在小程序目录下安装 "),a("code",[t._v("miniprogram-element")]),t._v(" 和 "),a("code",[t._v("miniprogram-render")]),t._v("。升级过程和安装同理。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：对于像 getBoundingClientRect 等接口，有没有什么兼容方案？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：部分无法直接适配的接口会以 "),a("router-link",{attrs:{to:"/domextend/"}},[t._v("dom/bom 扩展 api")]),t._v(" 的方式提供。")],1),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：是不是小程序里的所有页面必须同源？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：目前的设计是这样的，遇到不同源的页面会提供事件提示和异常页面跳转配置。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：能否支持异步组件？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：受限于小程序环境，目前无法支持。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么无法支持 scoped style？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：因为小程序不支持动态追加未声明的属性。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么使用 reduce-loader 不生效？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：请检查一下是否给 script 标签设了 "),a("code",[t._v('type="ts"')]),t._v("，如果是的话可以去掉这个属性再试试，目前 ts-loader 对行内 loader 的支持不够完善。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么 iframe 标签无法支持？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：小程序里的 web-view 组件提供了类似 iframe 标签的实现，但是 web-view 组件不支持自定义大小，故放弃了对 iframe 的支持。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么 vue 的 transition 组件的使用效果不如预期？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：transition 组件内部使用了同步接口 window.getComputedStyle，故无法完美支持。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：对于异步请求要如何兼容？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：可以使用第三方请求库来实现，比如 axios 和 axios-miniprogram-adapter 就是一个不错的选择。当然，你也可以自己编写 adapter。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：能否使用小程序内置组件？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：目前代码里预埋进了能力，但是仅支持部分组件，用法可阅读"),a("router-link",{attrs:{to:"/guide/advanced/#使用小程序内置组件"}},[t._v("开发文档")]),t._v("，后续会慢慢补齐。")],1),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：是否支持 sitemap？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：暂未支持，不过已经计划之中。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么 img 标签有 mode 属性和没有 mode 属性表现会不太一样？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：因为 img 标签有 mode 属性在底层会被渲染成 background-image 模式（即小程序 image 组件默认的形态），没有 mode 属性会被渲染成和 web 端相同的 img 模式。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么不支持 radio-group/checkbox-group 内置组件？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：因为 radio-group/checkbox-group 内置组件下的 radio/checkbox 不支持跨自定义组件，可以使用 input 的 change 事件来替代 radio-group/checkbox-group 的 change 事件，通过获取 input 的 checked/value 也可以获取到其状态（类似 web 端的表现）。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：项目中用到的图片等静态资源要如何处理？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：目前暂不支持相对路径，故静态资源可以考虑转成 base64 或者使用网络地址。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：能否支持分包？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：分包和分包预下载已支持，具体可参考 mp-webpack-plugin 的 runtime 配置项。独立分包可通过 "),a("router-link",{attrs:{to:"/config/#generate-app"}},[t._v("generate.app")]),t._v(" 配置变相支持。")],1),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么 label 不支持 button 组件？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：因为小程序 label 组件不支持跨 shadow-tree 绑定，所以 label 标签的效果其实是在逻辑层监听点击事件后模拟出来。而 button 支持的复杂特性都需要用户亲自点击触发，无法在逻辑层模拟触发，故不支持。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么使用小程序内置组件的时候，和父级节点或者子级节点相互影响的样式表现（比如 flex）会不太符合预期？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：绝大部分小程序内置组件在渲染时会在外面多包装一层自定义组件，可以简单认为内置组件和其父级节点中间会"),a("strong",[t._v("多一层 div 容器")]),t._v("，所以会对部分样式有影响。这个 div 容器会追加一个名为 h5-xxx 的 class，例如使用 video 组件，那么会在这个 div 容器上追加一个名为 h5-video 的 class，以便对其做特殊处理。另外如果是用 wx-component 或是 wx- 前缀渲染的内置组件，会在容器追加的 class 是 h5-wx-component，为了更方便进行识别，这种情况会再在容器额外追加 wx-xxx 的 class。")]),t._v(" "),a("p",[t._v("对于这种情况，样式可以按照如下的方式来写：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("textarea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("textare-node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式一：textarea 会被转成 .h5-textarea 并挂在容器上，.wx-comp-textarea 会被补充到真正的 textarea 节点上 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("textarea .wx-comp-textare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式二：同方式一，只是直接将 textarea 标签选择器写成 .h5-textarea */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".h5-textarea .wx-comp-textare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式三：直接使用 class，会挂在真正的 textarea 节点上 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".textarea-node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("对于必须使用 wx- 前缀的组件，则可以按照如下的方式：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wx-switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("switch-node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("wx-switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式一：容器上会默认挂上 .h5-wx-component ，.wx-comp-switch 会被补充到真正的 wx-switch 节点上 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".h5-wx-component .wx-comp-switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式二：同方式一，只是除了 .h5-wx-component 外，容器还会默认挂上 .wx-switch */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wx-switch .wx-comp-switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式三：直接使用 class，会挂在真正的 wx-switch 节点上 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".switch-node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v(": 为什么使用小程序内置组件的时候样式有时候会不生效？\n"),a("strong",[t._v("A")]),t._v(": 和上一个问题的原因相同，内置组件和其父级节点中间会"),a("strong",[t._v("多一层 div 容器")]),t._v("所致。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：为什么 scroll-view 的 scroll-into-view 有时可用有时不可用？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：因为 scroll-into-view 找寻的节点只能在当前 shadow-tree 下，因此只有传入 "),a("code",[t._v("domSubTreeLevel")]),t._v(" 配置对应层级内的 div、img 标签对应的 id 方能生效。如果 "),a("code",[t._v("domSubTreeLevel")]),t._v(" 的值为 5，那么只有 scroll-view 下 5 层节点内的 div、img 标签上的 id 可以作为该 scroll-view 上 scroll-into-view 的值。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Q")]),t._v("：vue 会将值为 false 的属性剔除，对于默认值为 true 的属性想要设置成 false 要怎么办？"),a("br"),t._v(" "),a("strong",[t._v("A")]),t._v("：可以将该属性设置成其他 falsy 的值，比如空串。例子："),a("code",[t._v('<textarea adjust-position="" />')]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"反馈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反馈"}},[t._v("#")]),t._v(" 反馈")]),t._v(" "),a("p",[t._v("如果还遇到其他问题，可在 "),a("a",{attrs:{href:"https://github.com/wechat-miniprogram/kbone/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v(" 中反馈。")]),t._v(" "),a("p",[t._v("使用遇到问题可在 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/community/minihome/mixflow/1213301129006825473",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kbone社区"),a("OutboundLink")],1),t._v(" 发帖。")])])}),[],!1,null,null,null);s.default=n.exports}}]);