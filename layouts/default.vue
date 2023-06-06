<template>
  <div class="page-container">
    <Header />
    <div class="content-container">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-container {
  flex-grow: 1;
}
</style>
