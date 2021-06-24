import React from "react";

import content from "../../lib/docs.json"

const Table = () => {
	return (
		<section>
			<h3> Table </h3>
			<p dangerouslySetInnerHTML={{ __html: content.table }} />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Race</th>
						<th>Gender</th>
						<th>Affiliation</th>
						<th>Starting Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Claude</td>
						<td>Human</td>
						<td>Male</td>
						<td>Golden Deer</td>
						<td>Noble, Wyvern Rider</td>
					</tr>
					<tr>
						<td>Lysithea</td>
						<td>Human</td>
						<td>Female</td>
						<td>Golden Deer</td>
						<td>Noble, Mage</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
};

export default Table;