import { createI18n } from "vue-i18n";
import en from "/src/languages/en";
import vi from "/src/languages/vi";

const i18n = createI18n({
    locale: "en",
    allowComposition: true, // you need to specify that!
    messages: {
        en,
        vi
    }
});

window.$i18n = i18n;
export default i18n;
