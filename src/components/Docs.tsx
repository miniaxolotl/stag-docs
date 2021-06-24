import React from "react";

import Typography from "./Docs/Typography";
import Blockquote from "./Docs/Blockquote";
import Button from "./Docs/Button";
import Code from "./Docs/Code";
import Divider from "./Docs/Divider";
import Form from "./Docs/Form";
import Grid from "./Docs/Grid";
import List from "./Docs/List";
import Table from "./Docs/Table";

interface DocsProps {
	className?: string;
};

const Docs = ({ className }: DocsProps) => {

	return (
		<div id='docs'>
			<h1> <strong> Docs </strong> </h1>
			<Typography />
			<Blockquote />
			<Button />
			<Code />
			<Divider />
			<Form />
			<Grid />
			<List />
			<Table />
		</div>
	)
};

export default Docs;