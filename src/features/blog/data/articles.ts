import arquiteturaBaseadaEmFeatures from '../content/arquitetura-baseada-em-features.md?raw'

export type BlogArticle = {
  slug: string
  title: string
  description: string
  date: string
  content: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'arquitetura-baseada-em-features',
    title: 'Arquitetura Baseada em Funcionalidades',
    description:
      'Uma orientação prática sobre arquitetura baseada em funcionalidades para organizar aplicações React de forma mais clara.',
    date: '14-09-2026',
    content: arquiteturaBaseadaEmFeatures,
  },
]

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}
