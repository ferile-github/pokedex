import 'styles/globals.scss';
import Fonts from '@/components/global/fonts';
import Container from '@/components/global/Container';
import React from 'react';
import { env } from 'process';

import logo from '@/public/pokemon-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: env.SITE_NAME,
	description: env.DESCRIPTION,
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
};

interface Props {
	children?: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true} >
				<Fonts />
				<main id="site-content" className="site-content flex flex-col min-h-screen">
					<div className="flex justify-center">
						<Link href={'/'}>
							<Image src={logo} height={200} width={545} className='mb-lg' alt='Pokemon logo' />
						</Link>
					</div>

					<Container>
						{children}
					</Container>
				</main>
			</body>
		</html>
	);
}
