<template>
  <v-card class="container mx-auto" max-width="95%" color="#D9D9D9">
    <NuxtLink :to="link">
      <div class="img-container">
        <v-img :src="category.image" height="270px" width="300px" cover></v-img>
      </div>
    </NuxtLink>
    <v-card-text class="pa-4 text-center">
      <div class="centered">{{ category.name }}</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-container {
  margin-bottom: -25px;
}

.centered {
  color: rgb(0, 0, 0, 0.9);
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(50, 68, 150, 0);
  justify-content: center;
  align-items: center;
  text-align: center;
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
