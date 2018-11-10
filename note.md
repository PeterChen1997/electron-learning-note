# note

## 打包记录

https://segmentfault.com/a/1190000013924153

## 教程

https://github.com/sindresorhus/awesome-electron

https://www.youtube.com/watch?v=tqBi_Tou6wQ&list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&index=1

## BUG 记录

### 设置node和yarn镜像源

```
yarn config set registry 'https://registry.npm.taobao.org'
npm config set registry 'https://registry.npm.taobao.org'
```

### npm i 安装时间过长的问题

猜测：天朝的高级防火墙

解决方案：

```shell
# method1 : 在~/.npmrc里做如下设置
electron_mirror="https://npm.taobao.org/mirrors/electron/"

# method2 : shell运行
npm config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
```

### 解决windows虚拟机的UNC路径不受支持的问题

解决方案

在注册表中,添加一个值即可.路径如下: 
HKEY_CURRENT_USER\Software\Microsoft\Command Processor 
添加值 DisableUNCCheck， 类型为 REG_DWORD 并将该值设置为1 （十六进制）

批处理文件如下：

```
reg add "HKEY_CURRENT_USER\Software\Microsoft\Command Processor" /v "DisableUNCCheck" /t "REG_DWORD" /d "1" /f  
```

运行之后可以通过 regedit查看是否添加成功（也可以手动添加）

## 使用vue-cli3编写electron

1. install vue-cli 3
2. vue create project-name
3. 安装插件 vue add electron-builder
