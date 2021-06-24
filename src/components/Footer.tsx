import React, { ReactNode } from "react";

import { FiHeart } from 'react-icons/fi';

import style from './Footer.module.scss'

interface FooterProps {
	children?: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
	return (
		<div className={style.footer}>
			With {<FiHeart />} from Elias Mawa
		</div>
	)
};

export default Footer;