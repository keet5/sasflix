export interface PostsItem {
  id: number
  title: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

export interface PostsIdCommentsGet {
  comments: PostsIdCommentsItem[]
  total: number
  skip: number
  limit: number
}

export interface PostsIdCommentsItem {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}
