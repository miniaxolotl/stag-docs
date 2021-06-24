import React from "react";

import content from "../../lib/docs.json"

import style from './Grid.module.scss'

const Grid = () => {
	return (
		<section>
			<h3> Grid </h3>
			<p dangerouslySetInnerHTML={{ __html: content.grid }} />
			<div className={style.cell}>
				<div className="row">
					<div className="column background-magenta">column</div>
					<div className="column">column</div>
					<div className="column column-50">column-50</div>
				</div>
				<div className="row">
					<div className="column column-75 column-offset-25">column-75</div>
					<div className="column">column</div>
					<div className="column column-offset-25">column-offset-25</div>
					<div className="column">column</div>
				</div>
			</div>
		</section>
	)
};

export default Grid;