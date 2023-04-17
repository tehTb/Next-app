import { Card } from '@/app/_shared/components/Card'

interface UserPostsProps {
  promise: Promise<Post[]>
}

export const UserPosts = async ({ promise }: UserPostsProps) => {
  const posts = await promise
  const content = posts.map((post) => {
    return (
      <Card key={post.id} className="my-5">
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </Card>
    )
  })
  return content
}
