<template>
  <section>
    <h3 class="text-sm opacity-60 font-semibold mb-3">
      Showing {{ items.length }} results
    </h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
      <Card v-for="item in list" :key="item.slug" :item="item" />
    </div>
    <v-intersector v-if="list.length < items.length" @intersect="intersect" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["items"]);
const limit = ref(12);
const list = computed(() => props.items.slice(0, limit.value));
function intersect(e: any) {
  if (e) limit.value = limit.value + 12;
}
</script>

<style scoped></style>
