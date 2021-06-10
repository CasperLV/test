const List = {
    template: `
    <section id="list-view" >
        <div class="list-group">
            <p v-if="todo_list.length === 0">Jums nav pievienoti uzdevumi. Varbūt, vēlaties pievienot jaunu uzdevumu?</p>
            <router-view ref="rv" :todos="todo_list"></router-view>
            <div v-show="isExactActive" v-for="todos in todo_list" :key="todos.id" :id="todos.id" :title="todos.title" class="list-group-item" aria-current="true">
                <div class="form-check form-switch">
                    <input @change="recordChecker(todos.id)" class="form-check-input" type="checkbox" v-model="todos.checked" >
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" >{{todos.title}}</h5>
                    <small>{{todos.date}}</small>
                </div>
                <p class="mb-1" >{{todos.description}}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-primary"><router-link :to="linkToEditPage + todos.id">Labot</router-link></button>
                </div>
            </div>
        </div>
            <button v-show="isExactActive"  type="button" class="btn btn-outline-primary"><router-link to="/add">Pievienot jaunu</router-link></button>
    </section>
    `,
    data() {
        return {
            todo_list: [],
            ajax: null,
            url: './helpers/dataHandler.php',
            show: true,
            isExactActive: true,
            checkedId:'',
            selectedCheck: false,

        };
    },
    updated() {
        this.isExactActive = typeof this.$refs.rv === 'undefined';
    },

    mounted() {
        this.isExactActive = typeof this.$refs.rv === 'undefined';
    },
    computed: {
        linkToEditPage() {
            return 'list/';
        },

    },
    created: function () {
        this.ajax = new XMLHttpRequest();
        this.request();


    },
    methods: {
        recordChecker: function (id) {
            const checkedId = id;
            const selectedCheckbox = this.todo_list.find(todo =>todo.id === checkedId);
            const selectedCheck = selectedCheckbox.checked;
            this.checkedId = checkedId
            this.selectedCheck = selectedCheck
        //     console.log(selectedCheck)
        //     console.log(id)
        //
        //     let self = this
        //     $.post({
        //         url: self.url,
        //         data: {
        //             action: 'check_record',
        //             id: checkedId,
        //             checked: selectedCheck,
        //         }
        //     })
        //         .always()
        //         .done()
        //         .fail()
        },
        request: function () {
            this.ajax.onreadystatechange = this.response
            this.ajax.open('POST', this.url, true)
            this.ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            this.ajax.send('range=all')
        },
        response: function () {
            if (this.ajax.readyState == 4) {
                if (this.ajax.status == 200) {
                    this.todo_list = ""
                    let list = JSON.parse(this.ajax.responseText)
                    if (list[0]) {
                        this.todo_list = list
                        console.log(list)
                    }
                }
            }
            // setInterval( function() {app.request()},1000)
        },
    },
};
