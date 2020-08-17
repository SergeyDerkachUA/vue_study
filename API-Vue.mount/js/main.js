var vue = new Vue ({
    data: {
        title: 'Hello Vue'
    },
    template: '<div><h2>{{ title }}</h2><p>test</p></div>'
});

vue.$mount('#app')