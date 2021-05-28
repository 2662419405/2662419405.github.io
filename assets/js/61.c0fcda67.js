(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{103:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http基础"}},[t._v("#")]),t._v(" http基础")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("http是前端一个很重点的内容")])]),t._v(" "),v("p",[t._v("http是一个我们每天都在使用,但是却不是很熟悉的一个协议,今天我们来看一下这个协议有哪些特点")]),t._v(" "),v("h2",{attrs:{id:"http协议特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议特点"}},[t._v("#")]),t._v(" http协议特点")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。")])]),t._v(" "),v("li",[v("p",[t._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")])]),t._v(" "),v("li",[v("p",[t._v("无状态：无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),t._v(" "),v("li",[v("p",[t._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快")])])]),t._v(" "),v("h2",{attrs:{id:"http请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[t._v("#")]),t._v(" http请求")]),t._v(" "),v("p",[v("strong",[t._v("http请求由三部分组成，分别是：请求行、消息报头、请求正文")])]),t._v(" "),v("h3",{attrs:{id:"_1-请求行以一个方法符号开头，以空格分开，后面跟着请求的uri和协议的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求行以一个方法符号开头，以空格分开，后面跟着请求的uri和协议的版本"}},[t._v("#")]),t._v(" 1. 请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本")]),t._v(" "),v("p",[v("code",[t._v("Method Request-URI HTTP-Version CRLF")]),t._v(" 就是一个请求头其中 Method表示请求方法；Request-URI是一个统一资源标识符；HTTP-Version表示请求的HTTP协议版本；CRLF表示回车和换行（除了作为结尾的CRLF外，不允许出现单独的CR或LF字符）。例如-> "),v("code",[t._v("GET /index.html HTTP/1.1 (CRLF)")])]),t._v(" "),v("p",[t._v("请求方法（所有方法全为大写）有多种，各个方法的解释如下：")]),t._v(" "),v("p",[t._v("GET 请求获取Request-URI所标识的资源")]),t._v(" "),v("p",[t._v("POST 在Request-URI所标识的资源后附加新的数据")]),t._v(" "),v("p",[t._v("HEAD 请求获取由Request-URI所标识的资源的响应消息报头")]),t._v(" "),v("p",[t._v("PUT 请求服务器存储一个资源，并用Request-URI作为其标识")]),t._v(" "),v("p",[t._v("DELETE 请求服务器删除Request-URI所标识的资源")]),t._v(" "),v("p",[t._v("TRACE 请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),v("p",[t._v("CONNECT 保留将来使用")]),t._v(" "),v("p",[t._v("OPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求")]),t._v(" "),v("h3",{attrs:{id:"_2-请求头就是我们常用的-比如主机是什么-比如用户标识符useragent-语言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求头就是我们常用的-比如主机是什么-比如用户标识符useragent-语言"}},[t._v("#")]),t._v(" 2. 请求头就是我们常用的,比如主机是什么,比如用户标识符userAgent,语言")]),t._v(" "),v("p",[v("strong",[t._v("常用的请求报头")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Accept请求报头域用于指定客户端接受哪些类型的信息。eg：Accept：image/gif，表明客户端希望接受GIF图象格式的资源；Accept：text/html，表明客户端希望接受html文本。")])]),t._v(" "),v("li",[v("p",[t._v("Accept-Charset请求报头域用于指定客户端接受的字符集。eg：Accept-Charset:iso-8859-1,gb2312.如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。")])]),t._v(" "),v("li",[v("p",[t._v("Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。eg：AcceptEncoding:gzip.deflate.如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。")])]),t._v(" "),v("li",[v("p",[t._v("Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。eg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。")])]),t._v(" "),v("li",[v("p",[t._v("我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息。User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。不过，这个报头域不是必需的，如果我们自己编写一个浏览器，不使用User-Agent请求报头域，那么服务器端就无法得知我们的信息\n了。")])]),t._v(" "),v("li",[v("p",[t._v("Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的")])])]),t._v(" "),v("h3",{attrs:{id:"_3-请求体这个需要根据方法不同来进行不同的定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-请求体这个需要根据方法不同来进行不同的定义"}},[t._v("#")]),t._v(" 3. 请求体这个需要根据方法不同来进行不同的定义")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("请求行")]),t._v(" "),v("p",[t._v("下面的demo中可以看出,第一行是请求行,2-7为请求头,第8行表示一个空行 表示请求头结束 这个空行是必须的,第9行是数据体，比如是需要查询的信息。")])]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sample"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jspHTTP"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nAccept"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("image"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gif"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jpeg\nAccept"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("zh"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cn\nConnection"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Keep"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive\nHost"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("localhost\nUser"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Mozila"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compatible"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MSIE5")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v(".01")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Window "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NT5")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAccept"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gzip"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("deflate\n\nusername"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jinqiao"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("password"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br")])]),v("h2",{attrs:{id:"http响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http响应"}},[t._v("#")]),t._v(" http响应")]),t._v(" "),v("p",[v("strong",[t._v("HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文")])]),t._v(" "),v("h3",{attrs:{id:"_1-状态行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态行"}},[t._v("#")]),t._v(" 1. 状态行")]),t._v(" "),v("p",[v("code",[t._v("HTTP-Version Status-Code Reason-Phrase CRLF")]),t._v(" 其中，HTTP-Version表示服务器HTTP协议的版本；Status-Code表示服务器发回的响应状态代码；ReasonPhrase表示状态代码的文本描述。")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("状态码是重中之重,必须要掌握常用的集中状态码,分别如下")])]),t._v(" "),v("p",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("状态码")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("信息")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1xx")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("指示信息--表示请求已接收，继续处理")])]),t._v(" "),v("tr",[v("td",[t._v("2xx")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("成功--表示请求已被成功接收、理解、接受")])]),t._v(" "),v("tr",[v("td",[t._v("3xx")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("重定向--要完成请求必须进行更进一步的操作")])]),t._v(" "),v("tr",[v("td",[t._v("4xx")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("客户端错误--请求有语法错误或请求无法实现")])]),t._v(" "),v("tr",[v("td",[t._v("5xx")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("服务器端错误--服务器未能实现合法的请求")])])])]),t._v(" "),v("p",[v("strong",[t._v("常用的状态码")])]),t._v(" "),v("table",[v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[v("b",[t._v("状态码")])]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[v("b",[t._v("状态码英文名称")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("b",[t._v("中文描述")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("200")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("OK")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("客户端请求成功")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("400")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Bad Request")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("401")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Unauthorized")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("请求未经授权")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("403")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Forbidden")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("服务器收到请求，但是拒绝提供服务,比如说token失败,或者用户名密码错误等等")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("404")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Not Found")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("请求资源不存在，eg：输入了错误的URL")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("500")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Internal Server Error")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("服务器发生不可预期的错误")])]),t._v(" "),v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[t._v("503")]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[t._v("Server Unavailable")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])]),t._v(" "),v("p",[v("strong",[t._v("状态码总览")])]),t._v(" "),v("table",[v("tr",[v("td",{staticStyle:{width:"70px"},attrs:{align:"center"}},[v("b",[t._v("状态码")])]),t._v(" "),v("td",{staticStyle:{width:"140px"},attrs:{align:"center"}},[v("b",[t._v("状态码英文名称")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("b",[t._v("中文描述")])])]),t._v(" "),v("tr",[v("td",{attrs:{colspan:"3",align:"center"}},[v("b",[t._v("1开头的状态码")])])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("100")]),t._v(" "),v("td",[t._v("Continue")]),t._v(" "),v("td",[t._v("继续。客户端应继续其请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("101")]),t._v(" "),v("td",[t._v("Switching Protocols")]),t._v(" "),v("td",[t._v("切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议")])]),t._v(" "),v("tr",[v("td",{attrs:{colspan:"3",align:"center"}},[v("b",[t._v("2开头的状态码")])])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("200")]),t._v(" "),v("td",[t._v("OK")]),t._v(" "),v("td",[t._v("请求成功。一般用于GET与POST请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("201")]),t._v(" "),v("td",[t._v("Created")]),t._v(" "),v("td",[t._v("已创建。成功请求并创建了新的资源")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("202")]),t._v(" "),v("td",[t._v("Accepted")]),t._v(" "),v("td",[t._v("已接受。已经接受请求，但未处理完成")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("203")]),t._v(" "),v("td",[t._v("Non-Authoritative Information")]),t._v(" "),v("td",[t._v("非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("204")]),t._v(" "),v("td",[t._v("No Content")]),t._v(" "),v("td",[t._v("无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("205")]),t._v(" "),v("td",[t._v("Reset Content")]),t._v(" "),v("td",[t._v("重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("206")]),t._v(" "),v("td",[t._v("Partial Content")]),t._v(" "),v("td",[t._v("部分内容。服务器成功处理了部分GET请求")])]),t._v(" "),v("tr",[v("td",{attrs:{colspan:"3",align:"center"}},[v("b",[t._v("3开头的状态码")])])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("300")]),t._v(" "),v("td",[t._v("Multiple Choices")]),t._v(" "),v("td",[t._v("多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("301")]),t._v(" "),v("td",[t._v("Moved Permanently")]),t._v(" "),v("td",[t._v("永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("302")]),t._v(" "),v("td",[t._v("Found")]),t._v(" "),v("td",[t._v("临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("303")]),t._v(" "),v("td",[t._v("See Other")]),t._v(" "),v("td",[t._v("查看其它地址。与301类似。使用GET和POST请求查看")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("304")]),t._v(" "),v("td",[t._v("Not Modified")]),t._v(" "),v("td",[t._v("未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("305")]),t._v(" "),v("td",[t._v("Use Proxy")]),t._v(" "),v("td",[t._v("使用代理。所请求的资源必须通过代理访问")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("306")]),t._v(" "),v("td",[t._v("Unused")]),t._v(" "),v("td",[t._v("已经被废弃的HTTP状态码")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("307")]),t._v(" "),v("td",[t._v("Temporary Redirect")]),t._v(" "),v("td",[t._v("临时重定向。与302类似。使用GET请求重定向")])]),t._v(" "),v("tr",[v("td",{attrs:{colspan:"3",align:"center"}},[v("b",[t._v("4开头的状态码")])])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("400")]),t._v(" "),v("td",[t._v("Bad Request")]),t._v(" "),v("td",[t._v("客户端请求的语法错误，服务器无法理解")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("401")]),t._v(" "),v("td",[t._v("Unauthorized")]),t._v(" "),v("td",[t._v("请求要求用户的身份认证")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("402")]),t._v(" "),v("td",[t._v("Payment Required")]),t._v(" "),v("td",[t._v("保留，将来使用")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("Forbidden")]),t._v(" "),v("td",[t._v("服务器理解请求客户端的请求，但是拒绝执行此请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("404")]),t._v(" "),v("td",[t._v("Not Found")]),t._v(" "),v("td",[t._v('服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面')])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("405")]),t._v(" "),v("td",[t._v("Method Not Allowed")]),t._v(" "),v("td",[t._v("客户端请求中的方法被禁止")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("406")]),t._v(" "),v("td",[t._v("Not Acceptable")]),t._v(" "),v("td",[t._v("服务器无法根据客户端请求的内容特性完成请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("407")]),t._v(" "),v("td",[t._v("Proxy Authentication Required")]),t._v(" "),v("td",[t._v("请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("408")]),t._v(" "),v("td",[t._v("Request Time-out")]),t._v(" "),v("td",[t._v("服务器等待客户端发送的请求时间过长，超时")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("409")]),t._v(" "),v("td",[t._v("Conflict")]),t._v(" "),v("td",[t._v("服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("410")]),t._v(" "),v("td",[t._v("Gone")]),t._v(" "),v("td",[t._v("客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("411")]),t._v(" "),v("td",[t._v("Length Required")]),t._v(" "),v("td",[t._v("服务器无法处理客户端发送的不带Content-Length的请求信息")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("412")]),t._v(" "),v("td",[t._v("Precondition Failed")]),t._v(" "),v("td",[t._v("客户端请求信息的先决条件错误")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("413")]),t._v(" "),v("td",[t._v("Request Entity Too Large")]),t._v(" "),v("td",[t._v("由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("414")]),t._v(" "),v("td",[t._v("Request-URI Too Large")]),t._v(" "),v("td",[t._v("请求的URI过长（URI通常为网址），服务器无法处理")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("415")]),t._v(" "),v("td",[t._v("Unsupported Media Type")]),t._v(" "),v("td",[t._v("服务器无法处理请求附带的媒体格式")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("416")]),t._v(" "),v("td",[t._v("Requested range not satisfiable")]),t._v(" "),v("td",[t._v("客户端请求的范围无效")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("417")]),t._v(" "),v("td",[t._v("Expectation Failed")]),t._v(" "),v("td",[t._v("服务器无法满足Expect的请求头信息")])]),t._v(" "),v("tr",[v("td",{attrs:{colspan:"3",align:"center"}},[v("b",[t._v("5开头的状态码")])])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("500")]),t._v(" "),v("td",[t._v("Internal Server Error")]),t._v(" "),v("td",[t._v("服务器内部错误，无法完成请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("501")]),t._v(" "),v("td",[t._v("Not Implemented")]),t._v(" "),v("td",[t._v("服务器不支持请求的功能，无法完成请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("502")]),t._v(" "),v("td",[t._v("Bad Gateway")]),t._v(" "),v("td",[t._v("充当网关或代理的服务器，从远端服务器接收到了一个无效的请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("503")]),t._v(" "),v("td",[t._v("Service Unavailable")]),t._v(" "),v("td",[t._v("由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("504")]),t._v(" "),v("td",[t._v("Gateway Time-out")]),t._v(" "),v("td",[t._v("充当网关或代理的服务器，未及时从远端服务器获取请求")])]),t._v(" "),v("tr",{attrs:{align:"center"}},[v("td",[t._v("505")]),t._v(" "),v("td",[t._v("HTTP Version not supported")]),t._v(" "),v("td",[t._v("服务器不支持请求的HTTP协议的版本，无法完成处理")])])]),t._v(" "),v("h3",{attrs:{id:"_2-消息报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息报头"}},[t._v("#")]),t._v(" 2. 消息报头")]),t._v(" "),v("p",[t._v("和请求头差不多,是相应给我们的头部信息,有可能包括服务器类型,返回文档类型,编码,时间等等,具体的信息可以用f12查看network,分辨点击不同的资源进行查看")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Cache-Control 用于指定缓存指令，缓存指令是单向的（响应中出现的缓存指令在请求中未必会出现），且是独立的（一个消息的缓存指令不会影响另一个消息处理的缓存机制），HTTP1.0使用的类似的报头域为Pragma。")])]),t._v(" "),v("li",[v("p",[t._v("Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")])]),t._v(" "),v("li",[v("p",[t._v("Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法")])]),t._v(" "),v("li",[v("p",[t._v("Content-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读")])]),t._v(" "),v("li",[v("p",[t._v("Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")])]),t._v(" "),v("li",[v("p",[t._v("Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型")])]),t._v(" "),v("li",[v("p",[t._v("Last-Modified实体报头域用于指示资源的最后修改日期和时间。")])])]),t._v(" "),v("h3",{attrs:{id:"_3-响应体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应体"}},[t._v("#")]),t._v(" 3. 响应体")]),t._v(" "),v("p",[t._v("就是返回的数据内容,如果是一个html,就返回html文本")])])}),[],!1,null,null,null);e.default=a.exports}}]);