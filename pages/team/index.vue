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
        >OUR TEAM</v-card-title
      >
    </div>
    <div class="py-4"></div>
    <v-row>
      <!-- for each person in the database we create a person card with all the necessary info about the person. -->
      <v-col cols="12" sm="6" md="4" v-for="(p, index) in data" :key="index">
        <Person_card :person="p" />
        <div class="pa-4" style="display: flex; justify-content: center">
          <v-btn class="mr-2" icon="mdi-facebook"></v-btn>
          <v-btn class="mr-2" icon="mdi-gmail"></v-btn>
          <v-btn icon="mdi-linkedin"></v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient(); //connection to the database
const { data } = await useAsyncData("people", async () => {
  const { data } = await client.from("people").select("*"); //we get all the people from the people table
  return data;
});
</script>

<script>
export default {
  //required setup for the breadcrumbs
  data: () => ({
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "Our team",
        disabled: false,
        href: "/team",
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
