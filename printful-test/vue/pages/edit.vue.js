const Edit = {
    template: `
        <section id="edit-view" >
        <h3>Labot</h3>
        <div id="recordView">
        <div class="mb-3" >
            <label for="exampleFormControlInput1" class="form-label">Virsraksts:</label>
            <input v-model.trim="updated_record.title" type="text" class="form-control" >
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Apraksts:</label>
            <textarea v-model.trim="updated_record.description" class="form-control" rows="3" maxlength="255"  ></textarea>
        </div>
        <input v-model.trim="updated_record.id" type="hidden" >
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-outline-primary" ><router-link to="/list">Doties atpakaļ</router-link></button>
            <button @click="delete_record(updated_record.id)" type="button" class="btn btn-outline-danger">Dzēst</button>
            <button  type="button" class="btn btn-outline-success" @click="update_record(updated_record.id)">Saglabāt</button>
        </div>
        </div>
    </section>
    `,
    props: {
        todos: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            updated_record: {
                id: '',
                title: '',
                description: '',
            },
            url: 'http://localhost/printful-test/helpers/dataHandler.php',
        };
    },
    created() {
        const routeId = this.$route.params.id;
        this.updated_record.id = this.$route.params.id;
        console.log(this.todos);

        const selectedRecord = this.todos.find(todo => todo.id === routeId)
        const selectedTitle = selectedRecord.title;
        const selectedDescription = selectedRecord.description;
        this.updated_record.title = selectedTitle;
        this.updated_record.description = selectedDescription;
    },
    methods: {
        update_record: function () {
            let self = this
            $.post({
                url: self.url,
                data: {
                    action: 'update_record',
                    updated_record: self.updated_record
                }
            })
                .always()
                .done()
                .fail()
            this.$router.push('/list');
        },
        delete_record: function (rec_id) {
            let self = this
            $.post({
                url: self.url,
                data: {
                    action: 'delete_record',
                    id: rec_id
                }
            })
            this.$router.push('/list');
        },
    },
}
