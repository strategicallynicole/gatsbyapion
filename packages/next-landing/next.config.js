const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withCSS = require('@zeit/next-css');


module.exports = withPlugins(
    [
        [//withTM
            withTM,
            {
                transpileModules: ['common']
            }
        ],
        //withCSS
        withCSS
    ],
    {
    webpack (config, options) {
        config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
            limit: 800000
            }
        }
        })
        return config;
    },
    target: 'serverless'
    }
)