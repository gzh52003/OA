const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const {override,addDecoratorsLegacy,addWebpackAlias,fixBabelImports,useBabelRc,disableEsLint} = require('customize-cra')
// module.exports =  function(config, env) {
//     // config: webpack的配置
//     console.log('env',env);
//     console.log(config)

//     // 修改webpack配置
//     config.resolve.alias['@'] = path.resolve(__dirname,'src')
//     // config.module.rules[0].use[0].options.plugins.unshift(["@babel/plugin-proposal-decorators", { "legacy": true }])

//     // 
//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);

//     return config
// }

module.exports = override(
    addDecoratorsLegacy({
        rules:[
            {
                test:/\.jsx?$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        // 插件
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }],
                        ]
                    }
                }]
            },

            // css loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

             // sass loader
             {
                test:/\.s[ac]ss$/,

                // 增加编译速度
                // include:'./src',
                // exclude:'./node_modules',
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    }), // 支持装饰器
    addWebpackAlias({
        '@':path.join(__dirname,'src'), // D:\app\xx, /app/xxx
        '#': path.join(__dirname,'src/components'),
        '~': path.join(__dirname,'src/views')
    }), // 添加路径别名

    // ui框架按需加载
    fixBabelImports('import',{
        "libraryName": "antd-mobile",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
    }),

    // 使用.babelrc配置
    // useBabelRc(),

    // 禁用eslint
    disableEsLint()
      
)