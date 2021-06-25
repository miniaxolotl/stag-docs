import React from "react";

import hljs from "highlight.js";

import content from "../../lib/docs.json"
import { contentCode } from "../../lib/code";

import style from './Grid.module.scss'

const Grid = () => {
	const grid = hljs.highlight(contentCode.grid, { language: 'html'}).value;

	return (
		<section>
			<h3> Grid </h3>
			<p dangerouslySetInnerHTML={{ __html: content.grid }} />
			<div className={style.cell}>
				<div className="row">
					<div className="column">column</div>
					<div className="column">column</div>
					<div className="column">column</div>
					<div className="column">column</div>
				</div>
				<div className="row">
					<div className="column column-50 column-offset-25">column-50</div>
				</div>
				<div className="row">
					<div className="column">column</div>
					<div className="column column-offset-50">column</div>
					<div className="column">column</div>
				</div>
			</div>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: grid }}>
				</code>
			</pre>
		</section>
	)
};

export default Grid;