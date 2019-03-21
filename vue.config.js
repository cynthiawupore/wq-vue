module.exports = {
    devServer: {
        proxy: {
            "/xxx": {
                target: "http://xxx.com", // 域名
                ws: true,
                changOrigin: true,
                pathRequiresRewrite: {
                    "^/xxx": "/xxx"
                }
            }
        }
    }
};
