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
    title: 'Arquitetura Baseada em Features',
    description:
      'Uma orientacao pratica sobre arquitetura baseada em features para organizar grandes codebases frontend de forma mais clara.',
    date: '2026-08-08',
    content: arquiteturaBaseadaEmFeatures,
  },
]

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}
