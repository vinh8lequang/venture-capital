<template>
  <div class="pb-15 px-10">
    <div class="py-4">
      <div class="my-breadcrumbs">
        <span v-for="(item, index) in items" :key="index">
          <span v-if="!item.disabled">
            <router-link
              :to="item.href"
              :class="{
                'blue-link': index < items.length - 1,
                'last-link': index === items.length - 1,
              }"
              >{{ item.title }}</router-link
            >
          </span>
          <span v-else class="last-link">Projects</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="p-4" style="display: flex; align-items: center">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4" style="margin: 0 auto"
        >PROJECTS</v-card-title
      >
    </div>
    <div class="py-4"></div>

    <v-row>
      <!-- we insert all the project that we get from the database. Each project creates a project card element.  -->
      <v-col cols="12" sm="4" md="3" v-for="(p, index) in data" :key="index">
        <CardProject :project="p" :link="`/projects/${p.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient(); //connection to the database
const { data } = await useAsyncData("projects", async () => {
  const { data } = await client.from("projects").select("*").order("id"); //we get all the different projects in order of id
  return data;
});
console.log(data);
</script>

<script>
export default {
  //setup of the breadcrumbs
  data: () => ({
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "Projects",
        disabled: true,
        href: "/projects",
      },
    ],
  }),
};
</script>

<style scoped>
.my-breadcrumbs {
  display: flex;
  align-items: center;
  padding-left: 0;
}

.my-breadcrumbs .divider {
  margin: 0 10px;
  color: #999;
}

.blue-link {
  color: #344c8e;
}

.last-link {
  color: rgb(55, 55, 55);
}
</style>
