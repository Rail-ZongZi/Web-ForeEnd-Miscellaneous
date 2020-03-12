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
