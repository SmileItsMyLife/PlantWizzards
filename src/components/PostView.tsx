import { Post } from "@/data/posts"
import Image from "next/image"

type Props = {
  post: Post
  onBack: () => void
}

export function PostView({ post, onBack }: Props) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 text-blue-500 underline">← Voltar</button>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <Image
        src={post.image || "/images/default.jpg"} 
        alt={post.title} 
        width={800} 
        height={400} 
        className="w-full h-60 object-cover rounded my-4">
      </Image>
      <p>{post.content}</p>
    </div>
  )
}
