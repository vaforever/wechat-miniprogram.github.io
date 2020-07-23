(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{390:function(v,e,r){"use strict";r.r(e);var _=r(42),o=Object(_.a)({},(function(){var v=this,e=v.$createElement,r=v._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"q-a"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[v._v("#")]),v._v(" Q&A")]),v._v(" "),r("h2",{attrs:{id:"限制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[v._v("#")]),v._v(" 限制")]),v._v(" "),r("p",[v._v("此方案虽然将整个 Web 端框架包含进来并提供了适配层，但是也不是银弹，无法满足所有场景，限制的原因主要出自小程序本身的运行机制限制。")]),v._v(" "),r("h2",{attrs:{id:"答疑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#答疑"}},[v._v("#")]),v._v(" 答疑")]),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：kbone 主要有哪些依赖包？如何安装升级 kbone 依赖？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：kbone 依赖主要包含三个："),r("code",[v._v("mp-webpack-plugin")]),v._v("、"),r("code",[v._v("miniprogram-element")]),v._v(" 和 "),r("code",[v._v("miniprogram-render")]),v._v("。其中 "),r("code",[v._v("mp-webpack-plugin")]),v._v(" 是一个 webpack 插件，需要安装在项目目录中。"),r("code",[v._v("miniprogram-element")]),v._v(" 和 "),r("code",[v._v("miniprogram-render")]),v._v(" 则是小程序代码的依赖，需要安装在小程序目录中。默认情况下，使用 webpack 和 "),r("code",[v._v("mp-webpack-plugin")]),v._v(" 生成小程序代码的时候，会在小程序目录生成 pakckage.json，直接在小程序目录执行 "),r("code",[v._v("npm install")]),v._v(" 就会在小程序目录下安装 "),r("code",[v._v("miniprogram-element")]),v._v(" 和 "),r("code",[v._v("miniprogram-render")]),v._v("。升级过程和安装同理。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：kbone 的构建是否会影响 Web 端代码？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：kbone 的本质是一个运行在原始 Web 端代码和小程序环境之间的适配器，它只会处理输出到小程序端的代码，不会处理 Web 端的构建，因此 Web 端构建产生的问题基本和 kbone 无关。当然，你也可以按照自己需要对 Web 端的构建进行调整，不用非要使用 demo 的 Web 端构建方法，只要做好和小程序端代码构建的隔离就行（demo 里就是分成两份配置来做隔离）。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：对于像 getBoundingClientRect 等接口，有没有什么兼容方案？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：部分无法直接适配的接口会以 "),r("RouterLink",{attrs:{to:"/domextend/"}},[v._v("dom/bom 扩展 api")]),v._v(" 的方式提供。")],1),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：是不是小程序里的所有页面必须同源？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：目前的设计是这样的，遇到不同源的页面会提供事件提示和异常页面跳转配置。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：能否支持异步组件？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：受限于小程序环境，目前无法支持。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么无法支持 scoped style？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：因为小程序不支持动态追加未声明的属性。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么使用 reduce-loader 不生效？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：请检查一下是否给 script 标签设了 "),r("code",[v._v('lang="ts"')]),v._v("，如果是的话可以去掉这个属性再试试，目前 ts-loader 对行内 loader 的支持不够完善。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么 iframe 标签无法支持？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：小程序里的 web-view 组件提供了类似 iframe 标签的实现，但是 web-view 组件不支持自定义大小，故放弃了对 iframe 的支持。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么 vue 的 transition 组件的使用效果不如预期？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：transition 组件内部使用了同步接口 window.getComputedStyle，故无法完美支持。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：对于异步请求要如何兼容？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：内置的 XMLHttpRequest 对象可以满足大部分场景；对于上传文件等场景需要自行兼容，比如可以选用 wx.uploadFile 来实现文件上传。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：能否使用小程序内置组件？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：目前代码里预埋进了能力，但是仅支持部分组件，用法可阅读"),r("RouterLink",{attrs:{to:"/guide/advanced/#使用小程序内置组件"}},[v._v("开发文档")]),v._v("，后续会慢慢补齐。")],1),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么 img 标签有 mode 属性和没有 mode 属性表现会不太一样？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：因为 img 标签有 mode 属性在底层会被渲染成 background-image 模式（即小程序 image 组件默认的形态），没有 mode 属性会被渲染成和 web 端相同的 img 模式。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么不支持 radio-group/checkbox-group 内置组件？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：因为 radio-group/checkbox-group 内置组件下的 radio/checkbox 不支持跨自定义组件，可以使用 input 的 change 事件来替代 radio-group/checkbox-group 的 change 事件，通过获取 input 的 checked/value 也可以获取到其状态（类似 web 端的表现）。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：项目中用到的图片等静态资源要如何处理？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：目前暂不支持相对路径，故静态资源可以考虑转成 base64 或者使用网络地址。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：能否支持分包？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：分包和分包预下载已支持，具体可参考 mp-webpack-plugin 的 runtime 配置项。独立分包可通过 "),r("RouterLink",{attrs:{to:"/config/#generate-app"}},[v._v("generate.app")]),v._v(" 配置变相支持。")],1),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么 label 不支持 button 组件？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：因为小程序 label 组件不支持跨 shadow-tree 绑定，所以 label 标签的效果其实是在逻辑层监听点击事件后模拟出来。而 button 支持的复杂特性都需要用户亲自点击触发，无法在逻辑层模拟触发，故不支持。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么使用小程序内置组件的时候，对于父子节点会相互影响的样式表现（比如 flex）会不太符合预期？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：0.x 版本和 1.x 版本绝大部分小程序内置组件在渲染时会"),r("strong",[v._v("插入一层容器节点")]),v._v("，所以会对部分样式有影响。对于这种情况，可以参考"),r("RouterLink",{attrs:{to:"/guide/advanced.html#使用小程序内置组件"}},[v._v("这篇文档")]),v._v("里提到的的方式来处理。")],1),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v(": 为什么使用小程序内置组件的时候样式有时候会不生效？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v(": 和上一个问题的原因相同，对于这种情况，可以参考"),r("RouterLink",{attrs:{to:"/guide/advanced.html#使用小程序内置组件"}},[v._v("这篇文档")]),v._v("里提到的的方式来处理。")],1),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么 v1.x 版本的 scroll-view 的 scroll-into-view 属性有时可用有时不可用？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：因为 v1.x 版本的 scroll-into-view 找寻的节点只能在当前 shadow-tree 下，因此只有传入 "),r("code",[v._v("domSubTreeLevel")]),v._v(" 配置对应层级内的 div、img 标签对应的 id 方能生效。如果 "),r("code",[v._v("domSubTreeLevel")]),v._v(" 的值为 5，那么只有 scroll-view 下 5 层节点内的 div、img 标签上的 id 可以作为该 scroll-view 上 scroll-into-view 的值。v2.x 版本则无此问题。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：页面做更新的时候，有时候很快，有时候很慢，这是怎么回事？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：更新慢的时候，通常这是一棵比较矮胖的 dom 树，所有节点都在一个自定义组件里面了，导致小程序基础课做更新 diff 时，特别慢。这种情况可以将频繁更新的部分包裹在一个 wx-view 标签内，这样会强制创建新的自定义组件。此方法有利有弊，自定义组件过多也会导致渲染变慢，所以需要根据实际情况进行调整，不能一味地使用 wx-view。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：已知 location.href，如何封装成对应的小程序的页面路由？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：先找到对应的页面路径，假设是 "),r("code",[v._v("pages/home/index")]),v._v("，那么封装方式："),r("span",{staticStyle:{"word-break":"break-all"}},[r("code",[v._v("/pages/home/index?type=${type}&targeturl=${encodeURIComponent(location.href)}&search=${encodeURIComponent(location.search)}&hash=${encodeURIComponent(location.hash)}")])]),v._v("。type 支持 open（新开页面）、jump（页面内跳转）和 share（分享进入），一般在配置体验版、添加工具模式等情况下使用 type=open 即可；targeturl 是经过编码的 location.href（也可以是 /test/abcde?id=123#hash 这样不带 origin 的 url，以缩减页面路由的长度，kbone 会自动取配置中的 origin 进行拼接）；search 和 hash 可传可不传，如若不传，则取 targeturl 中的 search 和 hash 进行解析。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：为什么我新增页面后重新构建，代码包会变大那么多？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：新增页面后，依赖会重新调整输出，但是 kbone 的 demo 中输出是增量的，所以并没有清理旧的输出文件，因此代码包里会残留废弃文件。开发者可在执行构建命令前对输出目录进行一次清理（比如使用 rimraf），即可保证输出目录是纯净的。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：react/preact 进行多页开发的时候，在页面关闭时没有执行 componentWillUnmount 钩子要怎么处理？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：react/preact 并没有提供根组件实例的销毁方法（如 vue.$destroy），因此开发者可自行监听 wxunload 或 beforeunload 事件来进行页面的销毁工作，比如调用 render 方法渲染一个空节点，强行触发页面组件的 componentWillUnmount 钩子。")]),v._v(" "),r("br"),v._v(" "),r("p",[r("strong",[v._v("Q")]),v._v("：在小程序 tabbar 页面里使用了单页模式（比如 vue-router）,所有关于路由的配置都加上了，为什么进入页面会白屏？"),r("br"),v._v(" "),r("strong",[v._v("A")]),v._v("：这种情况大部分是因为单页配置的路由没有响应 "),r("code",[v._v("/")]),v._v(" 导致。小程序 tabbar 的配置不支持在页面路径后面追加参数，导致进入页面时默认进入的 path 是 "),r("code",[v._v("/")]),v._v("，如果开发者没有响应此 path，那么页面就是空的。可以尝试在单页配置的路由上补充 "),r("code",[v._v("/")]),v._v(" 的跳转（比如 vue-router 可以通过配置 redirect 让 "),r("code",[v._v("/")]),v._v(" 响应并自动跳转到想要展示的路由上）。")]),v._v(" "),r("h2",{attrs:{id:"反馈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反馈"}},[v._v("#")]),v._v(" 反馈")]),v._v(" "),r("p",[v._v("如果还遇到其他问题，可在 "),r("a",{attrs:{href:"https://github.com/wechat-miniprogram/kbone/issues",target:"_blank",rel:"noopener noreferrer"}},[v._v("issue"),r("OutboundLink")],1),v._v(" 中反馈。")]),v._v(" "),r("p",[v._v("使用遇到问题可在 "),r("a",{attrs:{href:"https://developers.weixin.qq.com/community/minihome/mixflow/1213301129006825473",target:"_blank",rel:"noopener noreferrer"}},[v._v("Kbone社区"),r("OutboundLink")],1),v._v(" 发帖。")])])}),[],!1,null,null,null);e.default=o.exports}}]);