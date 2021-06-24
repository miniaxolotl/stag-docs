import React from "react";

import hljs from "highlight.js";

import content from "../../lib/docs.json"
import { contentCode } from "../../lib/code";

const Divider = () => {
	const divider = hljs.highlight(contentCode.divider, { language: 'html'}).value;

	return (
		<section>
			<h3> Divider </h3>
			<p dangerouslySetInnerHTML={{ __html: content.divider }} />
			<hr />
			<hr className='hr-large' />
			<pre>
				<code dangerouslySetInnerHTML={{ __html: divider }}>
				</code>
			</pre>
		</section>
	)
};

export default Divider;