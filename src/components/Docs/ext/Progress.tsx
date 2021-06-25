import React from "react";

import Image from 'next/image'
import hljs from "highlight.js";

import claude from '../../../../public/claude.jpg'
import lysithea from '../../../../public/lysithea.jpg'

import content from "../../../lib/docs-ext.json";
import { contentCodeExt } from "../../../lib/code-ext";

const Progress = () => {
	const progress = hljs.highlight(contentCodeExt.progress, { language: 'html'}).value;

	return (
		<section>
			<h3> Progress </h3>
			<div dangerouslySetInnerHTML={{ __html: content.progress }} />
			<section>
				<div>
					<progress max="100" value="100"> </progress>
				</div>
				<progress max="100" value="25" className="progress-error"> </progress>
				<progress max="100" value="50" className="progress-warning"> </progress>
				<progress max="100" value="75" className="progress-info"> </progress>
				<progress max="100" value="100" className="progress-success"> </progress>
			</section>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: progress }}>
				</code>
			</pre>
		</section>
	)
};

export default Progress;