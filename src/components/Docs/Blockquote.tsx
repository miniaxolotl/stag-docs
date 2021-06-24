import React from "react";

import hljs from "highlight.js";

import content from "../../lib/docs.json";
import { contentCode } from "../../lib/code";

const Blockquote = () => {
	const blockquote = hljs.highlight(contentCode.blockquote, { language: 'html'}).value;

	return (
		<section>
			<h3> Blockquote </h3>
			<div dangerouslySetInnerHTML={{ __html: content.blockquote }} />
			<blockquote>
				Garreg Mach Monastery
			</blockquote>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: blockquote }}>
				</code>
			</pre>
		</section>
	)
};

export default Blockquote;