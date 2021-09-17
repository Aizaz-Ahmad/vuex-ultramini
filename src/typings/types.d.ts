import { Plugin } from '@vue/runtime-core';
/**
 * Create Mini Store
*
  ```javascript
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
  ```html
    <!--Usage Inside Templates-->
    <template>
      {{ $store.name }} -> 'Aizaz'
    </template>
  ```
 *
*/
export declare const createMiniStore: (state: object) => Plugin;
