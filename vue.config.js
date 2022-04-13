module.exports = {
    devServer:{
        host: 'localhost',
        port: 8888,
        proxy: {
            ['/']:{
                ws: false,
                target: 'http://localhost:8999',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}