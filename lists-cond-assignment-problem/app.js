const app = Vue.createApp({
    data(){
        return {
            inputTask: '',
            taskList:[],
            visibleBlock: true,
        }
    },
    computed: {
    buttonCaption(){
        return this.visibleBlock ? "Hide List" : "Show List"
    },
    },

    methods: {
        hideTask() {
            this.visibleBlock = !this.visibleBlock;
        },
        addTask() {
            this.taskList.push(this.inputTask);
        }
    }

});


app.mount("#assignment")