import React from "react";

import Image from 'next/image'
import hljs from "highlight.js";

import claude from '../../../../public/claude.jpg'
import lysithea from '../../../../public/lysithea.jpg'

import content from "../../../lib/docs-ext.json";
import { contentCodeExt } from "../../../lib/code-ext";

const Card = () => {
	const card = hljs.highlight(contentCodeExt.card, { language: 'html'}).value;

	return (
		<section>
			<h3> Card </h3>
			<div dangerouslySetInnerHTML={{ __html: content.card }} />
			<div className="row">
				<section className='column'>
					<h4> Full Card </h4>
					<div className="card">
						<figure className="card-image">
						<Image src={claude} alt="Picture of Claude" sizes="100%"/>
							<figcaption>Claude</figcaption>
						</figure>
						<div className="card-content">
							Claude von Reigan
						</div>
					</div>
				</section>
				<section className='column'>
					<h4> Card Image </h4>
					<div className="card">
						<figure className="card-image">
						<Image src={lysithea} alt="picture of claude" sizes="100%"/>
							<figcaption>Lysithea von Cordelia</figcaption>
						</figure>
					</div>
				</section>
				<section className='column'>
					<h4> Card Content </h4>
					<div className="card">
						<div className="card-content">
							House of the Golden Deer is the best.
						</div>
					</div>
				</section>
			</div>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: card }}>
				</code>
			</pre>
		</section>
	)
};

export default Card;