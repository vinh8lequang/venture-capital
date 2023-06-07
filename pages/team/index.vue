<template>
  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4">Our team</h1>
    </div>

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
