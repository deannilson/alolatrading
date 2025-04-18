<template>
  <Title>{{ title }}</Title>
  <Breadcrumbs :title="title" />
  <contact-us />
</template>

<script setup lang="ts">
const title = "Contact Us";
</script>

<style scoped></style>
