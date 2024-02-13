/**
 * 为什么需要用 nginx？
 * 作为一个完整的静态资源服务器，以下功能往往需要重新开发
 * 1. cleanUrl: 重写 URL 地址, /user?id=1 => /user/1
 * 2. trailingSlash: 确保地址以斜杠结尾
 * 3. rewrite: 根据一定规则重写 URL，/user/1 => /profile.php?user_id=1
 * 4. redirect: 重定向, /user => /user.html
 * 5. cache: 缓存, 缓存静态资源
 * 6. cors: 跨域, 允许跨域请求
 */


/**
 * 以上功能虽然可以手写
 * 但 js 性能可能仍然不如 nginx
 */