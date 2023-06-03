<template>
  <div class="pb-15">
    <div class="p-4">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4"
        >All projects</v-card-title
      >
    </div>

    <v-row>
      <v-col cols="2" sm="1" md="3" v-for="(p, index) in data" :key="index">
        <CardProject :project="p" :link="`/projects/${p.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/projects");

const client = useSupabaseClient();
const { data } = await useAsyncData("projects", async () => {
  const { data } = await client.from("projects").select("*");
  // console.log(data);
  return data;
});
console.log(data)
</script>
<style scoped></style>
