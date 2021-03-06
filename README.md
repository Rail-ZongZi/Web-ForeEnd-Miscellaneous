包含一些前端领域中的大杂烩

axios请求拦截
-

- [x] `axios` 在 `Vue` 中的使用
  

**Axios** 是一个基于 `promise` 的 `HTTP` 库 、 在客户端和`node`服务端都可以进行使用

> `Axios` 有哪些特性

- 支持 `Promise` API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换`JSON`数据
- 客户端支持防御`XSRF`

> **`axios`** 常见的五种方法

- `get`:获取数据 、 `post`：提交数据 **（表单提交，文件上传）**、 `put`：更新数据 **（所有数据推送到后端）** 、 `patch`：更新数据 **（只推送修改的数据到后端）** 、`delete`： **删除数据** 方法

- 分为三种方案（同步&异步）

- [x] `GET`获取数据

```markdown
  // get同步请求
  axios.get('url?id=123')
    .then(res=>{})
    .catch(error=>{})
    .then(()=>{})
  axios.get('/url', {
    params: {
      id: 123
    }
  })
  .then(res=>{})
  .catch(error=>{})
  .then(()=>{})
  // 单独设置请求类型
  axios({
    method: 'get',
    url: '/url',
    params: {
      id: 123
    }
  }).then(res=>{})
  // 异步获取
  async function getUser() {
    try() {
      const res = await axios.get('/url?id=123');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
```

- [x] `POST`提交数据

- post请求一般有两种方式 `form-data` 表单提交 （图片上传、文件上传）`applicition/json` 以 `JSON` 形式提交

```markdown
  // 需要提交数据 applicition/json
  let date = {
    id: 123
  }
  axios.post('/url', date)
    .then(res=>{})
    .catch(error=>{})
    .then(()=>{})
  axios({
    method: 'post',
    url: '/post',
    data: date
  })
  .then(res=>{})
  .catch(error=>{})
  .then(()=>{})

  // 以 form-data形式提交
  let formData = new FormData()
  for(let key in value) {
    formData.append(key, data[key])
  }
  axios.post('/url', formData)
    .then(res=>{})
    .catch(error=>{})
```

- [x] `put`和`patch`提交数据也有两种方式

> **axios** 并发请求

- 同时进行多个请求， 并统一处理返回值
- `axios.all`接收多个数组请求，`axios.spread`进行分割返回接口参数

```markdown
  axios.all([],[]).then(axios).spread(()=>{})
```

> **axios** 创建实例

```vue
  axios.create({
    baseURL: 'http://xxx.com', // 总地址
    url: '/url',    // url地址
    method: 'get',    // 请求类型
    headers: {
      token: ''     // 设置请求头
    },
    params: {
      id: 123       // 设置请求参数
    },
    timeout: 2000     // 请求超时时间设置，时间一过没获取数据 出现 401报错
  })
```

> **axios** 拦截器

- 在请求或响应被处理前拦截

```markdown
```

koa搭建RESTful接口规则
-

> 安全

- HTTPS

- 鉴权 （只有登录才可以访问）

- 限流 （Token 、JWT 、OAutn）
  
> 项目目录搭建

- 将 **`路由`** 单独放到一个目录
- 将 **`控制器`** 单独放在一个目录
- 使用 **`类`** + **`类方法`** 的方式组织控制器

```javascript

```

> 错误处理机制

- 原生方法实现和利用`koa-json-error`
- 校验规则`koa-parameter`

- [x] **错误处理**

- 处理软件或信息系统中出现的异常状况

- [x] **异常状况**

- 运行时错误，都返回 `500`
- 逻辑错误，如找不到（404）、先决条件失败（412）、无法处理的实体（参数格式不对，422）等

> [数据库连接]('./../DataBase.md')

- 非关系型 **MongoDB**
- 关系型 **MySQL**


