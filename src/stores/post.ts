import { defineStore } from "pinia"
import { reactive, computed } from "vue"
import api from "@/services/api"
import { PostEntity } from "@/services/entities"

const usePost = defineStore("post", () => {
  const state = reactive({
    postList: [] as PostEntity[],
  })

  const getters = {}
  const actions = { loadPosts, loadComments }

  return { state, getters, actions }

  async function loadPosts() {
    const res = await api.posts.get()
    state.postList = res.data.map(post => new PostEntity(post))
  }

  async function loadComments(postId: number) {
    const res = await api.posts.id.comments.get(postId)
    return res.data
  }
})

export default usePost
