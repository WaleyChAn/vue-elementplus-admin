import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '@/styles/element.scss';
import '@/styles/index.scss';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
