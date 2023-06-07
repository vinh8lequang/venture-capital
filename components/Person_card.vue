<template>
  <v-card class="mx-auto" max-width="80%" color="rgba(0, 0, 0, 0.8)" @mouseover="showText = true" @mouseout="showText = false">
    <v-img :src="person.image" height="130%" cover></v-img>
    
    <div class="hover-area"  >
      <div class="hover-text" v-if="showText">
        <div>
          {{ person.education}}
        </div>
        <div>
          {{ person.experience}}
        </div>
      </div>
     
    </div>
    <v-card-title color="white">
      {{ person.name }} {{ person.lastname }}  

    </v-card-title>

    <v-card-subtitle>
      {{person.function}}
    </v-card-subtitle>

    
  </v-card>
</template>

<style>
.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5%;
  border-radius: 5%;
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
