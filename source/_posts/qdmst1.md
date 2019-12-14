---
layout: post
title: 前端常见面试题(一)
date: 2019-11-10 10:33:19
tags: [面试题,学习之旅,前端,兼容性,bug]
categories: 
  - [JavaScript]
thumbnail: https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/thumbnail/combat.png
---


### Web前段面试题

#### 1.doctype在严格模式下和混杂模式有什么区别?

``` 
1.<!DOCTYPE>声名位于文档的最前面，在<HTML> 标签的前面，告知浏览器以何种模式来渲染文档。
2.严格模式的排版和JS运作模式都是以浏览器支持的最高的标准运行。按照W3C的标准来解析代码。
3.混杂模式是以宽松的，向后兼容的方式来解析代码。是指浏览器用自己的方式解析代码，模拟老式浏览器的行为以防止网站停止工作。
4.若DOCTYPE为声名或格式不正确，页面将会以怪异模式的方式解析。
5.Doctype标签可声明三种DLD类型，分别是严格型，过渡型，框架型。
```

####  2.行内元素和块级元素和空元素?

```js
内联元素（行内元素）内联元素(inline element)
a、 abbr 、acronym、 b 、bdo、big 、br、code、dfn 、emfont、i、img、input、kbd 、label、q、s、samp、select、small、span、strike、strong 、sub、sup、textarea、 u、var

块元素(block element)
address、blockquote、center 、dir 、div 、dl 、 fieldset、form、h1 -  h6 、hr 、menu 、noframes、、ol 、p、pre 、table 、ul

空元素:
br、meta、hr、link、input、img
```

####  3.页面导入时,使用link和@important的区别

``` js
import有兼容性问题,而css属于标签,会产生兼容性问题
页面被加载的时候,link会同时被加载,而import会等到页面加载完在进行加载
```

####  4.常见的浏览器内核有哪些? 怎么样理解

``` js
Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
Presto内核：Opera7及以上。 [Opera内核原为：Presto，现为：Blink;]
Webkit内核：Safari,Chrome等。 [ Chrome的：Blink（WebKit的分支）]
```

####  5.H5新增的特性,移出了,移出了哪些属性

```
增加: 
canvas                    画布
localStorage              本地离线缓存
window.addEventListener   事件监听
audio video               媒体标签
sessionStorage            浏览器关闭自动删除sessionStorage
footer,nav                语义化标签
Geolocation               地理定位
websocket                 通信
date,time,url             表单组件
webworker                 专用线程

移出的元素

(纯表现形元素)
<basefont> 默认字体，不设置字体，以此渲染
<font> 字体标签
<center> 水平居中
<u> 下划线
<big> 大字体
<strike> 中横线
<tt> 文本等宽
(框架集)
<frameset>
<frame>
<noframes>

把 HTML5 的元素按优先级定义为结构性属性、级块性元素、行内语义性元素和交互性元素 4 大类。
```

####  6. 如何处理H5语义化标签的兼容性处理？

```
利于SEO搜索引擎
方便开发者理解模块

IE8一下有兼容性问题

使用document.createElement()创建元素  并且设置为块级元素
```

####  7. 浏览器怎么对H5的离线存储和资源的管理和加载？

   ```
   在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
   
   离线的情况下，浏览器就直接使用离线存储的资源。
   ```

   

#### 8. H5的离线存储原理和使用？

```
1.在当前页面定义manifest
例如
<!DOCTYPE HTML>
<html manifest="cache.manifest" >
</html>
2.写一个cache.manifest文件
CACHE MANIFEST
#v0.11

CACHE:   这里写的文件会自动的缓存起来
js/app.js
css/style.css

NETWORK:  这里的文件不会被缓存,但是如果CACHE里面有的话,就会被缓存,代表CACHE的优先级会更高
./img/logo.png

FALLBACL:  如果第一个文件失败,则访问第二个文件
/ /fail.html  如果访问根目录失败,则访问fail.html文件

```

