Vue.component("List", List);
Vue.component('Add', Add);
Vue.component('Edit', Edit);
const routes = [
    {
        path: '/', redirect: '/list',
    },
    {
        name: 'list',
        path: '/list/',
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
    mode: 'history',
    base: '/printful-test',
})

const app = new Vue({
    el: '#app',
    router: router,
    // data() {
    //     return {
    //         todo_list: [],
    //         err_msg: 'Atvaino, bet darāmo lietu saraksts ir tukšs! ',
    //         ajax: null,
    //         url: './helpers/dataHandler.php',
    //         show: true,
    //         isExactActive: true,
    //     };
    // },
    // created: function () {
    //     this.ajax = new XMLHttpRequest()
    //     this.request()
    // },
    // methods: {
    //     request: function () {
    //         this.ajax.onreadystatechange = this.response
    //         this.ajax.open('POST', this.url, true)
    //         this.ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    //         this.ajax.send('range=all')
    //     },
    //     response: function () {
    //         if (this.ajax.readyState == 4) {
    //             if (this.ajax.status == 200) {
    //                 this.todo_list = ""
    //                 let list = JSON.parse(this.ajax.responseText)
    //                 if (list[0]) {
    //                     this.todo_list = list
    //                 } else {
    //                     this.err_msg = list[1]
    //                 }
    //             }
    //         }
    //         // setInterval( function() {app.request()},1000)
    //     },
    // },

})
