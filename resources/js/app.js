import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

// createInertiaApp({
//   resolve: (name) => require(`./Pages/${name}`),
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .mount(el);
//   },
// });

createInertiaApp({
  // resolve: (name) => {
  //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
  //   return pages[`./Pages/${name}.vue`];
  // },
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
