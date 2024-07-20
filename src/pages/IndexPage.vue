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
import { useRouter } from "vue-router";
const router = useRouter();

import { StreamBarcodeReader } from "vue-barcode-reader";

defineOptions({
  name: "IndexPage",
  data() {
    return {
      point: 0,
    };
  },
  components: {
    StreamBarcodeReader,
  },
});

function onDecode(phone) {
  console.log(`Decode text from QR code is ${phone}`);
  router.push(`/update/${phone}`);
}
function onLoaded() {
  console.log(`Ready to start scanning barcodes`);
}

const onSubmit = (phone) => {
  router.push(`/update/${phone}`);
};
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
.updatepoint-index {
  padding: 20px;
}
</style>
