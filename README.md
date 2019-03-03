# vue-base
## 搭建前端服务器：
- 安装node.js，下载相应版本的node.js,下载地址：https://nodejs.org/en/download/，下载完双击安装，点击下一步直到安装完成
- 安装完成后，附件里选择命令提示符（或者在开始的搜索框里输入cmd回车调出命令面板）输入：node -v回车，出现相应版本证明安装成功，
　node环境已经安装完成，由于有些npm有些资源被屏蔽或者是国外资源的原因，经常会导致用npm安装依赖包的时候失败，所有我还需要npm的
　国内镜像---cnpm。在命令行中输入：npm install -g cnpm -registry=https://registry.npm.taobao.org回车，大约需要3分钟，
　如果报错或没反应，则卸掉node.js重新安装
- 安装全局vue-cli脚手架，用于帮助搭建所需的模板框架。输入命令：cnpm install -g vue-cli回车等待完成。
- 创建项目，首先我们要选定目录，然后再命令行中把目录转到选定的目录，假如我们打算把项目新建在e盘下的vue文件夹中则输入下面的命令：
　e:回车，然后cd vue，然后输入命令：vue init webpack 项目文件夹名称，回车，运行初始化命令的时候会让用户输入几个基本的选项，
　如项目名称，描述，作者等信息，如果不想填直接回车默认就好。(一顿回车+N键就完成了)
- 安装项目所需的依赖包，首先输入：cd 项目名回车，然后输入：cnpm install回车等待安装，安装完成之后，会在我们的项目目录firstVue
　文件夹中多出一个node_modules文件夹，这里边就是我们项目需要的依赖包资源。安装完依赖包之后，就可以运行整个项目了。
- 测试环境是否搭建成功，在cmd里输入：cnpm run dev回车，项目运行成功后，浏览器会自动打开localhost:8080（如果浏览器没有自动打开
　，可以手动输入）。运行成功后，会看到Welcome to Your Vue.js App页面。

## iview官网
http://v1.iviewui.com/
