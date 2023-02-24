import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        defaultTheme: "customtheme",
        themes: {
            myCustomTheme: {
                dark: false,
                colors: {
                    mk: "#d9a60b",
                },
            },
        },
    },
});
