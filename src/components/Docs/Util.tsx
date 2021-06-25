import React from "react";

import content from "../../lib/docs.json";

const Util = () => {
	return (
		<section>
			<h3> Utilities </h3>
			<div dangerouslySetInnerHTML={{ __html: content.util }} />
			<ul>
				<li><code>justify-{`{start|center|end}`}</code>, flex justify.</li>
				<li><code>align-{`{start|center|end}`}</code>, flex align.</li>
				<li><code>direction-{`{vertical|horizontal}`}</code>, flex set flex direction.</li>
				<li><code>center</code>, center all content</li>
				<li><code>positon-{`{relative|absolute|fixed}`}</code>, set position</li>
				<li><code>fullscreen-{`{width|height}`}</code>, expand a block to the full vh or vw.</li>
				<li><code>size-full</code>, cover the whole viewport.</li>
				<li><code>hidden</code>, hide an an element.</li>
			</ul>
		</section>
	)
};

export default Util;