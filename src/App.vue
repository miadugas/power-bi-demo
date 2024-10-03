<template>
  <Navbar />
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ pageTitle }}
      </h1> -->
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const pageTitle = computed(() => route.meta.title || "Dashboard");

    return {
      pageTitle,
    };
  },
};
</script>