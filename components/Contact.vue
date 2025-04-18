<template>
  <form @submit.prevent="submit">
    <input
      v-model="post.name"
      required
      placeholder="Full name*"
      class="textfield"
    />
    <input
      v-model="post.email"
      required
      placeholder="Email*"
      type="email"
      class="textfield"
    />
    <input
      v-model="post.phone"
      required
      placeholder="Phone*"
      type="tel"
      class="textfield"
    />
    <div class="relative">
      <select v-model="post.location" class="textfield" required>
        <option v-for="n in countries" :key="n">{{ n }}</option>
      </select>
      <div
        class="textfield flex items-center absolute top-0 bg-white pointer-events-none"
      >
        <div class="flex-1">
          <span v-if="post.location">{{ post.location }}</span>
          <span v-else class="opacity-40">Location</span>
        </div>
        <i class="fa-solid fa-caret-down opacity-70" />
      </div>
    </div>
    <textarea
      v-model="post.message"
      required
      placeholder="Message*"
      class="textarea"
    />
    <Alert
      v-model="error"
      error
      msg="An error occured. Please try again later"
    />
    <Alert
      v-model="success"
      success
      msg="Thanks for sending your message. We will get to you soon."
    />
    <button
      type="submit"
      class="bg-primary h-12 w-full sm:w-48 px-10 text-white"
    >
      <span
        v-if="loading"
        class="h-6 w-6 inline-block border-4 rounded-full border-t-white border-r-white border-b-zinc-400/50 border-l-zinc-400/50 animate-spin"
      />
      <span v-else class="text-overline">Submit</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import countries from "@/resources/countries.json";
const post = ref({
  to: APP_EMAIL,
  subject: "Contact Message",
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
});
const loading = ref(false);
const success = ref(false);
const error = ref(false);
async function submit() {
  loading.value = true;
  try {
    await $fetch(API_BASE, { method: "POST", body: post.value });
    post.value.name = "";
    post.value.email = "";
    post.value.phone = "";
    post.value.location = "";
    post.value.message = "";
    success.value = true;
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
