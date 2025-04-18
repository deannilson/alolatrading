<template>
  <section>
    <div class="border-b bg-secondary px-3">
      <div class="container flex items-center text-sm font-medium">
        <nuxt-link
          to="/"
          class="flex items-center py-4 sm:py-6 hover:text-warning"
        >
          <i class="fa-solid fa-home" />
          <span class="px-2">Home</span>
        </nuxt-link>
        <nuxt-link
          v-for="(n, i) in props.links"
          :key="i"
          :to="n.path"
          class="flex items-center py-4 sm:py-6 group truncate"
        >
          <i class="fa-solid fa-chevron-right text-[10px]" />
          <span class="px-2 group-hover:text-warning truncate">
            {{ $t(n.name) }}
          </span>
        </nuxt-link>
        <div class="flex items-center py-4 sm:py-6 opacity-60 truncate">
          <i class="fa-solid fa-chevron-right text-[10px]" />
          <span class="px-2 truncate">{{ title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props: any = defineProps({
  title: String,
  links: Array,
  src: String,
  noimage: Boolean,
});
</script>

<style scoped></style>
