<template>
  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4">All categories</h1>
    </div>
    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(a, index) in data" :key="index">
        <Category_card :category="a" />
        <v-btn><NuxtLink :to="`/categories/${a.id}`">Details</NuxtLink></v-btn>
      </v-col>
      
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const { data } = await useAsyncData("area", async () => {
  const { data } = await client.from("area").select("*");
  return data;
});
</script>

<style scoped></style>
