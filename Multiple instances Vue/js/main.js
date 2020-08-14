var vue1 = new Vue ({
    el:'#app',
    data: {
        title: 'Title on'
    },
    methods: {
        alertTest: function() {
            alert('I am from App1')
        }
    }
});
vue1.newField = 'Test'
new Vue ({
    el:'#app2',
    data: {
        title: 'Title two'
    },
    methods: {
        changeFirstTitle: function() {
            vue1.title= "Change title from second app"
            vue1.newField = 'New newField'
            setTimeout( function() {
                vue1.alertTest()
            }, 1000)
        }
    }
});