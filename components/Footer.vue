<template>
  <div>
    <v-row justify="center" no-gutters>
      <!-- loop to display all items for footer with links -->
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="`/about/${link.url}`"
      >
        <!-- each item is a button -->
        <v-btn color="white" variant="text" class="mx-2" rounded="xl">
          {{ link.title }}
        </v-btn>
      </NuxtLink>
    </v-row>
  </div>
</template>

<script setup lang="ts">
// const date = ref(new Date());

const links = [
  { url: "history", title: "History" },
  { url: "newsletter", title: "Newsletter" },
  { url: "legal", title: "Legal" },
  { url: "faq", title: "FAQ" },
];
</script>

<style scoped lang="scss">
div {
  background-color: rgb(17, 17, 17);
  color: #fff;
  padding: 0.2rem;
  height: 60px;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
