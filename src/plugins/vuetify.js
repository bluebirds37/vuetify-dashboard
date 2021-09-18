import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {
    zhHans,
    en
} from 'vuetify/lib/locale/';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#03a9f4",
                secondary: "#00bcd4",
                accent: "#009688",
                error: "#f44336",
                warning: "#ff9800",
                info: "#607d8b",
                success: "#3f51b5",
            },
            dark: {
                primary: "#03a9f4",
            },
        }
    },
    breakPoint: {
        scrollBarWidth: 0,
    },
    lang: {
        locales: {
            zhHans,
            en
        },
        current: 'zhHans',
    },
});