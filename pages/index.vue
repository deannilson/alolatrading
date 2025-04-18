<template>
  <div>
    <section class="px-4">
      <div class="container">
        <img :src="`/s${(index % 2) + 1}.png`" />
      </div>
    </section>
    <section class="px-4 py-12">
      <div class="container">
        <h2 class="text-4xl font-black text-center">Featured Products</h2>
        <Divider />
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
        >
          <Card :item="n" v-for="n in products.slice(0, 12)" :key="n.slug" />
        </div>
      </div>
    </section>
    <About />
    <contact-us />
  </div>
</template>

<script setup lang="ts">
import products from "~/resources/products.json";
const index = ref(0);

onMounted(() => {
  setInterval(() => index.value++, 6000);
});
</script>

<style scoped></style>
