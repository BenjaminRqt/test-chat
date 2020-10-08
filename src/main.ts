import { createApp } from 'vue'
import router from './Router/route';
import AxiosPlugin from 'vue-axios-cors'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(AxiosPlugin)
app.mount("#app")
