import Image from 'next/image'

import logo from '../../public/logo-1.svg'
import style from './HeroLanding.module.scss'

interface HeroLandingProps {
	className?: string;
};

const HeroLanding = ({ className }: HeroLandingProps) => {
	return (
		<div id='hero' className='container size-full center'>
			<Image src={logo} alt='logo' className={style.logo} />
			<h1> Design for minimalists. </h1>
			<div className="container" style={{ textAlign: 'center' }}>
				<div className="row">
					<div className="column">
						Modern
					</div>
					<div className="column">
						Minimal
					</div>
					<div className="column">
						Lightweight
					</div>
				</div>
				<div className="row">
					<div className="column">
						Utilizes modern CSS3 practices. Multi browser compatible. Flexbox-based. Mobile friendly
					</div>
					<div className="column">
						Clean and minimal design. Increased focus and visiblity.
					</div>
					<div className="column">
						{`>`}3kb gzipped and minified. No javascript. Quick loadtimes. Low bandwith.
					</div>
				</div>
			</div>
		</div>
	)
};

export default HeroLanding;