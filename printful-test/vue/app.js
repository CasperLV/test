Vue.component("List", List);
Vue.component('Add', Add);
Vue.component('Edit', Edit);
const routes = [
    {
        path: '/', redirect: '/list',
    },
    {
        name: 'list',
        path: '/list',
        component: List,
        children: [
            {
                name: 'edit',
                path: ':id',
                component: Edit,
                props: true,
            }
        ],
    },
    {
        name: 'add',
        path: '/add',
        component: Add,
    },
];

const router = new VueRouter({
    routes: routes,
    mode: 'hash',
    base: '/printful-test',
})

const app = new Vue({
    el: '#app',
    router: router,
})
