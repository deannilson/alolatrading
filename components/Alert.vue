<template>
  <section>
    <div
      v-if="value"
      class="flex items-center border px-3 h-11 text-xs font-medium mb-2"
      :class="
        error
          ? ' text-error border-error'
          : success
          ? ' text-success border-success'
          : ''
      "
    >
      <i
        :class="`fa-solid fa-${error ? 'exclamation' : 'check'}-circle text-xl`"
      />
      <div class="pl-3">{{ msg }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  msg: String,
  error: Boolean,
  success: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
watch(value, (val) => {
  if (val) setTimeout(() => (value.value = false), 6000);
});
</script>
