<template>
  <div class="pb-15">
    <div class="p-4">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4"
        >All categories</v-card-title
      >
    </div>
    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(a, index) in data" :key="index">
        <Category_card :category="a" :link="`/categories/${a.id}`" />
        <!-- <v-btn><NuxtLink :to="`/categories/${a.id}`">Details</NuxtLink></v-btn> -->
      </v-col>
      
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const { data } = await useAsyncData("area", async () => {
  const { data } = await client.from("area").select("*");
  // console.log(data);
  return data;
});
</script>

<style scoped></style>
