set -a 

echo "Dans le build js."
ls
npm install express postcss-loader vue-server-renderer hypernova hypernova-vue@2.0.0
npm install webpack webpack-cli --save-dev


# npm install hypernova hypernova-vue
./node_modules/.bin/webpack --config ./build/webpack.config.js --mode production
