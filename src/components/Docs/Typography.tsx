import React from "react";

import content from "../../lib/docs.json"

const Typography = () => {
	return (
		<section>
			<h3> Typography </h3>
			<p dangerouslySetInnerHTML={{ __html: content.typograhpy }} />
			<h1> This is a heading (H1) </h1>
			<h2> This is a heading (H2) </h2>
			<h3> This is a heading (H3) </h3>
			<h4> This is a heading (H4) </h4>
			<h5> This is a heading (H5) </h5>
			<h6> This is a heading (H6) </h6>
			<h3> Button </h3>
		</section>
	)
};

export default Typography;