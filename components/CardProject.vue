<template>
  <v-card class="mx-auto" max-width="95%" color="rgb(0, 0, 0, 0.1)">
    <NuxtLink :to="link">
      <v-img :src="project.image" height="200px" cover></v-img>
    </NuxtLink>

    <v-card-actions>
      <v-card-title>
        {{ project.name }}
      </v-card-title>
      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ project.shortDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
const { project, link } = defineProps(["project", "link"]);
</script>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
