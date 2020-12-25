# 自动化项目修改工具

<font size = 4>**介绍**</font>

./config：配置文件（路径、正则、规则）

./data: 文档（.txt)

<font size = 4>**使用**</font>

安装依赖：`npm install`

找出项目中需要修改的部分：`npm run findCommon`

修改项目中需要修改的部分：`npm run rewrite`

撤销项目中的修改：`npm run rollBack`

生成文档对应的hashMap：`npm run hashMap`

找出项目中匹配的项：`npm run project`

找出文件中匹配的项：`npm run file`