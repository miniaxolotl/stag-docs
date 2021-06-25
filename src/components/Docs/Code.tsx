import React from "react";

import hljs from "highlight.js";

import content from "../../lib/docs.json";
import { contentCode } from "../../lib/code";

const Code = () => {
	const code = hljs.highlight(contentCode.code, { language: 'html'}).value;

	return (
		<section>
			<h3> Code </h3>
			<div dangerouslySetInnerHTML={{ __html: content.code }} />
			<pre>
				<code>
					Garreg Mach Monastery
				</code>
			</pre>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: code }}>
				</code>
			</pre>
		</section>
	)
};

export default Code;