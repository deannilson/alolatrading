<template>
  <div>
    <Title>{{ title }}</Title>
    <Breadcrumbs :title="title" />
    <About />
  </div>
</template>

<script setup lang="ts">
const title = "About Us";
useHead({ title });
</script>

<style scoped></style>
