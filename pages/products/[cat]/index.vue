<template>
  <Title>{{ title }}</Title>
  <Breadcrumbs :title="title" :links="links" />
  <section class="p-4 lg:p-8">
    <div class="container">
      <Archive :items="items" />
    </div>
  </section>
</template>

<script setup lang="ts">
import products from "~/resources/products.json";
const route: any = useRoute();
const title = computed(() => $t(route.params.cat));
const items = computed(() =>
  products.filter((el) => el.cat.includes(route.params.cat))
);
const links = computed(() => [{ name: "Products", path: "/products" }]);
</script>

<style scoped></style>
