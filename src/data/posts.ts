export interface Post {
  id: string
  title: string
  description: string
  content: string
  image?: string
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Monstera Obliqua",
    description: "Uma das plantas mais raras com folhas perfuradas únicas.",
    content: `A Monstera Obliqua é conhecida por suas folhas delicadas e vazadas. Ela é extremamente difícil de encontrar e requer cuidados específicos.`,
    image: "/images/monstera.jpg"
  },
  {
    id: "2",
    title: "Philodendron Spiritus Sancti",
    description: "Muito rara e cara, com folhas longas e pendentes.",
    content: `Essa planta vem do Brasil e está ameaçada de extinção. Ela cresce em árvores e precisa de muita umidade.`,
    image: "/images/spiritus.jpg"
  }
]
