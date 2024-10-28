<template>
  <div class="h-[27px] rounded-[14px] flex overflow-hidden gap-[1px]">
    <div
      @click="likeClick"
      :class="likeStyle"
      class="button like transition-all"
    >
      <heart-icon :active="isLiked" />
      <span class="text">Like</span>
      <div class="number">{{ likes }}</div>
    </div>
    <div @click="dislikeClick" :class="dislikeStyle" class="button dislike">
      <dislike-icon :active="isDisliked" />
      <span class="text">Trash</span>
      <div class="number">{{ dislikes }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { HeartIcon, DislikeIcon } from "./icons"

interface Props {
  likes: number
  dislikes: number
  isLiked: boolean
  isDisliked: boolean
}

interface Emits {
  (e: "like:click"): void
  (e: "dislike:click"): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

// getters
const likeStyle = computed(() => (props.isLiked ? "active" : ""))
const dislikeStyle = computed(() => (props.isDisliked ? "active" : ""))

// actions
function likeClick() {
  emits("like:click")
}
function dislikeClick() {
  emits("dislike:click")
}
</script>

<style lang="css" scoped>
.button {
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  background: rgba(4, 4, 4, 0.04);
  flex: 1;
  user-select: none;
  cursor: pointer;
}

.text {
  color: #040405;
  margin-left: 4px;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.number {
  color: rgba(4, 4, 5, 0.3);
  font-size: 14px;
  margin-left: 8px;
  min-width: 26px;
}

.like.active {
  background-color: #ff3b30;
  color: white;
}

.active > .text {
  color: white;
}

.like.active > .number {
  color: white;
}

.dislike.active > .number {
  color: rgba(255, 255, 255, 0.95);
  opacity: 0.4;
}

.dislike.active {
  background-color: #040405;
}
</style>
