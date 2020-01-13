import hypernova from 'hypernova/server'
import { renderVue, Vue } from 'hypernova-vue'
import express from 'express'
import path from 'path'
import './mystyles.scss'
import Advantages from './components/Advantages.vue'
import Account from './components/Account.vue'
import Points from './components/Points.vue'
import ProductList from './components/ProductList.vue'

hypernova({
  devMode: true,
  getComponent (name, context) {
    if (name === 'Advantages') {
      return renderVue(name, Vue.extend(Advantages))
    }
    if (name === 'Account') {
      return renderVue(name, Vue.extend(Account))
    }
    if (name === 'Points') {
      return renderVue(name, Vue.extend(Points))
    }
    if (name === 'ProductList') {
      return renderVue(name, Vue.extend(ProductList))
    }
  },
  port: 3030,

  createApplication () {
    const app = express()

    app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      next()
    })

    app.use(express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
