import React from "react";

import Badge from "./Docs/ext/Badge";
import Card from "./Docs/ext/Card";
import Progress from "./Docs/ext/Progress";


const DocsExt = () => {

	return (
		<div id='docs'>
			<h1> <strong> Extention Docs </strong> </h1>
			<Badge />
			<Card />
			<Progress />
		</div>
	)
};

export default DocsExt;