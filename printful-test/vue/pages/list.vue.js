const List = {
    template: `
    <section id="list-view" >
        <div class="list-group">
<!--            <p v-if="todo_list.length === 0">Jums nav pievienoti uzdevumi. Varbūt, vēlaties pievienot jaunu uzdevumu?</p>-->
            <div class="list-group-item" aria-current="true">
                <input type="checkbox">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" >{{title}}</h5>
                    <small>{{date}}</small>
                </div>
                <p class="mb-1" >{{description}}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-primary"><router-link :to="id">Labot</router-link></button>
                </div>
            </div>
        </div>
            <button  type="button" class="btn btn-outline-primary"><router-link to="/add">Pievienot jaunu</router-link></button>
    </section>
    `,
     props: ['title', 'description', 'date', 'id'],
     // inject: ['todos'],
    data() {
        return {
             // todo_list: [],
            err_msg: 'Atvaino, bet darāmo lietu saraksts ir tukšs! ',
            // ajax: null,
            // url: './helpers/dataHandler.php',
            // show: true,
        };
    },


    // created:function () {
    //     this.ajax = new XMLHttpRequest()
    //     this.request()
    // },
    // methods: {
    //     request:function () {
    //         this.ajax.onreadystatechange = this.response
    //         this.ajax.open('POST', this.url, true)
    //         this.ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    //         this.ajax.send('range=all')
    //     },
    //     response:function() {
    //         if(this.ajax.readyState == 4) {
    //             if(this.ajax.status == 200) {
    //                 this.todo_list = ""
    //                 let list = JSON.parse(this.ajax.responseText)
    //                 if(list[0]) {
    //                     this.todo_list = list
    //                 }else{
    //                     this.err_msg = list[1]
    //                 }
    //             }
    //         }
    //         // setInterval( function() {app.request()},1000)
    //     },
    // },
};
