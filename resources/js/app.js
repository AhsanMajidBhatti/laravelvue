require("./bootstrap");

window.Vue = require("vue").default;
import { createApp } from "vue";
import Example from "./components/ExampleComponent.vue";
import Test from "./components/TestComponent.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

createApp({
    components: {
        "example-component": Example,
        "test-component": Test,
    },
})
    .use(StreamBarcodeReader)
    .mount("#app");
