<template>
  <Title>{{ item.title }}</Title>
  <Breadcrumbs :title="item.title" :links="links" />
  <section class="p-4">
    <div class="container">
      <section class="md:grid grid-cols-5 gap-8 p-3 border mb-6">
        <div class="col-span-3">
          <div class="aspect-[4/3] flex-center bg-secondary relative">
            <img
              @click="fit = !fit"
              :src="item.gallery[current]"
              class="h-full w-full object-center"
              :class="fit ? 'object-cover' : 'object-contain'"
            />
            <button
              @click="index--"
              class="px-3 py-4 bg-black/70 text-white rounded-r-md absolute left-0"
            >
              <i class="fa-solid fa-chevron-left" />
            </button>
            <button
              @click="index++"
              class="px-3 py-4 bg-black/70 text-white rounded-l-md absolute right-0"
            >
              <i class="fa-solid fa-chevron-right" />
            </button>
          </div>
          <div class="flex items-center gap-2 pt-4 w-full overflow-hidden">
            <button
              @click="scrollview.scrollBy(-200, 0)"
              class="px-3 h-[72px] bg-secondary"
            >
              <i class="fa-solid fa-chevron-left" />
            </button>
            <div ref="scrollview" class="flex-1 flex gap-3 overflow-x-auto">
              <div
                v-for="(img, i) in item.gallery"
                :key="img"
                class="border p-1 h-[72px] max-w-[96px] min-w-[96px] cursor-pointer"
                :class="
                  i == current
                    ? 'border-primary border-2'
                    : 'hover:border-slate-900'
                "
              >
                <img
                  @click="index = i"
                  :src="img"
                  :class="
                    i == current ? 'opacity-1' : 'opacity-80 hover:opacity-100'
                  "
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <button
              @click="scrollview.scrollBy(200, 0)"
              class="px-3 h-[72px] bg-secondary"
            >
              <i class="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
        <div class="col-span-2 py-4 md:pt-0">
          <div class="pb-4 border-b text-2xl font-bold">
            {{ item.title }}
          </div>
          <div class="py-2 border-b text-sm opacity-60">
            <div class="pb-2" v-html="item.excerpt" />
            <div v-for="(n, i) in services" :key="i" class="py-1 flex">
              <span class="w-5">{{ i + 1 }}.</span>
              <div>{{ n }}</div>
            </div>
          </div>
          <div class="py-2">
            <nuxt-link
              v-for="n in contacts"
              :key="n.icon"
              :href="n.init + n.name"
              class="py-2 text-sm flex items-center"
            >
              <i :class="`fa-solid fa-${n.icon} w-8`" />
              <span class=""> {{ n.name }} </span>
            </nuxt-link>
          </div>
          <nuxt-link
            href="#contact"
            class="inline-flex px-8 py-2 bg-primary hover:bg-black text-white text-sm"
          >
            Contact Us
          </nuxt-link>
        </div>
      </section>
      <section>
        <div class="text-2xl font-black mb-2">Product Details</div>
        <div class="text-sm">
          <div class="opacity-80 description" v-html="item.desc" />
        </div>
      </section>
      <section class="pt-6 scroll-mt-12" id="contact">
        <div class="text-2xl font-black mb-2">Contact Us</div>
        <Contact />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import products from "~/resources/products.json";
const route: any = useRoute();
const index = ref(0);
const fit = ref(true);
const scrollview: any = ref(null);
const item: any = computed(() =>
  products.find((el) => el.slug == route.params.id)
);
const current = computed(() =>
  Math.abs(index.value % item.value.gallery.length)
);
const services = [
  "Competitive price and quality from our own factory",
  "Approved by ISO9001, CE, SGS every year",
  "Best service with 24 hour`s reply",
  "Flexible payment with T/T, L/C , paypal, bank transfer, etc",
  "Quick delivery and standard exporting package",
  "OEM/ODM",
];
const links = computed(() => [
  { name: "Products", path: "/products" },
  { name: route.params.cat, path: `/products/${route.params.cat}` },
]);
const contacts = [
  { icon: "envelope", name: APP_EMAIL, init: "mailto:" },
  { icon: "phone", name: APP_PHONE, init: "tel:" },
];
</script>

<style scoped>
@media (max-width: 968px) {
  button {
    display: none !important;
  }
}
</style>
