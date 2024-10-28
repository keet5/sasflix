<template>
  <div class="max-w-[676px] m-auto flex flex-col min-h-[100vh] px-2">
    <header>
      <div
        class="leading-10 text-[40px] font-bold tracking-[0.10px] weight-bold text-center text-primary m-auto mt-4"
      >
        ikakprosto.ru
      </div>
    </header>

    <c-container-loader class="flex-1" :init-fun="init">
      <RouterView />
    </c-container-loader>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import usePost from "@/stores/post"

import CContainerLoader from "@/components/c-container-loader"

const postStore = usePost()

function init() {
  return postStore.actions.loadPosts()
}
</script>

<style lang="postcss" scoped>
.title {
  font-family: "SFPro", sans-serif;
  line-height: 2.5rem;
  font-size: 40px;
  font-weight: 700;
}
</style>
