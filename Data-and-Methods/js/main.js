new Vue ({
    el:'#app',
    data: {
        message:'Vue.js',
        age: '32',
        isStudent: true,
        name: 'Valentin',
        string: 'My name is Valentin'
    },
    methods: {
        sayHello: function() {
            return 'Hello my name ' + this.name 
        }
    }
});