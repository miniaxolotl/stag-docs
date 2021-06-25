import Link from "next/link";
import React from "react";

import hljs from "highlight.js";

import content from "../lib/getting-started.json"

interface GettingStartedProps {
	className?: string;
};

const GettingStarted = ({ className }: GettingStartedProps) => {
	const ddl = hljs.highlight(content.ddl, { language: 'html'}).value;
	// const npm = hljs.highlight(content.npm, { language: 'html'}).value;
	const cdn = hljs.highlight(content.cdn, { language: 'html'}).value;
	const fonts = hljs.highlight(content.fonts, { language: 'html'}).value;

	return (
		<div id='getting-started'>
			<div className="" style={{ textAlign: 'center' }}>
				<div className="row">
					<div className="column">
						<strong>
							Modern
						</strong>
					</div>
					<div className="column">
						<strong>
							Minimal
						</strong>
					</div>
					<div className="column">
						<strong>
							Lightweight
						</strong>
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
			<h1> <strong> Getting Started </strong> </h1>
			<p>
				There are a few ways to get Stag into your project. Here are the most convienient methods, that may be suitable for your needs.
			</p>
			<h3> Direct Download </h3>
			<Link href='https://github.com/ottxrgxist/stag/releases'>
				<a>
					<button> download </button>
				</a>
			</Link>
			<pre>
				<code dangerouslySetInnerHTML={{__html: ddl}} />
			</pre>
			<h3> CDN </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: cdn}} />
			</pre>
			<h3> NPM </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.npm}} />
			</pre>
			<h3> Yarn </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.yarn}} />
			</pre>
			<h3> Fonts (Optional) </h3>
			<p>
				StagCSS is designed around Cantarell by Dave Crossland. You can include it from Google fonts.
			</p>
			<pre>
				<code dangerouslySetInnerHTML={{__html: fonts}} />
			</pre>
		</div>
	)
};

export default GettingStarted;