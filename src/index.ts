import { reactive } from '@vue/reactivity';
import { App, Plugin } from '@vue/runtime-core';

export const createMiniStore = (state: object): Plugin => {
  const store = reactive(state);
  return {
    install(app: App<Element>): void {
      app.config.globalProperties.$store = store;
      app.provide('$store', store);
    },
  };
};
