<template>
  <div class="card-container">
    <v-card class="mx-auto" elevation="4">
      <!-- clickable image -->
      <NuxtLink :to="link">
        <v-img :src="project.image" height="200px" fill></v-img>
      </NuxtLink>

      <!-- short project info -->
      <v-card-text class="pa-4">
        <div class="title-and-button">
          <div class="project-name">{{ project.name }}</div>
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="project-description">{{ project.shortDescription }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.project-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.project-description {
  font-size: 14px;
  line-height: 1.4;
}

.v-card {
  border-radius: 8px;
}

.v-card-text {
  background-color: #f5f5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.v-divider {
  background-color: rgba(0, 0, 0, 0.12);
}

.v-card-actions {
  background-color: #f5f5f5;
  justify-content: flex-end;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.v-btn {
  min-width: 40px;
  height: 40px;
}
</style>

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
