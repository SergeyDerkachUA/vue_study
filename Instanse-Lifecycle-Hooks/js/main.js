new Vue ({
    el:'#app',
    data: {
        title: 'Test barada',
    },
    methods: {
        doDestroy() {
            this.$destroy()
        }
    },
    beforeCreate() {
        console.log('Before create')
    },
    created() {
        console.log('Created')
    },
    beforeMount() {
        console.log('Before Mount')
    },
    mounted() {
        console.log('Mounted')
    },
    beforeUpdate() {
        console.log('Before Update')
    },
    updated() {
        console.log('Updated')
    },
    beforeDestroy() {
        console.log('Before Destroy') 
    },
    destroyed() {
        console.log('Destroyed')
    }
});
