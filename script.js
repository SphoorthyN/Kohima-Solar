 // START OF VUE COMPONENTS

// // navbar
Vue.component("menu-tab", {
    props: ['menu'],
    template: "<div class=\"menu-tab\"><span>{{ menu.menu }}</span></div>"
});

// END OF VUE COMPONENTS

var vue = new Vue({
    el: "#vueApp",
    data: {
        menus: [
            {
                id: 0,
                menu: "home"
            },
            {
                id: 1,
                menu: "about"
            },
            {
                id: 2,
                menu: "projects"
            },
            {
                id: 3,
                menu: "contact"
            }
        ]

    },
    methods: {},
    computed: {}
});
