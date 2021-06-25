import React from "react";

import hljs from "highlight.js";

import content from "../../../lib/docs-ext.json";
import { contentCodeExt } from "../../../lib/code-ext";

const Badge = () => {
	const badge = hljs.highlight(contentCodeExt.badge, { language: 'html'}).value;

	return (
		<section>
			<h3> Badge </h3>
			<div dangerouslySetInnerHTML={{ __html: content.badge }} />
			<div>
				<span className="badge">
					badge
				</span>
				<span className="badge badge-outline">
					outline
				</span>
			</div>
			<div>
				<span className="badge badge-green">
					badge green
				</span>
				<span className="badge badge-outline badge-green">
					outline green
				</span>
			</div>
			<div>
				<span className="badge badge-blue">
					badge blue
				</span>
				<span className="badge badge-outline badge-blue">
					outline blue
				</span>
			</div>
			<div>
				<span className="badge badge-red">
					badge red
				</span>
				<span className="badge badge-outline badge-red">
					outline red
				</span>
			</div>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: badge }}>
				</code>
			</pre>
		</section>
	)
};

export default Badge;