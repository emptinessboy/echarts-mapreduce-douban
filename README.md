# 开发静态网站进行可视化展示

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

=======================================

**使用npm创建项目：**

[![2018010587-__38__0003.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__38__0003.jpg)](https://up.media.everdo.cn/image/FUoj)
[![2018010587-__39__0001.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__39__0001.jpg)](https://up.media.everdo.cn/image/FwG9)

**安装Echarts组件：**

这里直接参考官方教程

[![2018010587-__39__0002.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__39__0002.jpg)](https://up.media.everdo.cn/image/Fffx)


引入完成后

[![2018010587-__39__0003.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__39__0003.jpg)](https://up.media.everdo.cn/image/F1Ni)

#### 编写主界面和左侧 导航栏：

[![2018010587-__39__0004.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__39__0004.jpg)](https://up.media.everdo.cn/image/FMt4)

[![2018010587-__40__0001.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__40__0001.jpg)](https://up.media.everdo.cn/image/FyIM)

[![2018010587-__40__0002.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__40__0002.jpg)](https://up.media.everdo.cn/image/FCls)


#### 编写可视化展示组件：

这里以条形统计图代码为例， 先在组件模块对其进行封装（篇幅限制，其他统计图的代码见附件）

[![2018010587-__40__0003.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__40__0003.jpg)](https://up.media.everdo.cn/image/FTrY)
[![2018010587-__41__0001.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__41__0001.jpg)](https://up.media.everdo.cn/image/FXva)
[![2018010587-__41__0002.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__41__0002.jpg)](https://up.media.everdo.cn/image/FpV3)


#### 封装完成后，我们就可以在父组件调用条形统计图模块了。

[![2018010587-__42__0001.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__42__0001.jpg)](https://up.media.everdo.cn/image/FtfG)


#### 发起异步请求并调用模块：

我使用了axios库来发起异步网络请求，从后端（json序列）拉取数据

使用前先进行安装 npm install axios –save

**模块代码：**

[![2018010587-__42__0002.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__42__0002.jpg)](https://up.media.everdo.cn/image/F0jX)



**异步请求部分：** （放在组件的mounted生命周期钩子里调用）


#### 编译打包前端代码：

使用命令 npm run build 对Echarts展示项目进行编译输出，此时可以通过面板查看编译输出的进度。

[![2018010587-__43__0001.jpg](https://media.everdo.cn/tank/pic-bed/2021/03/02/2018010587-__43__0001.jpg)](https://up.media.everdo.cn/image/FsGI)

此时，前端的Echarts展示页面已经 编译完成，相关代码见附件。由于用到了异步请求，通过浏览器直接打开生成的index.html会出现跨域问题。因此需要将代码部署到服务器才可以访问。 这里我已经将代码上传到了阿里云OSS对象存储，可以通过如下公网地址：https://huxiaofan.com/doc/douban-info/#/ 来进行访问。
