<template>
  <div ref="element" />
</template>

<script setup lang="ts">
const element: any = ref(null);
const props = defineProps({ options: Object });
const emit = defineEmits(["intersect"]);
onMounted(() => {
  new IntersectionObserver((entries) => {
    emit("intersect", entries[0].isIntersecting);
  }, props.options).observe(element.value);
});
</script>

<style lang="scss" scoped></style>
