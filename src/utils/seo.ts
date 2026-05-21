type SeoConfig = {
  title: string
  description: string
  image?: string
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  const element = existing ?? document.createElement('meta')

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  if (!existing) {
    document.head.appendChild(element)
  }
}

export function applySeo({ title, description, image }: SeoConfig) {
  document.title = title

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  })
  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: title,
  })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  if (image) {
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image,
    })
  }
}
