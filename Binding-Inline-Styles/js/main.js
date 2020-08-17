new Vue ({
    el:'#app',
    data: {
        title: 'Test barada',
        fontSize: false,
        border: false,
        bgColor: 'pink',
        range: 20
    },
    computed: {
        getCss () {
            return {
                'large' :this.fontSize,
                'border':this.border
            }
        },
        styles () {
            return {
                'background': this.bgColor,
                'margin-left': this.range + '%'
            }
        }
    }

});
