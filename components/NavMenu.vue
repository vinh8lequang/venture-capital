<template>
  <v-card>
    <v-toolbar>
      <!-- Navigation Tabs -->
      <v-tabs v-model="tab" color="#324496" align-tabs="center" class="ml-4">
        <NuxtLink to="/"><v-tab>Home</v-tab></NuxtLink>
        <NuxtLink to="/categories"><v-tab>Categories</v-tab></NuxtLink>
        <NuxtLink to="/projects"><v-tab>Projects</v-tab></NuxtLink>
        <NuxtLink to="/team"><v-tab>Team</v-tab></NuxtLink>
      </v-tabs>

      <!-- Apply and FAQ Buttons -->
      <div class="flex-grow-1"></div>
      <!-- Create a flexible space to push buttons to the right -->
      <div class="mr-4">
        <NuxtLink to="/apply">
          <v-btn color="#2d4197" class="ml-2">
            <span class="font-bold text-lg">Apply</span>
          </v-btn>
        </NuxtLink>
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
