import React from "react";

import content from "../../lib/docs.json"

const Form = () => {
	return (
		<section>
			<h3> Form </h3>
			<p dangerouslySetInnerHTML={{ __html: content.form }} />
			
			<label htmlFor="text">text</label>
			<input id="text" type="text" name="text"/>

			<label htmlFor="password">password</label>
			<input id="password" type="password" name="password"/>
			
			<div className="box">
				<fieldset>
					<label htmlFor="checkbox-1">checkbox</label>
					<input id="checkbox-1" type="checkbox" name="checkbox"/>
	
					<label htmlFor="checkbox-2">checkbox</label>
					<input id="checkbox-2" type="checkbox" name="checkbox"/>
	
					<label htmlFor="checkbox-3">checkbox</label>
					<input id="checkbox-3" type="checkbox" name="checkbox" disabled/>
				</fieldset>

				<fieldset>
					<label htmlFor="radio-1">radio</label>
					<input id="radio-1" type="radio" name="radio-2"/>
	
					<label htmlFor="radio-2">radio</label>
					<input id="radio-2" type="radio" name="radio-2"/>
	
					<label htmlFor="radio-3">radio</label>
					<input id="radio-3" type="radio" name="radio-2" disabled/>
				</fieldset>

				<label htmlFor="country">Country</label>
				<select id="country" name="country">
				<option value="australia">Australia</option>
				<option value="canada">Canada</option>
				<option value="usa">USA</option>
				</select>
				
				<label htmlFor="textarea">Number</label>
				<textarea id="textarea" disabled></textarea>

				<label htmlFor="number">Number</label>
				<input id="number" type="number" disabled/>
				<label htmlFor="tel">Tel</label>
				<input id="tel" type="tel"/>
				<label htmlFor="url">Url</label>
				<input id="url" type="url"/>
			</div>
		</section>
	)
};

export default Form;