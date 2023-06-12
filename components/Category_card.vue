<template>
  <v-card class="mx-auto" max-width=95% color="#f0e9e9">
     <NuxtLink :to="link">
      <div class="container">
        <v-img :src="category.image" height="270px" style ="width: 130%" cover></v-img>
        <div class="centered">{{ category.name }}</div>
      </div>
    </NuxtLink>
  </v-card>
</template>

<style>
.container {
  position: relative;
}

.centered {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(0, 0, 0, 0.90);
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  background-color: rgb(50, 68, 150, 0);
  padding: 10px;
  border-radius: 5px;
}

.category-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.v-card-subtitle {
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
}

.v-btn {
  font-size: 14px;
  text-transform: none;
}

.v-card-text {
  font-size: 14px;
  line-height: 1.5;
  margin-top: 10px;
}
</style>

<script setup>
const { category, link } = defineProps(["category", "link"]);
</script>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
