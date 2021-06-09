const Edit = {
    template: `
        <section id="edit-view" >
        <h3>Labot</h3>
        <div id="recordView" v-for>
        <div class="mb-3" >
            <label for="exampleFormControlInput1" class="form-label">Virsraksts:</label>
            <input type="text" class="form-control" :value="title" >
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Apraksts:</label>
            <textarea class="form-control" rows="3" maxlength="255" :value="description" ></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-outline-primary" ><router-link to="/list">Doties atpakaļ</router-link></button>
            <button @click="delete_record(element.id)" type="button" class="btn btn-outline-danger">Dzēst</button>
            <button type="button" class="btn btn-outline-success">Saglabāt</button>
        </div>
        </div>
    </section>
    `,
     props:['id', 'title', 'description'],
    data() {
        return {
            editedTitle: '',
            editedDescription: '',
        };
    },
     created() {
         const routeId = this.$route.params.id;
        //  const selectedRecord = this.todos.find(todo => todo.id === routeId)
        //  const selectedTitle = selectedRecord.title;
        //  const selectedDescription = selectedRecord.description;
        // this.editedTitle = selectedTitle;
        //  this.editedDescription = selectedDescription;
        //  const records = []


     // console.log(selectedRecord);
         console.log(routeId)


     }



}
