"use client"

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export default function Fonts() {
	return (
		// Make sure to configure tailwind.config.js with the font variables below
		<style jsx global>{`
		:root {
			--font-montserrat: ${montserrat.style.fontFamily};
		}
		`}</style>
	)
}
