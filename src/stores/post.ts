import { defineStore } from "pinia"
import { reactive, computed } from "vue"
import api from "@/services/api"
import { PostEntity } from "@/services/entities"

const usePost = defineStore("post", () => {
  const state = reactive({
    postMap: new Map<number, PostEntity>(),
  })

  const getters = {}
  const actions = { loadPosts, loadComments }

  return { state, getters, actions }

  async function loadPosts() {
    const res = await api.posts.get()
    state.postMap.clear()
    res.data.posts
      .slice(0, 5)
      .forEach(post => state.postMap.set(post.id, new PostEntity(post)))
  }

  async function loadComments(postId: number) {
    const res = await api.posts.id.comments.get(postId)
    return res.data
  }
})

export default usePost
