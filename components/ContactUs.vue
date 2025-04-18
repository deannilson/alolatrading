<template>
  <section
    class="bg-fixed bg-cover bg-no-repeat"
    style="background-image: url('/sliders/02.jpg')"
  >
    <div class="sm:px-3 sm:pt-12 bg-black/80">
      <div class="container">
        <div class="grid md:grid-cols-2">
          <div class="bg-white border-b md:border-b-0 md:border-e p-6 sm:p-20">
            <div
              v-for="n in contacts"
              :key="n.icon"
              class="py-3 flex items-center gap-3"
            >
              <i
                :class="`fa-solid fa-${n.icon} w-9 min-w-9 sm:min-w-12 sm:w-12 h-9 sm:h-12 rounded-full text-white bg-primary flex-center`"
              />
              <span class="text-base sm:text-lg font-medium" v-html="n.name" />
            </div>
          </div>
          <div class="bg-white p-6 sm:p-20">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  { icon: "phone", name: APP_PHONE },
  { icon: "envelope", name: APP_EMAIL },
  { icon: "location-dot", name: APP_ADDRESS },
  { icon: "clock", name: "Mon-Fri: 7am–12pm, 1pm-4pm" },
];
</script>

<style scoped></style>
