const path = require('path')                                        // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require('html-webpack-plugin')            // index.html 파일을 dist 폴더에 index_bundle.js 파일과 함께 자동으로 생성, 우리는 그냥 시작만 하고싶지 귀찮게 index.html 파일까지 만들고 싶지 않다.!!

module.exports = {                                      // moduel export (옛날 방식..)
    entry: './src/index.js',                            // 리액트 파일이 시작하는 곳
    output: {                                           // bundled compiled 파일
        path: path.join(__dirname, '/dist'),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
        filename: 'index_bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'                // 생성한 템플릿 파일
        })
    ]
}