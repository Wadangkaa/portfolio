export const useScrollToSection = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId)
		element?.scrollIntoView({ behavior: 'smooth' })
	}

	return scrollToSection
}
