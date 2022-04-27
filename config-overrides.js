const path = require("path");

module.exports = {
    webpack: function (config, env) {
        config.resolve.alias = {
            '@': path.resolve(__dirname, "src"),
        }
        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                "sass-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: `@import "~@/styles/_variables.scss";`
                    },
                }
            ],
        },)
        return config;
    }
}