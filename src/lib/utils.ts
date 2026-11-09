import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string{
	const name = profile.author_name
	if (!name || !authors.includes(name)) return authors
	return authors.replaceAll(name, `<span class='font-bold'>${name}</span>`)
}

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}

export function getTagUrl(tag: string): string {
	return `${template.base}/blog/tags/${encodeURIComponent(tag)}`
}
