<template>
  <!-- showText boolean for mouse hovering feature -->
  <v-card
    class="mx-auto"
    max-width="80%"
    width="400px"
    height="500px"
    color="rgba(0, 0, 0, 0.1)"
    @mouseover="showText = true"
    @mouseout="showText = false"
  >
    <v-img :src="person.image" height="80%" cover></v-img>

    <!-- on mouse hover the person experience appears on top of the image -->
    <div class="hover-area">
      <div class="hover-text" v-if="showText">
        <div>
          {{ person.experience }}
        </div>
      </div>
    </div>

    <!-- basic person info -->
    <v-card-title class="name-title">
      {{ person.name }} {{ person.lastname }}
    </v-card-title>

    <v-card-subtitle class="function-title">
      {{ person.function }}
    </v-card-subtitle>
  </v-card>
</template>

<style>
.name-title,
.function-title {
  text-align: center;
}

.function-title {
  margin-bottom: 0;
}

.name-title {
  text-align: center;
}

.hover-text {
  position: absolute;
  top: 40%;
  left: 50%;
  height: 80%;
  width: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  transition: opacity 0.3s ease;
  text-align: left;
  pointer-events: none;
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
const { person } = defineProps(["person"]);
</script>

<script>
export default {
  data() {
    return {
      showText: false,
    };
  },
};
</script>
