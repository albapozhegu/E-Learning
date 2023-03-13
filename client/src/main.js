import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {plugin,defaultConfig} from '@formkit/vue'
//rich text editor
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import axios from 'axios';
//import store from './store';
import './assets/main.css'

//notification
axios.defaults.baseURL ='http://localhost:5000'
//store
import Vuex from 'vuex'
import auth from "@/store/modules/auth.js";
import message from "@/store/modules/message.js";
import createPersistedState from "vuex-persistedstate";

const store = new Vuex.Store({
  modules: {
    auth,
    message
  },
  plugins: [createPersistedState()]
});

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});


axios.defaults.withCredentials = true


const app = createApp(App)
app.use(store)
app.use(router)
app.component('QuillEditor', QuillEditor);

app.use(plugin,defaultConfig({
    theme:'genesis'
}))

app.mount('#app')
