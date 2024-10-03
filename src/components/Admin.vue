<template>
  <div class="mb-20">
    <h1>{{ title }}</h1>

    <div class="mb-6">
      <label for="embedUrlInput" class="block mb-2">Enter Power BI Embed URL:</label>
      <input
        id="embedUrlInput"
        v-model="userEmbedUrl"
        type="text"
        placeholder="Paste your Power BI embed URL here"
        class="input mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <div class="button-container flex gap-4 mb-4">
        <button @click="loadReport" class="btn" :disabled="!userEmbedUrl">
          View Report
        </button>
        <button @click="resetToDefaultUrl" class="btn-reset">
          Reset to Default
        </button>
      </div>
    </div>

    <div v-if="showReport" class="report-container relative mt-4">
      <div v-if="loading" class="spinner-container">
        <div class="spinner"></div>
      </div>
      <iframe
        title="User Embedded Power BI Report"
        class="w-full h-full"
        :src="userEmbedUrl"
        frameborder="0"
        allowfullscreen="true"
        @load="loading = false"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = 'Industry Reports';
const defaultEmbedUrl = 'https://app.powerbi.com/reportEmbed?reportId=daa6a7a2-bfa3-4be2-9f5d-91d8b355d9c2&appId=b0c9f525-57f5-4aca-ac9a-0839c0862f7b&autoAuth=true&ctid=c7265231-c030-4b8b-90f4-544f58d77ded';
const userEmbedUrl = ref(defaultEmbedUrl);
const showReport = ref(false);
const loading = ref(false);

const loadReport = () => {
  showReport.value = true;
  loading.value = true;
};

const resetToDefaultUrl = () => {
  userEmbedUrl.value = defaultEmbedUrl;
  showReport.value = false;
};
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
  margin-bottom: 0.5rem;
}

.btn:hover {
  background-color: #005fa3;
}

.btn:disabled {
  background-color: #d3d3d3;
  cursor: not-allowed;
}

.btn-reset {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.btn-reset:hover {
  background-color: #5a6268;
}

.input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  width: 100%;
}

.report-container {
  width: 100%;
  position: relative;
  padding-bottom: 47.5%;
  height: 0;
  overflow: hidden;
}

.report-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: -10; /* Higher than iframe to ensure visibility */
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007acc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
