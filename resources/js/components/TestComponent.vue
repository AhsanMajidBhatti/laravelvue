<template>
    <div class="container">
        <StreamBarcodeReader
            @decode="onDecode"
            @loaded="onLoaded"
        ></StreamBarcodeReader>
    </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    components: {
        StreamBarcodeReader,
    },
    props: {
        msg: String,
    },
    methods: {
        onDecode(result) {
            if (result === null) {
                alert("NULL VALUE");
            } else {
                alert(result);
            }
        },
    },
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.container {
    width: 50%;
    height: 30%;
}
</style>
