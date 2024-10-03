<template>
  <div class="mb-20">
    <h1>{{ title }}</h1>
    <button @click="showReport = !showReport" class="btn">
      {{ showReport ? 'Hide iframe Report' : 'View iframe Report' }}
    </button>

    <div v-if="showReport" class="relative mt-4" style="padding-bottom: 47.5%; height: 0;">
      <iframe
        title="Sample iframe Report Demo"
        class="absolute top-0 left-0 w-full h-full"
        src="https://playground.powerbi.com/sampleReportEmbed"
        frameborder="0"
        allowfullscreen="true"></iframe>
    </div>
    <div v-if="showReport" class="relative mt-4" style="padding-bottom: 47.5%; height: 0;">
      <iframe title="Sample Report Demo" width="1140" height="541.25" src="https://playground.powerbi.com/sampleReportEmbed" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = 'iframe Reports';
const showReport = ref(false);
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007acc;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.btn:hover {
  background-color: #005fa3;
}
</style>
