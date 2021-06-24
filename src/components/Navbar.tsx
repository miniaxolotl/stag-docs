import Link from 'next/link'

import style from './Navbar.module.scss'

interface NavbarProps {
	className?: string;
	activeLink?: string;
};

const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={style.navbar}>
			<div className={`nav-container ${className}`}>
				<Link href="javascript:void(0)">
					<a className="nav-title">StagCSS</a>
				</Link>

				<Link href="#getting-started">
					<a className="nav-item">Getting Started</a>
				</Link>

				<Link href="#docs">
					<a className="nav-item">Docs</a>
				</Link>

				<Link href="https://github.com/ottxrgxist/stag">
					<a className="nav-item">Github</a>
				</Link>
			</div>
			{/* <hr></hr> */}
		</div>
	)
};

export default Navbar;