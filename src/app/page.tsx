"use client"

import { useState } from "react"
import { posts, Post } from "@/data/posts"
import { PlantCard } from "@/components/PlantCard"
import { PostView } from "@/components/PostView"

export default function Home() {
  const [selected, setSelected] = useState<Post | null>(null)

  return (
    <main className="p-8 max-w-3xl mx-auto font-sans">
      {selected ? (
        <PostView post={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="grid gap-6">
          {posts.map(post => (
            <PlantCard key={post.id} post={post} onClick={() => setSelected(post)} />
          ))}
        </div>
      )}
    </main>
  )
}