#### 9. cookie和localstorage,sessionstorage有什么区别？

```
相同点
都存储在客户端。

不同点
1.存储大小

cookie数据大小不能超过4k。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

2.有效时间

localStorage：存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。

sessionStorage：数据在当前浏览器窗口关闭后自动删除。

cookie：设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

3. 数据与服务器之间的交互方式

cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端

sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
```

#### 10. iframe的缺点

```
产生很多个页面,不容易管理
不利于SEO搜索引擎
设备兼容性差
产生滚动条,用于体验差
现在都是用AJAX来替代了frame框架
```

#### 11. 如何实现的浏览器内多个标签页之间的通信？

```
方法一:
localstorage被修改添加等都会触发一个storage事件,通过监听这个事件可以实现通信
方法二:
cookie+setintveral 将数据存储在cookie当中,每隔一段事件读取一次cookie
```

#### 12. css盒子模型

```
padding+margin+content+border
独占一行,有宽高
w3c和低版本IE有区别
```

#### 13. css的选择符有哪些？哪些属性可以继承？

```
ID
class
标签
相邻+
子>
后台li a
通配符*
属性a[ref="extral"]
伪类a:hover,li:nth-child

可继承 font-size font-family color,
不可继承 border padding margin width height ;
```

#### 14. css优先级如何计算

```
important>行内>内嵌>导入(链入)
具体计算
important无限大
id 100
class 10
标签 1
* 0
注意: 最小的权重是继承的样式,比如父元素的权重为!important 但是继承的元素的权重还没有*高
```

#### 15. css新增的伪类有哪些

```
p:nth-child(x)
p:frist-of-type
p:last-of-type
p:only-type
p:only-of-type
:checked   被选中
:enabled, :disabled    禁用状态
```

#### 16. position absolute和relative的区别？

```
区别一:
relative会保留原先的位置,absolute不会
区别二:
absolute会相对于有定位的父元素进行定位,relative会相对于该元素的原先的位置进行定位
```

#### 17. css弹性盒适用于哪些场景

```
多列盒子浮动时可以采用弹性盒
适用于移动端操作
```

#### 18. 经常遇见的浏览器问题有哪些,常用的hack的技巧有哪些

```
图片下有一个块级元素    							//会产生一个3px的缝隙
给父元素设置浮动,子元素也设置浮动,低版本ie会双边距问题   //给父元素设置块级元素
如果一个元素没有内容,最低高度为19px               //font-size:0
超链接的文字展示       							//a:link->a:visited->a:hover->a:active
ie低版本,当li最后一个标记设置浮动的时候,每个li之间会产生3px的像素   //vertical-top:top;
ie低版本,png的图片无法展示                       //导入js脚本补丁

ie条件注释法
css属性前缀法
样式前缀法
```

#### 19. 为什么初始化css的样式

```
每个浏览器的默认样式不一样,存在差异
提高编码的质量
```

#### 20. 如何理解BFC

```
不能从定义的角度去解释,bfc又叫做块级格式化上下文
功能
1. 内部元素清楚浮动
2. 相邻的兄弟之间划清界限,可以用float+div配合制作自适应布局
产生 
float不为none
position:absolute
overflow设置除了auto
一般脱离了文档流,都会产生bfc
```

#### 21. 解释下浮动和它的工作原理？清除浮动的技巧

```
浮动的元素脱离了文档流,不占据空间,浮动元素碰到包含它的边框或者浮动元素的边框停留

解决方式:
1. 父元素设置一个高度,强制撑起来,不推荐,内容增多的时候,父元素的高度也会改变,而且也没有彻底清除掉浮动
2. 设置一个常用的div,他的class为clear,设置为块级元素,清楚浮动,隐藏显示等
3. 通过after设置一个伪类 a::after{content:"",display:none,visibity:hidden,clear:both}
4. 给父元素设置overflow,原理是父元素变为bfc,那么他就会管住子元素,让子元素不对外面的元素造成影响
```

#### 22. DOM对于节点的常见操作

