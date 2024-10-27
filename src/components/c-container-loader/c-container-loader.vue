<template>
  <div class="w-full h-full flex justify-center items-center" v-if="loading">
    <slot name="loader">
      <c-spinner />
    </slot>
  </div>
  <slot v-else />
</template>

<script lang="ts" setup>
import { ref } from "vue"
import CSpinner from "@/components/c-spinner"

interface Props {
  initFun: () => Promise<any>
}

const props = defineProps<Props>()
const loading = ref(true)

async function init() {
  await props.initFun()
  loading.value = false
}

init()
</script>
