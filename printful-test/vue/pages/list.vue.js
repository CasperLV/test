const List = {
    template: `
    <section id="list-view" >
        <div class="list-group">
            <p v-if="todo_list.length === 0">{{err_msg}}</p>
<!--            Edit view-->
            <router-view v-else ref="rv" :todos="todo_list"></router-view>
<!--            List view-->
            <div v-show="isExactActive" v-for="todos in todo_list" :key="todos.id" :id="todos.id" :title="todos.title" id="record-base" class="list-group-item" aria-current="true">
                <div class="form-check form-switch">
                    <input  @change="recordChecker(todos.id)" class="form-check-input" type="checkbox" v-model="todos.checked" :true-value="1" :false-value="0">
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" >{{todos.title}}</h5>
                    <small>{{todos.date}}</small>
                </div>
                <p class="mb-1" >{{todos.description}}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                   <router-link :to="'list/' + todos.id" tag="button" class="btn btn-outline-primary" >Labot</router-link>
                </div>
            </div>
        </div>
        <div id="sticky_button">
            <router-link v-show="isExactActive" to="/add" tag="button"  class="btn btn-outline-primary">Pievienot jaunu</router-link>        
        </div>
    </section>
    `,
    data() {
        return {
            todo_list: [],
            ajax: null,
            url: './helpers/dataHandler.php',
            show: true,
            isExactActive: true,
            err_msg: 'Atvaino, nav ierakstu!',
        };
    },
    //functions to hide parent route component when displayed child route component
    updated: function() {
        this.isExactActive = typeof this.$refs.rv === 'undefined';
    },

    mounted: function() {
        this.isExactActive = typeof this.$refs.rv === 'undefined';
    },
    //functions for HttpRequests
    created: function () {
        this.ajax = new XMLHttpRequest();
        this.request();
    },
    methods: {
        recordChecker: function (id) {
            const checkedId = id;
            const selectedCheckbox = this.todo_list.find(todo => todo.id === checkedId);
            const selectedCheck = selectedCheckbox.checked;
            let self = this
            $.post({
                url: self.url,
                data: {
                    action: 'check_record',
                    id: checkedId,
                    checked: selectedCheck,
                }
            })
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
                    }
                }
            }
            // setInterval( function() {response()},1000);
        },
    },
};
