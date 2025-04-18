<template>
  <footer>
    <section class="px-4 py-8 lg:py-12 bg-[#0F0E1C] text-white">
      <div
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        <section class="hidden">
          <nuxt-link to="/">
            <img
              width="200"
              src="https://doubleaglobalpapers.com/wp-content/uploads/2023/01/logo.png"
              alt="Alola Trading"
            />
          </nuxt-link>
          <div class="text-sm opacity-90 pt-4">
            Founded in 1951, Mattssons i Anderstorp AB offers one of the widest
            varieties of scrap metals on the market with assembly professionals
            in mind. We are constantly working to develop standardised and
            customised solutions of the highest quality.
          </div>
        </section>
        <section>
          <h2 class="text-xl font-bold mb-3">Company</h2>
          <div class="py-2 text-sm flex">
            Alola Trading is a well known Exporter of all types of papers in the
            global markets. So far We have been able to gain a good reputation
            in the international market due to the reliability of our services,
            qualitative products and our best market prices.
          </div>
        </section>
        <section>
          <h2 class="text-xl font-bold mb-3">Products</h2>
          <nuxt-link
            :key="n"
            v-for="n in categories"
            :to="`/products/${n}`"
            class="py-2 text-sm flex"
          >
            {{ $t(n) }}
          </nuxt-link>
        </section>
        <section>
          <h2 class="text-xl font-bold mb-3">Quick Links</h2>
          <nuxt-link
            :key="n.path"
            v-for="n in links"
            :to="n.path"
            class="py-2 text-sm flex"
          >
            {{ n.name }}
          </nuxt-link>
        </section>
        <section>
          <h2 class="text-xl font-bold mb-3">Contact Us</h2>
          <div
            v-for="n in contacts"
            :key="n.icon"
            class="py-2 text-sm flex items-center"
          >
            <i :class="`fa-solid fa-${n.icon} w-8 min-w-8`" />
            <span v-html="n.name" />
          </div>
        </section>
      </div>
    </section>
    <section class="px-4 py-6 bg-primary text-center sm:text-left">
      <div class="container">
        <h2 class="text-white text-sm">
          Copyright © {{ new Date().getFullYear() }} {{ APP_NAME }}. All Rights
          Reserved.
        </h2>
      </div>
    </section>
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="fixed right-3 bottom-4 z-10"
      :href="`https://wa.me/${APP_PHONE.replace(/\s/g, '')}`"
    >
      <img src="/whatsapp.png" width="55" />
    </a>
  </footer>
</template>

<script setup lang="ts">
import categories from "~/resources/categories.json";
const route = useRoute();
const links = computed(() => [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "our Products", path: "/products" },
  { name: "payment terms", path: "/payments" },
  { name: "Contact Us", path: "/contact-us" },
]);
const contacts = [
  { icon: "phone", name: APP_PHONE },
  { icon: "envelope", name: APP_EMAIL },
  { icon: "link", name: APP_URL },
  { icon: "location-dot", name: APP_ADDRESS },
  { icon: "clock", name: "Mon-Fri: 7am–12pm, 1pm-4pm" },
];
</script>

<style scoped></style>
