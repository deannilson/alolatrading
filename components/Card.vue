<template>
  <div
    class="flex flex-col overflow-hidden border shadow-lg hover:shadow-2xl group"
  >
    <nuxt-link
      :to="`/products/${item.cat[0]}/${item.slug}`"
      class="flex-1 block p-3"
    >
      <div class="aspect-square">
        <img
          :src="item.gallery[0]"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div
        class="text-center font-bold mt-3 text-sm sm:text-base group-hover:text-warning"
      >
        {{ item.title }}
      </div>
    </nuxt-link>
    <div class="grid lg:grid-cols-2 gap-px">
      <nuxt-link
        :to="`/products/${item.cat[0]}/${item.slug}`"
        class="p-3 bg-secondary flex-center hover:text-warning"
      >
        <i class="fa-solid fa-circle-plus" />
        <span class="pl-2 text-sm font-medium">Read More</span>
      </nuxt-link>
      <nuxt-link
        to="/contact-us"
        class="p-3 bg-secondary flex-center hover:text-warning"
      >
        <i class="fa-solid fa-envelope" />
        <span class="pl-2 text-sm font-medium">Send Email</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<style scoped></style>
