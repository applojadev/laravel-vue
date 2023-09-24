import './bootstrap';

import '../sass/app.scss';

import 'animate.css';

import { createApp } from 'vue';

import App from './views/App.vue'

import {routes} from './routes/route';

import {pinia} from './plugins/pinia'

import {vuetify} from './plugins/vuetify'

const app = createApp(App)
  
app.use(routes)

app.use(pinia)

app.use(vuetify)

app.mount('#app')