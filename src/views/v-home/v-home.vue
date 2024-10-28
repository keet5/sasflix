<template>
  <div class="flex flex-col gap-[30px]">
    <w-post v-for="post in postList" :post="post" show-open-comments />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import usePost from "@/stores/post"
import WPost from "@/widgets/w-post"

const postStore = usePost()

const postList = computed(() =>
  Array.from(postStore.state.postMap).map(([_, post]) => post),
)
</script>
