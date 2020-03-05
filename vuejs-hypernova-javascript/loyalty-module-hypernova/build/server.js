import hypernova from 'hypernova/server';
import { renderVue, Vue } from 'hypernova-vue';
import express from 'express';
import path from 'path';
import '../src/mystyles.scss';
import Module from '../src/components/Module.vue';

hypernova({
  devMode: true,
  getComponent(name) {
    if (name === 'Points') {
      return renderVue(name, Vue.extend(Module));
    }
    return null;
  },
  port: 3030,

  createApplication() {
    const app = express();

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');// update to match the domain you will make the request from
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    app.use(express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
});
