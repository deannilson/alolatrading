<template>
  <div>
    <section
      class="bg-cover bg-center"
      style="background-image: url('/sliders/01.jpg')"
    >
      <div class="bg-white/80 pt-12">
        <div class="container">
          <h2 class="text-center text-4xl font-black">Get to know us</h2>
          <Divider />
          <div class="px-3 mb-8 text-center text-sm sm:text-base">
            Founded in 1951, {{ APP_NAME }} is a well known Exporter of all
            types of papers in the global markets. So far We have been able to
            gain a good reputation in the international market due to the
            reliability of our services, qualitative products and our best
            market prices.
          </div>
          <div class="md:grid grid-cols-2">
            <div
              style="background-image: url('/sliders/about-01.webp')"
              class="aspect-video bg-cover bg-center"
            />
            <div class="bg-white p-6 sm:p-12 text-sm">
              <p class="mb-4">
                {{ APP_NAME }} have been exporting to the Middle East, North
                America, South America, Europe, Southeast Asia, Africa and other
                countries. The markets respond well, we have a high reputation
                at home and abroad. Our company implement quality management,
                pay attention to environmental protection. The company had
                passed ISO9001 certification, SONCAP certification, CE
                certification,Eur 1 certificate.
              </p>
              <p>
                {{ APP_NAME }} is synonymous with premium quality paper, which
                is reflected in customer’s trust in its products enjoying the
                ‘Brand’ status among its competitors. Our business is conducted
                in all aspects according to ethical, professional and legal
                standards and our business code acts as a guideline to our
                employees.
              </p>
            </div>
          </div>
          <div class="md:grid grid-cols-2 flex flex-col-reverse">
            <div
              class="p-6 sm:p-12 bg-[#222222] text-white text-center md:text-right"
            >
              <div class="mb-3">
                <h2 class="font-black text-warning mb-1">OUR COMMITMENT</h2>
                <p class="text-xs">
                  Take integrity as the benchmark - integrity is the guarantee
                  for the sustainable development of the enterprise. We are
                  honest with customers and provide them with satisfactory
                  products and services; Honesty and commitment to employees
                </p>
              </div>
              <div class="mb-3">
                <h2 class="font-black text-warning mb-1">OUR MISSION</h2>
                <p class="text-xs">
                  To enlarge our product portfolio and production capacities
                  leveraging our domain knowledge, expertise and resources by
                  fostering global partnerships and alliances to become leading
                  global player with dominant market share.
                </p>
              </div>
              <div>
                <h2 class="font-black text-warning mb-1">OUR VISION</h2>
                <p class="text-xs">
                  Profit and growth by pursuing strong business strategies,
                  commitment to quality, Process automation and business
                  fortification.
                </p>
              </div>
            </div>
            <div
              style="background-image: url('/sliders/about-02.webp')"
              class="aspect-video bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-fixed bg-cover bg-no-repeat"
      style="background-image: url('/sliders/02.jpg')"
    >
      <div class="bg-primary/80 py-12 px-3">
        <div
          class="container text-white grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          <div
            v-for="n in services"
            :key="n.icon"
            class="p-4 sm:p-6 text-center border"
          >
            <i :class="`fa-solid fa-${n.icon} text-[64px]`" />
            <div class="pt-3 text-sm font-bold">{{ n.name }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  { icon: "circle-check", name: "High quality materials" },
  { icon: "sack-dollar", name: "Competitive Price" },
  { icon: "truck", name: "Fast worldwide delivery" },
  { icon: "headset", name: "Excellent customer service" },
];
</script>

<style scoped></style>