```
创建节点
createElement()
createTextNode()
createDocumentFragment()  常用于性能优化,给节点做一个缓冲
增加,删除,替换,插入,克隆
parentNode.appendChild(newNode)
parentNode.insertBefore(PrevNode,newNode)
replaceChild()
removeChild()
cloneNode()
查找
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.form.
document.getElementsByName()
```

#### 23. webSocket如何解决兼容性问题

```
介绍一下websocket
websocket是一种全双工通信,采用的是ws和wss协议,和http不同,他是一种有状态的协议,可以有服务端主动发起请求,而http不行,在发送的信息上面也有区别,websocket可以发送二进制文件,但是通常情况下我们会选择发送json数据,可以有效的解决ajax长轮询带来的问题
解决兼容性
1. 虽然websocket在使用上面比ajax更加的有效,但是ajax长轮询有更好的兼容性
2. 使用flash
```

#### 24.你如何对网站的文件和资源进行优化

```
使用CDN加速
图片使用一些高校的图床
服务器采用gzip压缩
css和js文件都压缩(去掉空格和换行)
采用多个域名进行缓存
文件尽量合并,减少发出的http请求数量
```

#### 25.线程于进程的区别

```
每个程序都有一个进程,每个进程都有一个线程

```

#### 26.JS兼容性问题FF与IE

```js
//IE下（两种）
document.formName.item("itemName");
document.formName.elements ["elementName"];
//Firefox下
document.formName.elements["elementName"];
//解决方法：
document.formName.elements["elementName"]


window.event只能在IE下运行,而不能在Firefox下运行


IE下,可以使用eval("idName")或getElementById("idName")来取得id为idName的HTML对象;
Firefox下只能使用getElementById("idName")来取得id为idName的HTML对象；


事件对象的属性
用IE下,even对象有x,y属性,但是没有pageX,pageY属性;
Firefox下,even对象有pageX,pageY属性,但是没有x,y属性；


IE提供了attachEvent和detachEvent两个接口；
而Firefox提供 的是 addEventListener和removeEventListener两个接口；


getElementsByClassName不能兼容IE9之前的浏览器


IE中支持使用parentElement和parentNode获取父节点。而 Firefox只可以使用parentNode。
```

#### 27.常见的css兼容问题(主要针对于IE6,7)

```js
1. png的图片不加载
解决: 换一种图片格式或者在晚上找插件去解决

2. ie6的margin不能设置为负数
解决: 可以通过相对定位设置

3. 在ie6下,固定定位是无效的
解决: 通过js去控制

4. ie6,7中,输入类型的表单控件会有1px的间隙
解决: 通过定位去设置

5. ie6下面,绝对定位的父元素宽高设置为奇数的时候,会出现偏差
解决: 在页面设计的时候,尽量去使用偶像素

6.在ie6情况下,如果高度小于19px,会被当成19像素去处理
解决: 添加overflow:hidden
```

#### 28.字体为何设置为偶数

```
1. 考虑UI设计师的角度,一般设计师设计的时候使用的像素都是偶数
2. 考虑兼容性问题,在ie6等低版本情况下的时候,如果像素设置为奇数,可能会造成汉子扁宽的效果
3. 有时候会通过字体大小去设置页面的margin像素等问题,如果像素为14那么margin可以是14*1.5=21  如果是奇数的话,乘机就会出现小数问题
```

#### 29.什么是AJAX,如何解决AJAX兼容性问题

```
定义: AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

解决
1. 通过jsonp的回调函数callback解决
2. 通过CORS跨域资源共享,设置响应头
3. 通过ngxin做一个代理
```

#### 30.call和apply的区别和作用

```
作用: 修改js里面的this指向问题

区别: call接收多个参数,第一个参数为this指向的对象,后面的参数为传递的参数,apply接收两个参数,第一个参数为this指向的对象,第二个参数是一个数组,数组的内容是传递的参数

总结：call和apply接收的参数不一样,但是实现的功能是一样的
```

