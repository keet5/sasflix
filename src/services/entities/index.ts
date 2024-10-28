import { Interfaces } from "@/services/api"

export class PostEntity {
  liked = false
  disliked = false

  constructor(public post: Interfaces.PostsItem) {}

  get likes() {
    return this.post.reactions.likes + Number(this.liked)
  }

  get dislikes() {
    return this.post.reactions.dislikes + Number(this.disliked)
  }

  like() {
    if (this.liked) this.liked = false
    else this.liked = true
    if (this.disliked) this.disliked = false
  }

  dislike() {
    if (this.disliked) this.disliked = false
    else this.disliked = true

    if (this.liked) this.liked = false
  }
}

export class CommentEntity {
  deleted = false
  constructor(public comment: Interfaces.PostsIdCommentsItem) {}

  delete() {
    this.deleted = true
  }

  recover() {
    this.deleted = false
  }
}
