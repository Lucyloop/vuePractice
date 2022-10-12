const app = Vue.createApp({
    data(){
        return {
            myName: 'Trish',
            myAge: 25,
            imageUrl: "https://en.wikipedia.org/wiki/Bilibili#/media/File:Bilibili_logo.svg",
    
        };
    },
    methods: {
        myfavNumber(){
            const randomNumber = Math.random();
            return 'Favorite Number:' +randomNumber ;

        },

        myAgeIn5Years(){
            return 'My age in 5 years:' + (this.myAge + 5);
        }

    }


}); // create object inside
// data: return objects
// method: define functions, take object as input


app.mount('#assignment'); //select id in the html