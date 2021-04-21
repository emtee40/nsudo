(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{391:function(n,e,t){"use strict";t.r(e);var o=t(26),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nsudo-恶魔模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-恶魔模式"}},[n._v("#")]),n._v(" NSudo 恶魔模式")]),n._v(" "),t("p",[n._v("NSudo 恶魔模式 (NSudo Devil Mode) 是为想无视文件和注册表操作权限检查的开发者\n量身定做的一个用起来还算优雅的解决方案。")]),n._v(" "),t("p",[n._v("其原理是使用开源的 Microsoft Detours 库对 Windows NT 内核的文件和注册表相关的\n系统调用进行 Inline Hook 以传入选项让开发者基本不用修改自己的实现也能充分的利用\n管理员权限所提供的特权，这也使得开发者只需要把 NSudo 恶魔模式的动态链接库加载入\n自己的以管理员身份运行的应用进程的地址空间内即可启用 NSudo 恶魔模式。")]),n._v(" "),t("p",[n._v("由于 NSudo 恶魔模式可以在大部分情况下替代类似 NSudo 的工具，于是 NSudo 未来的\n功能会变得更加专业向。毕竟作为 NSudo 的作者的我可不希望 NSudo 就这么轻易地被\n替代掉。当然，由于 NSudo 恶魔模式属于 Dism++ 春哥附体的后续版本 (毕竟我也是\nDism++ 的其中一位开发者，这么说还是有依据的)，于是未来 Dism++ 的春哥附体的实现\n会被替换成 NSudo 恶魔模式以帮助我更好的重构 Dism++ 的实现。当然，NSudo 也会支持\n以恶魔模式运行应用。")]),n._v(" "),t("h2",{attrs:{id:"nsudo-恶魔模式的起源、命名和意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-恶魔模式的起源、命名和意义"}},[n._v("#")]),n._v(" NSudo 恶魔模式的起源、命名和意义")]),n._v(" "),t("p",[n._v("正如上文所说，NSudo 恶魔模式属于 Dism++ 春哥附体的后续版本，而且你也能在本文中\n了解 NSudo 恶魔模式和 Dism++ 春哥附体的区别。")]),n._v(" "),t("p",[n._v("命名为 NSudo 恶魔模式的灵感来源是《入间同学入魔了》的被蛋爷改造过的拥有四个档位\n的入间手中的“恶食戒指”。")]),n._v(" "),t("p",[n._v("最开始听到 MSMG Toolkit 的作者希望我能提供 NSudo 的 SDK 方便他进行二次开发时，\n我试着做了基于 COM 接口的 NSudo Shared Library 即 NSudoAPI，但是由于 NSudoAPI\n暴露的细节太多，如果不是对 Windows 安全特性足够了解的开发者是很难驾驭的。于是\n我觉得得换个方向，于是就做了 NSudo 恶魔模式。")]),n._v(" "),t("h2",{attrs:{id:"nsudo-恶魔模式挂钩的-windows-nt-内核系统调用列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-恶魔模式挂钩的-windows-nt-内核系统调用列表"}},[n._v("#")]),n._v(" NSudo 恶魔模式挂钩的 Windows NT 内核系统调用列表")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("名称")]),n._v(" "),t("th",[n._v("起源")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("NtCreateKey")]),n._v(" "),t("td",[n._v("Dism++ 春哥附体")])]),n._v(" "),t("tr",[t("td",[n._v("NtCreateKeyTransacted")]),n._v(" "),t("td",[n._v("NSudo 恶魔模式")])]),n._v(" "),t("tr",[t("td",[n._v("NtOpenKey")]),n._v(" "),t("td",[n._v("Dism++ 春哥附体，并增强了效果")])]),n._v(" "),t("tr",[t("td",[n._v("NtOpenKeyTransacted")]),n._v(" "),t("td",[n._v("NSudo 恶魔模式")])]),n._v(" "),t("tr",[t("td",[n._v("NtOpenKeyEx")]),n._v(" "),t("td",[n._v("Dism++ 春哥附体")])]),n._v(" "),t("tr",[t("td",[n._v("NtOpenKeyTransactedEx")]),n._v(" "),t("td",[n._v("NSudo 恶魔模式")])]),n._v(" "),t("tr",[t("td",[n._v("NtCreateFile")]),n._v(" "),t("td",[n._v("Dism++ 春哥附体")])]),n._v(" "),t("tr",[t("td",[n._v("NtOpenFile")]),n._v(" "),t("td",[n._v("Dism++ 春哥附体")])])])]),n._v(" "),t("h2",{attrs:{id:"如何使用-nsudo-恶魔模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-nsudo-恶魔模式"}},[n._v("#")]),n._v(" 如何使用 NSudo 恶魔模式")]),n._v(" "),t("p",[n._v("调用 LoadLibrary 加载 NSudo 恶魔模式的动态链接库以启用 NSudo 恶魔模式，调用\nFreeLibrary 释放 NSudo 恶魔模式的动态链接库的 HMODULE 句柄即可禁用 NSudo\n恶魔模式。")]),n._v(" "),t("p",[n._v("当然，你的应用需要在管理员权限下运行，相对于原本要求 SYSTEM 和 TrustedInstaller\n权限的情况下其实好了不少。")]),n._v(" "),t("p",[n._v("注：如果你有本事把 NSudo 恶魔模式远程注入到以管理员或者更高权限的进程内（譬如\n7-Zip），也能为该进程赋能（无视文件和注册表的权限）。")]),n._v(" "),t("p",[n._v("下面提供一个使用 C# 编写的测试用例。（遍历 C:\\System Volume Information 目录\n的内容，当启用 NSudo 恶魔模式的情况下可以正常显示，禁用后会抛出文件夹拒绝访问\n的异常。）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('using System;\nusing System.IO;\nusing System.Runtime.InteropServices;\n\nnamespace Demo\n{\n    class Program\n    {\n        [DllImport("kernel32.dll", CharSet = CharSet.Unicode)]\n        static extern IntPtr LoadLibrary(string lpLibFileName);\n\n        [DllImport("kernel32.dll", SetLastError = true)]\n        [return: MarshalAs(UnmanagedType.Bool)]\n        static extern bool FreeLibrary(IntPtr hLibModule);\n\n        static void Main(string[] args)\n        {\n            IntPtr NSudoDevilModeModuleHandle = LoadLibrary(\n                @"E:\\GitHub\\M2Team\\NSudo\\Output\\Release\\x64\\NSudoDevilMode.dll");\n\n            {\n                DirectoryInfo Folder = new DirectoryInfo(\n                @"C:\\System Volume Information");\n\n                foreach (FileInfo File in Folder.GetFiles())\n                {\n                    Console.WriteLine(File.FullName);\n                }\n            }\n\n            FreeLibrary(NSudoDevilModeModuleHandle);\n\n            {\n                DirectoryInfo Folder = new DirectoryInfo(\n                @"C:\\System Volume Information");\n\n                foreach (FileInfo File in Folder.GetFiles())\n                {\n                    Console.WriteLine(File.FullName);\n                }\n            }\n\n            Console.ReadKey();\n        }\n    }\n}\n')])])]),t("h2",{attrs:{id:"nsudo-恶魔模式的技术内幕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-恶魔模式的技术内幕"}},[n._v("#")]),n._v(" NSudo 恶魔模式的技术内幕")]),n._v(" "),t("p",[n._v("启用 SeBackupPrivilege 和 SeRestorePrivilege 是前提条件，但是你也需要在创建文件\n或注册表句柄的时候传入对应的选项，否则是不生效的。")]),n._v(" "),t("p",[n._v("首先说明一点，那就是 Windows 内核当发现调用者上下文为 SYSTEM 令牌的时候，据\nMicrosoft 文档描述是为了提升 Windows 的性能会自动忽略掉大部分访问检查，毕竟很多\nWindows 系统关键组件运行在 SYSTEM 令牌上下文下面，对于 Windows 用户模式而言，\nSYSTEM 令牌是至高无上的，所以访问检查没必要做，做了也提升不了安全性反而降低了\n效率。所以这也是为什么除了 SYSTEM 令牌上下文外的其他令牌都需要启用相关特权 +\n创建文件和注册表句柄的 API 传入对应选项才能忽略掉相关访问检查。")]),n._v(" "),t("p",[n._v("我用一个最简单的例子来说明减少不需要的内核级访问检查的好处，那就是在 Windows\nAppContainer 下运行的代码，由于会多出一个额外的内核级访问检查（用 IDA 分析\nntoskrnl.exe，然后用 F5 查看相关函数可以发现，其实就是多出了一个分支和寥寥数行\n实现），大概会比在 AppContainer 外运行会损失 15% 的性能 （这也可以说明越底层的\n实现越需要重视性能问题）。Windows AppContainer 是 Windows 8 开始提供的用户模式\n沙盒，主要用在商店应用和浏览器的沙盒上面。")]),n._v(" "),t("p",[n._v("Windows 的大部分内部使用了创建文件和注册表句柄的 API 并没有传入对应的选项，于是\n就出现了普通管理员下即使开启了这两个特权有些目录照样还是无法进行增删查改。而\nNSudo 恶魔模式通过 Inline Hook 对 Windows 用户模式的系统调用层进行挂钩以\n智能传入相关选项，这也是 NSudo 恶魔模式能在非 SYSTEM 的但拥有这两个特权的\n令牌上下文下绕过文件和注册表访问判断的缘由。")]),n._v(" "),t("p",[n._v("Windows 用户模式系统调用层指的是 ntdll.dll 导出的前缀为 Nt 或 Zw 的 API，\nWindows 用户模式下的 API 最终全会调用这部分以通过软中断陷阱门或者系统调用指令\n进入内核模式完成最终操作。")]),n._v(" "),t("p",[n._v("智能，指的是只有当前进程令牌上下文能够启用  SeBackupPrivilege 和\nSeRestorePrivilege 的时候，才会传入对应选项。毕竟如果这两个特权没有开启的话，\n传入了相关选项是会返回错误的，这也是为什么 Windows 相关实现并没有传入的原因。")]),n._v(" "),t("p",[n._v("当然 NSudo 恶魔模式为了对调用者更加透明和符合最小权限原则，在初始化的时候首先会\n创建一份当前进程令牌的模拟令牌副本，然后对该副本开启这两个特权。在 Hook 中，\n会先备份当前线程上下文的令牌，接着替换成模拟令牌副本（或者用 Microsoft 文档的\n称法是模拟令牌上下文），传入相关选项调用原 API 后再恢复为原来线程上下文的令牌。\n（实现细节请参考在 NSudo 代码仓库的 NSudo 恶魔模式的源代码）")]),n._v(" "),t("p",[n._v("我说的有些啰嗦，请见谅，希望对你有帮助。")])])}),[],!1,null,null,null);e.default=r.exports}}]);