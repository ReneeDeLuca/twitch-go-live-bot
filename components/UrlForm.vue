<script setup lang="ts">
const props = defineProps<{
  tags: string;
  temperature: number;
}>();
defineEmits(["submit"]);
const form = reactive({
  tags: props.tags,
  temperature: props.temperature,
});
</script>
<template>
  <form @submit.prevent="$emit('submit', form)" class="mb-10">
    <div class="flex">
      <input
        placeholder="separate tags with commas"
        v-model="form.tags"
        class="input input-bordered rounded-r-none w-full max-w-full"
        type="text"
      />
      <button class="btn rounded-l-none">Generate Go Live</button>
    </div>
    <TemperatureSelector v-model="form.temperature" />
  </form>
</template>
