<template>
  <div id="info" style="visibility: false">
    <v-card-title class="text-h6 text-md-h5 text-lg-h4" id="new">
      {{ data[0].name }}
    </v-card-title>
  </div>

  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4"></h1>
    </div>

    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <v-img :src="data[0].image" height="40vh" cover></v-img>
        </div>
        <div class="p-7">
          <p class="mb">
            {{ data[0].longDescription }}
          </p>
        </div>
      </div>
    </div>

    <div class="p-4">
      <v-row>
        <v-col cols="11" pl="8">
          <v-btn icon="mdi-arrow-left" v-if="id > 1">
            <NuxtLink :to="`/projects/${prev}`">Prev</NuxtLink>
          </v-btn>
        </v-col>
        <v-col pr="8">
          <v-btn icon="mdi-arrow-right" v-if="id < 8">
            <NuxtLink :to="`/projects/${next}`">Next</NuxtLink>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- <div calss="pb-15">
      <v-row>
        <v-col cols="12" sm="1" md="4" v-for="(c, index) in project.Categories" :key="index">
          <Category_card_id :category="c" />
        </v-col>
      </v-row>
    </div> -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;
let next = Math.min(+id + +1, 15);
let prev = Math.max(0, +id - +1);

// const { data } = await useFetch("/api/projects/" + id);
const client = useSupabaseClient();
const { data } = await useAsyncData("projects", async () => {
  const { data } = await client.from("projects").select("*").eq("id", id);
  // console.log(data);
  return data;
});
</script>

<script></script>
