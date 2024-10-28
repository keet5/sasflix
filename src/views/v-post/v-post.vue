<template>
  <div v-if="post" class="flex flex-col">
    <w-post :post="post" class="mb-10" />
    <div v-if="state.loading" class="flex flex-1 justify-center items-center">
      <c-spinner />
    </div>
    <div v-else>
      <div class="text-title mb-4">{{ commentsNumber }} comments</div>

      <div class="flex flex-col gap-[15px]">
        <c-comment v-for="comment in state.commentList" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import usePost from "@/stores/post"
import { CommentEntity } from "@/services/entities/"
import CSpinner from "@/components/c-spinner"
import CComment from "./c-comment.vue"

import WPost from "@/widgets/w-post"

const postStore = usePost()
const route = useRoute()
const router = useRouter()

const state = reactive({
  loading: false,
  commentList: [] as CommentEntity[],
})

// getters
const id = computed(() => Number(route.params.id))
const post = computed(() => {
  const p = postStore.state.postMap.get(Number(id.value))

  return p
})
const commentsNumber = computed(
  () => state.commentList.filter(i => !i.deleted).length,
)

//

loadComments()

// actions

async function loadComments() {
  if (isNaN(id.value)) return
  state.loading = true
  const comRes = await postStore.actions.loadComments(id.value)
  state.loading = false

  state.commentList = comRes.comments.map(comment => new CommentEntity(comment))
}
</script>
