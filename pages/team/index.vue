<template>
  <div class="pb-15 px-10">
    <div class="py-4"></div>
    <div class="p-4" style="display: flex; align-items: center">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4" style="margin: 0 auto"
        >OUR TEAM</v-card-title
      >
    </div>
    <div class="py-4"></div>

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(p, index) in data" :key="index">
        <Person_card :person="p" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const { data } = await useAsyncData("people", async () => {
  const { data } = await client.from("people").select("*");
  return data;
});
</script>

<style scoped></style>
