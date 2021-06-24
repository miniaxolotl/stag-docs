import React from "react";

import hljs from "highlight.js";

import content from "../../lib/docs.json";
import { contentCode } from "../../lib/code";

const Button = () => {
	const button = hljs.highlight(contentCode.button, { language: 'html'}).value;

	return (
		<section>
			<h3> Button </h3>
			<div dangerouslySetInnerHTML={{ __html: content.button }} />
			<button> button </button>
			&nbsp;
			<button className="button-outline"> outline </button>
			&nbsp;
			<button className="button-clear"> clear </button>
			&nbsp;
			<button disabled> disabled </button>
			&nbsp;
			<input type="button" value="button"/>
			&nbsp;
			<input type="submit" value="submit"/>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: button }}>
				</code>
			</pre>
		</section>
	)
};

export default Button;