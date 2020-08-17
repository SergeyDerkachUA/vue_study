new Vue ({
    el:'#app',
    data: {
        title: 'Test barada',
        fontSize: false,
        border: false
    },
    computed: {
        getCss () {
            return {
                'large' :this.fontSize,
                'border':this.border
            }
        }
    }

});
