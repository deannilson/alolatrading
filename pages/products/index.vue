<template>
  <Title>{{ title }}</Title>
  <Breadcrumbs :title="title" />
  <section class="p-4 lg:p-8">
    <div class="container">
      <Archive :items="products" />
    </div>
  </section>
</template>

<script setup lang="ts">
import products from "~/resources/products.json";
const title = "Products";
</script>

<style scoped></style>
