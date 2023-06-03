<template>
  <div>
    <p>Area id: {{ id }}</p>
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
const client = useSupabaseClient();
const { data } = await useAsyncData("areaproject", async () => {
  const { data } = await client.from("areaproject")
  .select("project_id, area_id, projects(*)")
  return data;
});

data._value.forEach((item) => {
    if(item.area_id == id){
      console.log("project found")
      projects.push(item.projects);
    }
});

</script>
