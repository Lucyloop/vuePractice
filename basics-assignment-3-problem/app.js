const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    computed:{
        showLimits(){
            if (this.counter <37) {
                return 'Not there yet';
            }
            else if(this.counter == 37){
                return this.counter;
            }
            else {
                return 'Too much!';
            }
        },
    },
    watch: {
        showLimits(value){
            const that = this; // 
            setTimeout(function(){
                that.counter =0;
            }, 5000);
      }
    },
  
  
    methods: {
      add5(){
        this.counter = this.counter+5;
      },
      add1(){
        this.counter++;
      },
    },
  
  
  });
  
  app.mount('#assignment');
  