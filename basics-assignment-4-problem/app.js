const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            visibleBlock: true,
            backgroundColor:'',
        }
    },
    computed: {
        togglePara(){
            return {
                user2: this.userInput==="user2",
                user1: this.userInput === "user1",
                visible: this.visibleBlock,
                hidden: !this.visibleBlock}
        },

    },

    methods: {
        showBlock() {
            this.visibleBlock = !this.visibleBlock;
        },
    }

});


app.mount("#assignment")