<script>
import NavMenu from "./NavMenu.vue";

export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<template>
  <NavMenu class="nav-menu"></NavMenu>
</template>

<style scoped>
.nav-menu {
  /* height: 80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
}
</style>
