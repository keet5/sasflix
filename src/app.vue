<template>
  <div class="max-w-[676px] m-auto flex flex-col min-h-[100vh]">
    <header>
      <div class="text-center text-primary">ikakprosto.ru</div>
    </header>

    <c-container-loader class="flex-1" :init-fun="init">
      <!-- <RouterView /> -->
      <div class="h-[1000px]">jy</div>
    </c-container-loader>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { RouterLink, RouterView } from "vue-router"
import usePost from "@/stores/post"
import CSpinner from "@/components/c-spinner"
import CContainerLoader from "@/components/c-container-loader"

function init() {
  return new Promise(res => setTimeout(res, 1000))
}
</script>
