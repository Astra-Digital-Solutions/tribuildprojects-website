import type { MetadataRoute } from 'next'
import { allPublicPages } from '@/config/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tribuildprojects.com.au'
  const currentDate = new Date()

  return allPublicPages.map((page) => ({
    url: `${baseUrl}${page.href === '/' ? '' : page.href}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
