import VueElementuiExceltable from './components/Table.vue';

const install = (Vue) => {
  Vue.component(VueElementuiExceltable.name, VueElementuiExceltable);
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  VueElementuiExceltable,
};

export default VueElementuiExceltable;
