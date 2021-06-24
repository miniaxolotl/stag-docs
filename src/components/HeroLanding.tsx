import Image from 'next/image'

import logo from '../../public/logo.svg'
import style from './HeroLanding.module.scss'

interface HeroLandingProps {
	className?: string;
};

const HeroLanding = ({ className }: HeroLandingProps) => {
	return (
		<div id='hero' className='container size-full center'>
			<Image src={logo} alt='logo' className={style.logo} />
			<h1> Design for minimalists. </h1>
		</div>
	)
};

export default HeroLanding;