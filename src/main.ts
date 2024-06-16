import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.component('VDataTable', DataTable)
app.component('VColumn', Column)
app.component('VPaginator', Paginator)
app.component('VIconField', IconField)
app.component('VInputIcon', InputIcon)
app.component('VInputText', InputText)
app.component('VButton', Button)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
