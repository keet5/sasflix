<template>
  <div
    class="grid grid-cols-[auto,1fr] grid-rows-[1fr,1fr,auto] gap-x-[7px] gap-y-[3px] items-start"
  >
    <div class="row-span-2 pt-[5px]">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
        <circle
          cx="23"
          cy="23"
          r="20.5"
          stroke="#05090E"
          stroke-width="5"
          stroke-dasharray="20 5"
        />
      </svg>
    </div>
    <div class="text-title">Stas</div>
    <template v-if="comment.deleted">
      <div class="flex gap-[10px]">
        <div class="text-body">This comment has been deleted.</div>
        <c-anchor-button
          @click="returnClick"
          class="text-primary translate-y-[-9px] text-[20px] mb-[-7px] hover:border-b-primary/10"
        >
          <div class="translate-y-[3px]">Return</div>
        </c-anchor-button>
      </div>
    </template>
    <template v-else>
      <div class="text-body">His mother had always taught him</div>
      <div class="col-start-2 flex gap-[24px]">
        <div class="text-lightgray text-[15px]">Today</div>
        <c-anchor-button
          class="text-red hover:border-b-red text-[12px] tracking-[1px] translate-y-[-3px]"
        >
          <div @click="deleteClick" class="translate-y-[5px]">Delete</div>
        </c-anchor-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { CommentEntity } from "@/services/entities"
import CAnchorButton from "@/components/c-anchor-button"
interface Props {
  comment: CommentEntity
}

const props = defineProps<Props>()

function deleteClick() {
  props.comment.delete()
}

function returnClick() {
  props.comment.recover()
}
</script>

<style lang="css" scoped>
.text-title {
  font-size: 20px;
}

.text-body {
  word-spacing: 1px;
  font-size: 20px;
}
</style>
