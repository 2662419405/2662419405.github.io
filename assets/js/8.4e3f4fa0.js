(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{58:function(t,s,e){"use strict";e.r(s);var i=e(0),n=Object(i.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"指向-前端面试题汇总-扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指向-前端面试题汇总-扩展"}},[t._v("#")]),t._v(' 指向"前端面试题汇总"扩展')]),t._v(" "),e("h2",{attrs:{id:"_1-display-none-和visibility-hidden的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-display-none-和visibility-hidden的区别"}},[t._v("#")]),t._v(" 1,\tdisplay:none 和visibility:hidden的区别?")]),t._v(" "),e("pre",[e("code",[t._v("如果给一个元素设置了display: none;那么该元素以及它的所有后代元素都会隐藏,  \n\n它是前端开发人员使用频率最高的一种隐藏方式。隐藏后的元素无法点击，  \n\n无法使用屏幕阅读器等辅助设备访问，占据的空间消失。\n\n给元素设置visibility: hidden也可以隐藏这个元素，但是隐藏元素仍需占用与未隐藏时一样的空间，\n\n也就是说虽然元素不可见了，但是仍然会影响页面布局。\n")])]),t._v(" "),e("p",[e("strong",[t._v("注")]),t._v(":\n1、visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。")]),t._v(" "),e("p",[t._v("但是如果重新给子元素设置visibility: visible,则子元素又会显示出来。这个和display: none有着质的区别")]),t._v(" "),e("p",[t._v("2、visibility: hidden不会影响计数器的计数，这和display: none完全不一样")]),t._v(" "),e("p",[t._v("3、CSS3的transition支持visibility属性，但是并不支持display，")]),t._v(" "),e("p",[t._v("由于transition可以延迟执行，因此可以配合visibility使用纯css实现hover延时显示效果。提高用户体验。")]),t._v(" "),e("h2",{attrs:{id:"_2-css中-link-和-import-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-css中-link-和-import-的区别"}},[t._v("#")]),t._v(" 2,\tcss中 link 和 @import 的区别?")]),t._v(" "),e("p",[t._v("1.语法结构的不同")]),t._v(" "),e("p",[t._v("2.本质不同")]),t._v(" "),e("pre",[e("code",[t._v("css属于标签，只能放入html源码里进行使用，  \n\n而@import可以看作为css样式，可以引入css样式（属于html标签，而@import是css提供的）\n")])]),t._v(" "),e("p",[t._v("3.页面加载")]),t._v(" "),e("pre",[e("code",[t._v("页面加载时，会被同时被加载，而@import引用的css会等到页面被加载完的时候再加载\n")])]),t._v(" "),e("p",[t._v("4.兼容性。")]),t._v(" "),e("pre",[e("code",[t._v("@import只有在IE5以上才能被识别，而是html标签，无兼容问题\n")])]),t._v(" "),e("p",[t._v("5.优先级")]),t._v(" "),e("pre",[e("code",[t._v("不管是还是@import ，优先级按加载顺序为参考，后加载的优先级高\n")])]),t._v(" "),e("p",[t._v("6.可控性")]),t._v(" "),e("pre",[e("code",[t._v("使用js控制dom改变样式只能使用标签\n")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("但是")]),t._v(" "),e("p",[t._v("🌈为什么要避免使用CSS @import")])]),t._v(" "),e("pre",[e("code",[t._v("在web前端优化的建议中，不建议使用css @import 因为这种方式加载css相当于把css放在了底部， \n\n因此@import会在网页加载中增加延迟\n\n因为使用@import引用的文件只有引用它的那个css文件被下载、解析后,浏览器才会知道有一个css需要下载\n\n这时才会去进行想在，然后再解析、构建render tree等一系列操作。\n\n因此css @import引起的css解析延迟会加长页面留白期，所以要尽量避免css @import，采用标签的方式引入\n")])]),t._v(" "),e("h2",{attrs:{id:"_3-position-的-absolute-与-fixed-共同点与不同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-position-的-absolute-与-fixed-共同点与不同点"}},[t._v("#")]),t._v(" 3,position 的 absolute 与 fixed 共同点与不同点")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('共同点:\t\n        (1) 改变行内元素的呈现方式 , display被设为block;\n\n\t\t(2) 让元素脱离文档流,\n\n\t\t(3) 默认会覆盖到非定位元素上,\n\n不同点: \n    absolute 的 "根元素" 是可以设置的\n\n\tfixed 的 "根元素" 固定为浏览器窗口,\n    \n    当你滚动网页,fixed 元素与浏览器窗口之间的距离是不变的\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h2",{attrs:{id:"_4-position的-absolute、relative、fixed-分别根据哪一个点来定位？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-position的-absolute、relative、fixed-分别根据哪一个点来定位？"}},[t._v("#")]),t._v(" 4,\tposition的 absolute、relative、fixed 分别根据哪一个点来定位？")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1,\tabsolute:相对于最近一级的定位不是static的父元素来进行定位.\n\n2,\trelative:相对于其在普通流中的位置进行定位\n\n3,\tfixed(老IE不支持):相对于浏览器窗口进行定位  \n\n//也同样相对于frame进行定位,但是,h5删除了frame,\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h2",{attrs:{id:"_5-介绍下css的盒子模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-介绍下css的盒子模型"}},[t._v("#")]),t._v(" 5,\t介绍下CSS的盒子模型")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1,\t盒模型:内容(content)\t+\t内边距(padding)\t+\t外边距(margin)\t+\t边框(border)\n\n\t注意\tIE盒模型为:content\t+\tpadding\t+\tborder\n\n2,\t类型:分为IE盒子\t&\t标准W3C\n\n3,\t设置盒模型的方式: box-sizing\n\n\tbox-sizing:content-box;\t标准盒模型\n\n\tbox-sizing:border-box;\tIE盒模型\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h2",{attrs:{id:"_6-css-选择符有哪些-那些属性可以继承-优先级算法如何介绍-css3新增伪类有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-css-选择符有哪些-那些属性可以继承-优先级算法如何介绍-css3新增伪类有哪些"}},[t._v("#")]),t._v(" 6,\tCSS 选择符有哪些?\t那些属性可以继承?\t优先级算法如何介绍?\tCSS3新增伪类有哪些?")]),t._v(" "),e("h4",{attrs:{id:"选择符有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择符有哪些"}},[t._v("#")]),t._v(" 选择符有哪些:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("id选择器 ( # id )")])]),t._v(" "),e("li",[e("p",[t._v("类选择器 ( . classname )")])]),t._v(" "),e("li",[e("p",[t._v("标签选择器 ( div ,h1 ...)")])]),t._v(" "),e("li",[e("p",[t._v("相邻选择器 ( h1 + p )")])]),t._v(" "),e("li",[e("p",[t._v("子选择器 ( ul > li )")])]),t._v(" "),e("li",[e("p",[t._v("后代选择器 ( li a )")])]),t._v(" "),e("li",[e("p",[t._v("通配符选择器 ( a )")])]),t._v(" "),e("li",[e("p",[t._v('属性选择器 (a[rel = "external"] )')])]),t._v(" "),e("li",[e("p",[t._v("伪类选择器 ( a: hover )")])])]),t._v(" "),e("h4",{attrs:{id:"常见可继承的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见可继承的属性"}},[t._v("#")]),t._v(" 常见可继承的属性:")]),t._v(" "),e("ol",[e("li",[t._v("字体系列属性\n"),e("ul",[e("li",[t._v("​\tfont-family : 字体系列")]),t._v(" "),e("li",[t._v("​    font-weight : 字体的粗细")]),t._v(" "),e("li",[t._v("​    font-size : 字体的大小")]),t._v(" "),e("li",[t._v("​    font-style : 字体的风格")])])]),t._v(" "),e("li",[t._v("文本系列属性\n"),e("ul",[e("li",[t._v("​    text-indent : 文本缩进")]),t._v(" "),e("li",[t._v("​    text-align : 文本水平对齐")]),t._v(" "),e("li",[t._v("​    line-height : 行高")]),t._v(" "),e("li",[t._v("​    word-spacing : 单词之间的间距")]),t._v(" "),e("li",[t._v("​    letter-spacing : 中文或者字母之间的间距")]),t._v(" "),e("li",[t._v("​    text-transform : 控制文本大小（就是uppercase、lowercase、capitalize这三个）")]),t._v(" "),e("li",[t._v("​    color : 文本颜色")])])]),t._v(" "),e("li",[t._v("元素可见性:   visibility :  控制元素显示隐藏")]),t._v(" "),e("li",[t._v("列表布局属性:    list-style : 列表风格 包括list-style-type、list-style-image等")]),t._v(" "),e("li",[t._v("光标属性 :    cursor : 光标显示")])]),t._v(" "),e("h4",{attrs:{id:"常见不可继承的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见不可继承的属性"}},[t._v("#")]),t._v(" 常见不可继承的属性:")]),t._v(" "),e("ol",[e("li",[t._v("​\tdisplay : 规定元素应该生成的框的类型")]),t._v(" "),e("li",[t._v("​    文本属性 :\n"),e("ol",[e("li",[t._v("vertical-align : 垂直文本对齐")]),t._v(" "),e("li",[t._v("text-decoration : 添加到文本的装饰")]),t._v(" "),e("li",[t._v("text-shadow : 文本阴影效果")]),t._v(" "),e("li",[t._v("white-space : 空白符的处理")]),t._v(" "),e("li",[t._v("Unicode-bidi : 设置文本的方向")])])]),t._v(" "),e("li",[t._v("盒子模型的属性 :  width ,height , margin ,border ,padding,,,,,等等等")]),t._v(" "),e("li",[t._v("背景属性 : background : 背景图片的颜色,定位,尺寸等等")]),t._v(" "),e("li",[t._v("定位属性 : float , clear , position , min-width , max-height , overflow , z-index...等等")]),t._v(" "),e("li",[t._v("生成内容属性 : content , counter-reset ...等")]),t._v(" "),e("li",[t._v("轮廓样式属性 : outline-style等")]),t._v(" "),e("li",[t._v("声音样式属性 : pause-before、pause-after、pause、cue-before、cue-after、cue、play-during")])]),t._v(" "),e("h4",{attrs:{id:"优先级计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先级计算"}},[t._v("#")]),t._v(" 优先级计算:")]),t._v(" "),e("p",[e("strong",[t._v("要了解 :")])]),t._v(" "),e("p",[t._v("​\t\t优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。")]),t._v(" "),e("p",[t._v("​\t\t而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。")]),t._v(" "),e("p",[t._v("​\t\t当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。")]),t._v(" "),e("p",[e("strong",[t._v("优先级权重:")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[e("strong",[t._v("!important")]),t._v("会覆盖其他所有声明样式,但是应该尽量避免使用")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选择器类别")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("权重表示")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("权重表示")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("行内样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v('行内只有一个 style = " "')]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{1.0.0.0}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("id选择器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("selector 中使用了几个id,即#的个数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{0.1.0.0}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类别选择器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("类,伪类,以及属性的个数,")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{0.0.1.0}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("元素选择器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("伪元素和标签元素的个数,如 : p:first-child")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{0.0.0.1}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])])])]),t._v(" "),e("p",[e("strong",[e("font",{attrs:{color:"#00008B"}},[t._v("如果比较后的权重相同,那么后者覆盖前者,后渲染的胜出;")])],1)]),t._v(" "),e("p",[e("strong",[e("font",{attrs:{color:"#00008B"}},[t._v("内联样式 > id选择器样式 > 类选择器样式 > 元素选择器样式；")])],1)]),t._v(" "),e("p",[e("strong",[e("font",{attrs:{color:"#00008B"}},[t._v("重中之重，1000/100/10/1这种权值系数的比较方式只是便于理解，真实情况下10个class并不能逆转1个id。")])],1)]),t._v(" "),e("p",[t._v("更详细解析请=>"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"}},[t._v("css优先级计算"),e("OutboundLink")],1),t._v("🌈")]),t._v(" "),e("h4",{attrs:{id:"css3新增伪类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3新增伪类"}},[t._v("#")]),t._v(" CSS3新增伪类 :")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("p:nth-child(x)")])]),t._v(" "),e("li",[e("p",[t._v("p:frist-of-type")])]),t._v(" "),e("li",[e("p",[t._v("p:last-of-type")])]),t._v(" "),e("li",[e("p",[t._v("p:only-type")])]),t._v(" "),e("li",[e("p",[t._v("p:only-of-type")])]),t._v(" "),e("li",[e("p",[t._v(":checked   被选中")])]),t._v(" "),e("li",[e("p",[t._v(":enabled, :disabled    禁用状态")])])]),t._v(" "),e("h2",{attrs:{id:"_7-列出-display的值，说明他们的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-列出-display的值，说明他们的作用"}},[t._v("#")]),t._v(" 7, 列出 display的值，说明他们的作用")]),t._v(" "),e("pre",[e("code",[t._v("none： 隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间\ninline： 指定对象为内联元素。\nblock： 指定对象为块元素。\nlist-item： 指定对象为列表项目。\nCSS2:\ninline-block： 指定对象为内联块元素。\ntable： 指定对象作为块元素级的表格。类同于html标签<table>\ninline-table： 指定对象作为内联元素级的表格。类同于html标签<table>\ntable-caption： 指定对象作为表格标题。类同于html标签<caption>\ntable-cell： 指定对象作为表格单元格。类同于html标签<td>\ntable-row： 指定对象作为表格行。类同于html标签<tr>\ntable-row-group： 指定对象作为表格行组。类同于html标签<tbody>\ntable-column： 指定对象作为表格列。类同于html标签<col>\ntable-column-group： 指定对象作为表格列组显示。类同于html标签<colgroup>\ntable-header-group： 指定对象作为表格标题组。类同于html标签<thead>\ntable-footer-group： 指定对象作为表格脚注组。类同于html标签<tfoot>\nCSS3:\nrun-in： 根据上下文决定对象是内联对象还是块级对象。\nbox： 将对象作为弹性伸缩盒显示。（伸缩盒最老版本）\ninline-box： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）\nflexbox： 将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）\ninline-flexbox： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）\nflex： 将对象作为弹性伸缩盒显示。（伸缩盒最新版本）\ninline-flex： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）\n")])]),t._v(" "),e("h2",{attrs:{id:"_8-说说你对语义化的理解？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-说说你对语义化的理解？"}},[t._v("#")]),t._v(" 8,   说说你对语义化的理解？")]),t._v(" "),e("p",[t._v("1、去掉或者丢失样式的时候能够让页面呈现出清晰的结构；")]),t._v(" "),e("p",[t._v("2、有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；")]),t._v(" "),e("p",[t._v("3、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；")]),t._v(" "),e("p",[t._v("4、便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。")]),t._v(" "),e("h2",{attrs:{id:"_9-线程与进程的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-线程与进程的区别"}},[t._v("#")]),t._v(" 9,   线程与进程的区别 ?")]),t._v(" "),e("p",[e("strong",[t._v("概念式区别")])]),t._v(" "),e("pre",[e("code",[t._v("进程:是并发执行的程序在执行过程中分配和管理资源的基本单位,是一个动态概念,竞争计算机系统资源的基本单位。\n\n线程:是进程的一个执行单元,是进程内科调度实体.比进程更小的独立运行的基本单位.线程也被称为轻量级进程。\n\n一个程序至少一个进程，一个进程至少一个线程。  \n")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("扩展")]),t._v(" "),e("p",[t._v("为什么会有线程🌈")])]),t._v(" "),e("p",[t._v("每个进程都有自己的地址空间,即进程空间,")]),t._v(" "),e("p",[t._v("在网络或多用户换机下, 一个服务器通常需要接受大量不确定数量用户的并发请求,")]),t._v(" "),e("p",[t._v("为每一个请求都创建一个进程显然行不通(系统开销大下响应用户请求效率低),")]),t._v(" "),e("p",[t._v("因此操作系统中线程概念被引进")]),t._v(" "),e("pre",[e("code",[t._v('"线程的改变只代表CPU的执行过程的改变，而没有发生进程所拥有的资源的变化。"\n')])]),t._v(" "),e("p",[e("strong",[t._v("具体区别")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("地址空间: 同一进程的线程共享本进程的地址空间,  而进程之间测试独立的地址空间")])]),t._v(" "),e("li",[e("p",[t._v("资源拥有: 同一进程内的线程共享本进程的资源如内存,I\\O,cpu等,但是线程之间的资源是独立的")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("一个进程崩溃后,在保护模式下不会对其他进程产生影响,但是一个线程崩溃整个进程都死掉,所以多进程要比多线程健壮")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("进程切换时,消耗的资源大,效率高.所以涉及到频繁的切换时,使用线程要好于进程 ,")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("同样如果要求同时进行又要共享某些变量的并发操作,只能用线程不能用进程")])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("执行过程: 每个独立的进程有一个程序运行的入口,顺序执行序列和程序入口,但是线程不能独立执行,必须依存在应用程序中,由应用程序提供多个线程执行控制.")])]),t._v(" "),e("li",[e("p",[t._v("线程是处理器调度的基本线程执行控制,但是进程不是,")])]),t._v(" "),e("li",[e("p",[t._v("两者均可并发执行")])])]),t._v(" "),e("p",[e("strong",[t._v("优缺点")])]),t._v(" "),e("pre",[e("code",[t._v("线程执行开销小,但是不利于资源的管理和保护,线程是个在SMP机器(双CPU系统)上运行\n\n进程执行开销大,但是能够很好的进行资源管理和保护,进程可以跨机器前移\n")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("那么")]),t._v(" "),e("p",[t._v("何时使用多进程,何时使用多线程?")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对资源的管理和保护要求高,不限制开销和效率时,使用多线程.")])]),t._v(" "),e("li",[e("p",[t._v("要求频率高,频换切换时,资源的保护管理要求不是很高是,使用多线程.")])])]),t._v(" "),e("p",[t._v("=>"),e("a",{attrs:{href:"https://www.zhihu.com/question/25532384",target:"_blank",rel:"noopener noreferrer"}},[t._v("指向知乎大佬解释"),e("OutboundLink")],1),t._v("🌈")]),t._v(" "),e("h2",{attrs:{id:"_10-请说出三种减少页面加载时间的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-请说出三种减少页面加载时间的方法"}},[t._v("#")]),t._v(" 10,  请说出三种减少页面加载时间的方法")]),t._v(" "),e("pre",[e("code",[t._v("1,  减少HTTP请求(合并文件,合并图片)  \n\n2,  优化图片，减小其尺寸\n\n3,  选择合适的图像格式（gif可用于颜色要求不高的地方）\n\n4,  压缩JS，CSS代码，把CSS放在顶部，把JS放在底部，最好把CSS和JS放到外部文件\n\n5,  服务器启用gzip功能\n\n6,  标明宽度及高度\n\n7,  网址后面加斜杠“/”(加了斜杠会减少一次判断过程，直接返回网站设置的存放在网站根目录下的默认页面)\n\n8,  避免空的src和href\n\n9,  避免跳转\n\n10, 使用get来完成Ajax请求")])])])}),[],!1,null,null,null);s.default=n.exports}}]);