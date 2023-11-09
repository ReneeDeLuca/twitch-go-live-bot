<script setup lang="ts">
const form = ref({
  tags: "",
  temperature: 1,
});

const twitchCard = ref();

async function handleImport(e: typeof form.value) {
  form.value = { ...e };
  if (!form.value.tags) return;
  twitchCard.value.generate();
}
</script>
<template>
  <h1 class="text-4xl my-10">Twitch Go Live Message Generator</h1>
  <UrlForm v-bind="form" @submit="handleImport"></UrlForm>
  <div>
    <CardTwitch ref="twitchCard" v-bind="form" />
  </div>
</template>
