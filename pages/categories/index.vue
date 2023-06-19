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
          <span v-else class="last-link">{{ data[0].name }}</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="p-4" style="display: flex; align-items: center">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4" style="margin: 0 auto"
        >CATEGORIES</v-card-title
      >
    </div>
    <div class="py-4"></div>
    <v-row>
      <!-- we insert here all the different areas that we get from the database in the script. Each areas create a different card displaying all the needed informations -->
      <v-col cols="12" sm="6" md="4" v-for="(a, index) in data" :key="index">
        <Category_card :category="a" :link="`/categories/${a.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient(); //we connect to the database
const { data } = await useAsyncData("area", async () => {
  const { data } = await client.from("area").select("*").order("id"); //we get all the the different areas from the database in order of their id
  // console.log(data);
  return data;
});
</script>

<script>
//necessary setup for the breadcrumbs
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
        disabled: true,
        href: "/categories",
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
