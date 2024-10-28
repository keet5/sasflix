import { instance } from "./instance"
import * as Interfaces from "./interfaces"

const api = {
  posts: {
    get: () => instance.get<Interfaces.PostsGet>("posts"),
    id: {
      comments: {
        get: (id: number) =>
          instance.get<Interfaces.PostsIdCommentsGet>(`posts/${id}/comments`),
      },
    },
  },
}

export { Interfaces }
export default api
