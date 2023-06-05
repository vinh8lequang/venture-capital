<template>
  <div>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4" id="new">
      {{ area.name }}
    </v-card-title>
    <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4"></h1>
    </div>

    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <v-img :src="area.image" height="50vh" cover></v-img>
        </div>
        <div class="p-7">
          <p class="mb">
            {{ area.description }}
          </p>
        </div>
      </div>
    </div>
    </div>
    <v-divider
  :thickness="3"
  class="border-opacity-75"
  color="success"
></v-divider>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">
      Related projects:
    </v-card-title>

    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(p, index) in projects" :key="index">
        <CardProject :project="p" :link="`/projects/${p.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const {
  params: { id },
} = useRoute()

//let projects_area = await $fetch("/server/getareas/"+id) // this needs to be changed for the project and area so that we connect 
let projects = new Array();
let area ;
const client = useSupabaseClient();
const { data } = await useAsyncData("areaproject", async () => {
  const { data } = await client.from("areaproject")
  .select("project_id, area_id, projects(*), area(*)")
  return data;
});

data._value.forEach((item) => {
    if(item.area_id == id){
      console.log("project found")
      projects.push(item.projects);
      area = item.area
    }
});
console.log(area)
</script>
