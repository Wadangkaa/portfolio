import { useEffect, useRef } from 'react'

export const useRevealOnScroll = () => {
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal')
					}
				})
			},
			{ threshold: 0.1 }
		)

		const current = ref.current
		if (current) {
			observer.observe(current)
		}

		return () => {
			if (current) {
				observer.unobserve(current)
			}
		}
	}, [])

	return ref
}
