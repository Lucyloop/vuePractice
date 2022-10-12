const app = Vue.createApp({
    data(){
        return {
            output: '',
            confirmedInput: '',
        };
    },
    methods: {
        showAlert(event){
            //event.preventDefault(); // avoid refresh
            alert("show alert!")
          },

        outPutInput(event){
            this.output = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.output;
        }

    }


}); // create object inside
// data: return objects
// method: define functions, take object as input


app.mount('#assignment'); //select id in the html