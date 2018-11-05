# note

## 打包记录

https://segmentfault.com/a/1190000013924153

## BUG 记录

### npm i 安装时间过长的问题

猜测：天朝的高级防火墙

解决方案：

在~/.npmrc里做如下设置

```shell
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```
