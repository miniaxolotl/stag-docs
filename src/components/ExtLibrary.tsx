import Link from "next/link";
import React from "react";

import hljs from "highlight.js";

import content from "../lib/getting-started.json"

const ExtLibrary = () => {
	const ddlExt = hljs.highlight(content.ddlExt, { language: 'html'}).value;
	// const npm = hljs.highlight(content.npm, { language: 'html'}).value;
	const cdnExt = hljs.highlight(content.cdnExt, { language: 'html'}).value;
	const fonts = hljs.highlight(content.fonts, { language: 'html'}).value;

	return (
		<div id='docs-ext'>
			<h1> <strong> Extention Library </strong> </h1>
			<p>
				To keep the main payload small Stag also provides an extention library. The extention library contains a collection of classes that would not typically be used on every site.
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
				<code dangerouslySetInnerHTML={{__html: ddlExt}} />
			</pre>
			<h3> NPM </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.npm}} />
			</pre>
			<h3> Yarn </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: content.yarn}} />
			</pre>
			<h3> CDN </h3>
			<pre>
				<code dangerouslySetInnerHTML={{__html: cdnExt}} />
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

export default ExtLibrary;