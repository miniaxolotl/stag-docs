import React from "react";

import content from "../../lib/docs.json";

const List = () => {
	return (
		<section>
			<h3> List </h3>
			<div dangerouslySetInnerHTML={{ __html: content.list }} />
			<h5> Ordered list </h5>
			<div>
				<ol>
					<li>
						Claude von Riegan
					</li>
					<li>
						Lysithea von Ordelia
					</li>
				</ol>
			</div>
			<h5> Unordered list </h5>
			<div>
				<ul>
					<li>
						Claude von Riegan
					</li>
					<li>
						Lysithea von Ordelia
					</li>
				</ul>
			</div>
			<h5> Description list </h5>
			<div>
				<dl>
					<dt>
						Ignatz Victor
					</dt>
					<dd>
						14th of the Lone Moon Imperial Year 1162
					</dd>
					<dt>
						Marianne von Edmund
					</dt>
					<dd>
						23rd of the Red Wolf Moon Imperial Year 1162
					</dd>
				</dl>
			</div>
		</section>
	)
};

export default List;