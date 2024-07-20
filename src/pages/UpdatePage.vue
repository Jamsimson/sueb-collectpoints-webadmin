<template>
  <q-page class="q-pa-md">
    <!-- title -->
    <div
      class="text-h6 text-weight-bold row"
      style="margin: auto; padding-top: 20px; padding-bottom: 15px"
    >
      <div class="text-right text-dark" @click="this.$router.go(-1)">
        <q-icon name="arrow_back_ios" />
      </div>
      <div style="margin: auto">Update pointss</div>
    </div>
    <!-- Section update point -->
    <div class="border-update">
      <div class="flex justify-between updatepoint-update">
        <div>
          <q-btn
            class="btn-update"
            round
            color="dark"
            icon="remove"
            @click="point--"
          />
        </div>
        <div class="text-h1">{{ point }}</div>
        <div>
          <q-btn
            class="btn-update"
            round
            color="dark"
            icon="add"
            @click="point++"
          />
        </div>
      </div>
    </div>
    <!-- Section info user -->
    <section>
      <div>User Id: {{ phone }}</div>
      <!-- conferm button  -->
    </section>
    <!-- Section butotn  -->
    <section class="footter-qrcode">
      <div class="flex flex-center" style="margin-top: 70px; padding-top: 50px">
        <q-btn
          unelevated
          text-color="white"
          color="green"
          label="Submit"
          style="width: 350px; border-radius: 10px"
          @click="onSubmit"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useRoute } from "vue-router";
import { api } from "src/boot/axios";
import { ref } from "vue";
const route = useRoute();

import { useRouter } from "vue-router";
const router = useRouter();

var point = ref(0);
const phone = route.params.phone;
defineOptions({
  name: "UpdatePage",
});

const onSubmit = () => {
  const data = {
    point: point.value,
  };
  api
    .patch(`/update/${phone}`, data)
    .then(alert(`Successfully🌈 Point:${point.value} Phone:${phone}`))
    .catch((err) => console.log(err));

  router.push({ name: "home" });
};
</script>

<style>
.updatepoint-update {
  padding-top: 50%;
  padding-right: 20px;
  padding-left: 20px;
  height: 400px;
}
.btn-update {
  display: flex;
}
.border-update {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
  border-style: solid;
  border-width: 0.5px;
}
.footter-update {
  position: fixed;
  left: 0;
  bottom: 25px;
  width: 100%;
  text-align: center;
}
</style>
