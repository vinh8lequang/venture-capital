<template>
  <v-card>
    <v-toolbar color="#e0e0e0">
      <!-- Navigation Tabs -->
      <v-tabs v-model="tab" color="#203C8A" align-tabs="center" class="ml-4">
        <NuxtLink to="/"><v-tab>Home</v-tab></NuxtLink>
        <NuxtLink to="/categories"><v-tab>Categories</v-tab></NuxtLink>
        <NuxtLink to="/projects"><v-tab>Projects</v-tab></NuxtLink>
        <NuxtLink to="/team"><v-tab>Team</v-tab></NuxtLink>
      </v-tabs>

      <!-- Apply and FAQ Buttons -->
      <div class="flex-grow-1"></div>
      <!-- Create a flexible space to push buttons to the right -->
      <div>
        <NuxtLink to="/faq"
          ><v-btn color="#4e76e6" class="ml-2">FAQ</v-btn></NuxtLink
        >
        <NuxtLink to="/apply"
          ><v-btn color="#4e76e6" class="ml-2">Apply</v-btn></NuxtLink
        >
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>
.v-btn__underlay {
  text-decoration: none;
}
</style>
