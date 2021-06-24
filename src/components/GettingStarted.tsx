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
			<p>
				You can download the file directly and link it from a static location.
			</p>
			<pre>
				<code dangerouslySetInnerHTML={{__html: ddl}} />
			</pre>
			<h3> NPM </h3>
			<p>
				There are a few ways to get Stag into your project. Here are the most convienient methods.
			</p>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.npm}} />
			</pre>
			<h3> Yarn </h3>
			<p>
				There are a few ways to get Stag into your project. Here are the most convienient methods.
			</p>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.yarn}} />
			</pre>
			<h3> CDN </h3>
			<p>
				There are a few ways to get Stag into your project. Here are the most convienient methods.
			</p>
			<pre>
				<code dangerouslySetInnerHTML={{__html: cdn}} />
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