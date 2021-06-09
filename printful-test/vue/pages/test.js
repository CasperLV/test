
// data() {
//     return {
//         todo_list: [],
//         err_msg: 'No records....!',
//         url: './helpers/dataHandler.php',
//         show: true,
//     };
// },
// created:function () {
//     this.retrieve_all()
// },
// methods: {
//     retrieve_all:function () {
//         let self = this
//         $.ajax({
//             url:self.url,
//             method:'POST',
//             data:{
//                 action:'retrieve_all'
//             }
//         })
//             .always(function(data){
//                 self.todo_list = []
//                 self.err_msg = ''
//             })
//             .done(function(data){
//                 let result = JSON.parse(data)
//                 if(result[0]) {
//                     self.todo_list = result[1]
//                 }else{
//                     self.err_msg = result[1]
//                 }
//             })
//             .fail(function(data){
//                 self.err_msg = data.statusText
//             })
//     },
// },
// v-for="element in todo_list" :key="element.id"


// <router-view
//     v-for="element in todo_list"
//             :key="element.id"
// :id="element.id"
// :title="element.title"
// :description="element.description"
// :date="element.date"
// :checked="false"
// ></router-view>
