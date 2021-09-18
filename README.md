[![Views](https://visitor-badge.glitch.me/badge?page_id=Aizaz-Ahmad.vuex-ultramini")](https://visitor-badge.glitch.me/badge?page_id=Aizaz-Ahmad.vuex-ultramini")
# Vuex Ultramini (for Vue.js v3)
An Ultra Mini Version of Vuex Store for Really Simple Tasks

## Installation

```bash
  npm i vuex-ultramini
```

## Usage
### Register it as a Plugin
Inside your entry point file, register it as: 
```js
  import { createApp } from 'vue';
  import { createMiniStore } from 'vuex-ultramini';
  import App from './App.vue';

  const app = createApp(App);

  const store = createMiniStore({
    name: 'Aizaz',
    age: 21,
  });

  app.use(store);

  app.mount('#app');
```
Then you can access it inside template as below

```html
  <template>
    {{ $store.name }} <!-- Output: 'Aizaz' -->
  </template>
```
And Access it using `this` inside Component Options as below:
```js
  export default {
    mounted(){
      console.log(this.$store.name) // Output: 'Aizaz'
    }
  }
```
To use inside Composition use `inject` as below
```js
  import { inject } from 'vue'
  export default {
    setup(){
      const store = inject('$store') 
      
      console.log(store) // Output: { name: 'Aizaz', age: 21 }
      
      return {
        store
      }
    }
  }
```

## Report Issues
Report issues or bugs in this repo's Issue Tracker.
