<template>
  <v-card class="mx-auto" max-width="80%" color="#f0e9e9" @mouseover="showText = true" @mouseout="showText = false">
    <v-img :src="person.image" height="100%" cover></v-img>

    <v-card-title>
      {{ person.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ person.email }}
    </v-card-subtitle>

    <div class="hover-area" v-if="showText" >
      <div class="hover-text">
        Text to show when hovered
      </div>
    </div>
  </v-card>
</template>

<style>
.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.hover-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  pointer-events: none;
}
</style>

<script setup>
const { person } = defineProps(['person']);
</script>

<script>
export default {
  data() {
    return {
      showText: false,
    };
  }
}
</script>