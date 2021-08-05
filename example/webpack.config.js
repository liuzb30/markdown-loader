const path = require('path')
module.exports={
    mode:'development',
    entry:{
        main:path.resolve(__dirname, 'index.js')
    },
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.md$/,
                use: [
                    {loader: "html-loader"},
                    {loader: 'md-loader-2'}
                ]
            }
        ]
    }
}