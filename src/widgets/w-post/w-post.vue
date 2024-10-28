<template>
  <div class="pl-[2px]">
    <div class="title text-title pb-[9.5px]">{{ post.post.title }}</div>
    <div class="text-body">{{ post.post.body }}</div>

    <div class="flex gap-2 mt-[21px] items-center flex-wrap">
      <c-reaction
        :is-liked="post.liked"
        :is-disliked="post.disliked"
        :likes="post.likes"
        :dislikes="post.dislikes"
        @like:click="like"
        @dislike:click="dislike"
      />

      <c-anchor-button
        @click="openButtonClick"
        class="text-red text-[14px] tracking-[0.8px] hover:border-b-primary/50"
        >Open comments</c-anchor-button
      >
      <div class="text-lightgray">Today</div>
      <div class="flex gap-1">
        <c-badge v-for="(tag, n) in post.post.tags" :show-tail="n == 0">{{
          tag
        }}</c-badge>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import CBadge from "@/components/c-badge"
import CReaction from "./c-reaction"
import { PostEntity } from "@/services/entities"
import CAnchorButton from "@/components/c-anchor-button"

interface Props {
  post: PostEntity
}

const props = defineProps<Props>()
const router = useRouter()

//

function like() {
  props.post.like()
}
function dislike() {
  props.post.dislike()
}

function openButtonClick() {
  router.push({ name: "post-detail", params: { id: props.post.post.id } })
}
</script>

<style lang="postcss" scoped></style>
