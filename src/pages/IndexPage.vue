<template>
  <q-page>
    <!-- title -->
    <div
      style="margin-top: 80px"
      class="text-h5 text-weight-bold flex flex-center"
    >
      Scan Qr Code
    </div>
    <!-- Section Scan qr code -->
    <div>
      <!-- Scan QR code  -->
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { StreamBarcodeReader } from "vue-barcode-reader";
var phone = ref("");
defineOptions({
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    StreamBarcodeReader,
  },
});

function onDecode(phone) {
  console.log(`Decode text from QR code is ${phone}`);
  const data = {
    point: 2,
  };
  api
    .patch(`/update/${phone}`, data)
    .then(alert("Successfully🌈"))
    .catch((err) => console.log(err));
}
function onLoaded() {
  console.log(`Ready to start scanning barcodes`);
}
</script>

<style>
.screen-index {
  margin: 10px;
  padding: 10px;
  border-style: solid;
  border-color: gray;
  border-width: 0.5px;
  border-radius: 5px;
}
.postion-screen-index {
  margin-top: 10px;
}
</style>
