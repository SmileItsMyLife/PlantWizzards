import { Post } from "../data/posts"
import Image from "next/image"

type Props = {
  post: Post
  onClick: () => void
}

export function PlantCard({ post, onClick }: Props) {
  return (
    <div onClick={onClick} className="cursor-pointer border rounded p-4 shadow hover:shadow-md transition">
      <Image
        src={post.image || "/images/default.jpg"} 
        alt={post.title} 
        width={400} 
        height={300} 
        className="w-full h-40 object-cover rounded">
      </Image>
      {/* <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded" /> */}
      <h2 className="text-xl font-bold mt-2">{post.title}</h2>
      <p>{post.description}</p>
    </div>
  )
}
