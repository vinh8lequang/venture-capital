<template>
  <div class="home-container">
    <div class="logo-container">
      <img
        class="logo-image fade-in"
        src="../assets/logo_text.png"
        alt="Logo"
      />
    </div>
    <div class="slogan-container">
      <p class="slogan fade-in">Where vision meets investment.</p>
    </div>
    <div class="arrow-container">
      <div class="arrow-down" @click="scrollToContent">
        <i class="fa fa-chevron-down"></i>
      </div>
      <div class="bottom-text">
        <p>Scroll down to see our latest projects!</p>
      </div>
    </div>
  </div>
  <div class="pb-15 px-10">
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
        v-for="(p, index) in data"
        :key="index"
      >
        <CardProject :project="p" :link="`/projects/${p.id}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const { data } = await useAsyncData("projects", async () => {
  const { data } = await client.from("projects").select("*").eq("relevant", "1");
  console.log(data.value);
  return data;
});
console.log(data);
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding: 4em;
  align-items: center;
  height: 100vh;
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(30px);
}
.logo-image {
  width: 40vw;
  height: auto;
  padding-bottom: 5em;
  opacity: 0;
  animation: fadeInLogo 3s ease-in-out forwards;
}

.slogan-container {
  text-align: center;
  transform: translateY(65px);
}

.slogan {
  font-size: 30px;
  font-weight: 100;
  color: #333;
  opacity: 0;
  animation: fadeInSlogan 3s ease-in-out forwards;
}

@keyframes fadeInSlogan {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLogo {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.arrow-container {
  display: flex;
  width: 100%;
  height: 50px;
  /* position: sticky; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.arrow-down {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #888;
  transition: transform 0.3s;
}

.arrow-down:hover {
  transform: translateX(-50%) scale(1.1);
}

.fa-chevron-down {
  margin-top: 0.5em;
}

.bottom-text {
  position: absolute;
  bottom: 1em;
  text-align: center;
  width: 100%;
  color: #888;
  font-size: 18px;
}

.projects-container {
  margin-top: 4em;
}
</style>

<script>
export default {
  methods: {
    scrollToContent() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>
