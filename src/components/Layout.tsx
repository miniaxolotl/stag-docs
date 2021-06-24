import React, { ReactNode } from "react";
import Link from "next/link";

import HeroLanding from "./HeroLanding";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiArrowUp } from "react-icons/fi";

import style from './Layout.module.scss'
import { useState } from "react";
import { useEffect } from "react";

interface LayoutProps {
	children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [isHidden, useHidden] = useState(true);

	useEffect(() => {
		const { innerHeight: height } = window;
		const { pageYOffset: yOffset } = window;
		
		window.addEventListener('scroll', () => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			useHidden((innerHeight / 2) > pageYOffset);
		});
	}, [ ]);

	const scrollTop = () => {
		// safari
		document.body.scrollTop = 0;
		// other browsers
		document.documentElement.scrollTop = 0;
	};

	return (
		<div id='hero' className='container size-full'>
			<Navbar />
			<HeroLanding />
			<div id='content'>
				{ children }
			</div>
			<Link href='#'>
				<a className={isHidden ? 'hidden' : ''} onClick={scrollTop}>
					<button className={style.upArrow}>
						<FiArrowUp />
					</button>
				</a>
			</Link>
			<Footer />
		</div>
	)
};

export default Layout;