<script setup lang="ts">
const props = defineProps<{
  tags: string;
  temperature: number;
}>();
const { chat, state, firstMessage } = useChatAi({ agent: "twitch" });
const announcement = computed(() => firstMessage.value?.content);

const generate = () => nextTick(() => chat(props));
defineExpose({
  generate,
});

const { copy } = useClipboard();
function post() {
  copy(announcement.value || "");
}
</script>

<template>
  <CardGeneric title="Twitch" :body="announcement" :state="state">
    <button class="btn btn-neutral" @click="generate()">Regenerate</button>
    <button class="btn btn-primary" @click="post">Copy Announcement</button>
  </CardGeneric>
</template>
