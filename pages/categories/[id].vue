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
          <span v-else class="last-link">{{ area.name }}</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="mb-4" style="display: flex; align-items: center">
      <h1 class="text-2xl md:text-3xl lg:text-6xl font-thin text-center">
        {{ area.name }}
      </h1>
    </div>
    <div class="pb-15">
      <div class="card">
        <div class="grid grid-cols-2 gap-10">
          <div class="py-7 pr-7">
            <v-img :src="area.image" height="50vh" cover></v-img>
          </div>
          <div class="py-7 pl-7">
            <p class="mb text-2xl">
              {{ area.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <v-row>
        <v-col cols="11" pl="8">
          <v-btn icon="mdi-arrow-left" v-if="id > 1">
            <NuxtLink :to="`/categories/${prev}`">Prev</NuxtLink>
          </v-btn>
        </v-col>
        <v-col pr="8">
          <v-btn icon="mdi-arrow-right" v-if="id < 7">
            <NuxtLink :to="`/categories/${next}`">Next</NuxtLink>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <v-divider
      :thickness="3"
      class="border-opacity-75"
      color="success"
    ></v-divider>
    <div class="py-4"></div>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">
      Related projects:
    </v-card-title>
    <div class="py-4"></div>

    <v-row>
      <v-col cols="12" sm="5" md="4" v-for="(p, index) in projects" :key="index">
        <CardProject :project="p" :link="`/projects/${p.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const {
  params: { id },
} = useRoute();
let next = Math.min(+id + +1, 7);
let prev = Math.max(0, +id - +1);



let projects = new Array();
let area;
const client = useSupabaseClient();
const { data } = await useAsyncData("areaproject", async () => {
  const { data } = await client
    .from("areaproject")
    .select("project_id, area_id, projects(*), area(*)");
  return data;
});

data._value.forEach((item) => {
  if (item.area_id == id) {
    console.log("project found");
    projects.push(item.projects);
    area = item.area;
  }
});

console.log(area);
</script>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "Categories",
        disabled: false,
        href: "/categories",
      },
      {
        title: "Link 1",
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
