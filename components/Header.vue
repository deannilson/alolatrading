<template>
  <header class="shadow">
    <section class="lg:hidden">
      <nav class="flex items-center justify-between h-[60px]">
        <nuxt-link to="/" class="p-3">
          <img width="150" alt="Alolatrading" src="/logo.png" />
        </nuxt-link>
        <div @click="menu = true" class="p-4 flex-center">
          <i class="fa-solid fa-bars text-[24px] text-primary"></i>
        </div>
      </nav>
      <div
        v-if="menu"
        @click="menu = false"
        class="fixed bg-black/50 inset-0 z-10"
      >
        <div class="bg-white h-full w-[90vw] max-w-80 overflow-y-auto">
          <nav class="flex items-center justify-between h-[60px] border-b">
            <div />
            <div @click="menu = false" class="p-4 flex-center">
              <i class="fa-solid fa-xmark text-[24px] text-primary"></i>
            </div>
          </nav>
          <nuxt-link
            :key="n.path"
            v-for="n in links"
            :to="n.path"
            :class="{
              'text-warning font-bold bg-black/10': n.path == route.path,
            }"
            class="px-6 border-b py-3 text-sm flex"
          >
            {{ n.name }}
          </nuxt-link>
          <div class="p-4">
            <a
              v-for="n in contacts"
              :key="n.icon"
              :href="n.init + n.name"
              class="bg-secondary text-sm my-2 p-2 rounded-lg text-center block"
            >
              <i :class="`fa-solid fa-${n.icon} w-8`" />
              <span class=""> {{ n.name }} </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden lg:block">
      <div class="bg-primary text-white/80">
        <div class="container text-xs flex justify-between">
          <div class="whitespace-nowrap py-3">
            You can consult us if you have any questions.
          </div>
          <div class="flex items-center">
            <a
              :href="`mailto:${APP_EMAIL}`"
              class="flex items-center py-2 hover:text-warning"
            >
              <i class="fa-solid fa-envelope text-sm"></i>
              <span class="pl-2">
                {{ APP_EMAIL }}
              </span>
            </a>
            <div class="border-l mx-4 h-3 border-slate-500" />
            <a
              :href="`tel:${APP_PHONE}`"
              class="flex items-center py-2 hover:text-warning"
            >
              <i class="fa-solid fa-phone text-sm"></i>
              <span class="pl-2">
                {{ APP_PHONE }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="container flex items-center justify-between">
          <nuxt-link to="/" class="py-4">
            <img width="180" alt="Alolatrading" src="/logo.png" />
          </nuxt-link>
          <div class="flex items-center">
            <nuxt-link
              :key="n.path"
              v-for="n in links"
              :to="n.path"
              :class="{ 'text-warning font-bold': n.path == route.path }"
              class="p-4 font-medium hover:text-warning text-xs uppercase"
            >
              {{ n.name }}
            </nuxt-link>
            <nuxt-link
              to="/contact-us"
              class="p-3 px-8 ml-3 bg-primary text-white text-overline opacity-90 hover:opacity-100"
            >
              Get quote
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script setup lang="ts">
const route = useRoute();
const menu = ref(false);
const links = computed(() => [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "our Products", path: "/products" },
  { name: "payment terms", path: "/payments" },
  { name: "Contact Us", path: "/contact-us" },
]);
const contacts = [
  { icon: "envelope", name: APP_EMAIL, init: "mailto:" },
  { icon: "phone", name: APP_PHONE, init: "tel:" },
];
</script>

<style scoped></style>
