const Add = {
    template: `
        <section id="new-record-view">
        <div id="record-base">
        <h3>Pievienot jaunu</h3>
        <div id="create_record">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Virsraksts:</label>
            <input v-model.trim="new_record.title" type="text" class="form-control" id="exampleFormControlInput2" >
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Apraksts:</label>
            <textarea v-model.trim="new_record.description" class="form-control" id="exampleFormControlTextarea2" rows="3" maxlength="255"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <router-link to="/list" tag="button" class="btn btn-outline-primary">Doties atpakaļ</router-link>
            <button :disabled="btn_switch" @click="create_record" type="button" class="btn btn-outline-success">Saglabāt</button>
        </div>
        </div>
        </div>
    </section>
    `,
    data() {
        return {
            new_record: {
                title: '',
                description: '',
            },
            url: 'http://localhost/printful-test/helpers/dataHandler.php',
        };
    },
    methods: {
        create_record: function () {
            let self = this
            $.post({
                url: self.url,
                data: {
                    action: 'create_record',
                    new_record: self.new_record
                }
            })
                .always()
                .done()
                .fail()
            this.$router.push('/list');
            location.reload();
        },
    },
    computed: {
        btn_switch: function () {
            if (this.new_record.title.length > 1) {
                return false
            } else {
                return true
            }
        }
    }
}
