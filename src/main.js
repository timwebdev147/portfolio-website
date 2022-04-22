import { createApp } from 'vue'
import App from './App.vue'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faB, fas, faCar } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas);
library.add(far)
library.add(faB)
library.add(faCar)
dom.watch();

createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).mount('#app')
