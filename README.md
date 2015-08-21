## webpack 使用示例

配置文件 `webpack.config.js`

### 入门

```bash
$ webpack ./entry.js
```

`index.html` `entry.js` `content.js` `style.css`

### code spliting

```bash
$ webpack ./entry.js
```

`index.html` `entry.js` `a.js` `b.js` `c.js` `d.js`
