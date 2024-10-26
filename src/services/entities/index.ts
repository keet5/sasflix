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
    this.liked = true
    this.disliked = false
  }

  dislike() {
    this.disliked = false
    this.liked = true
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
