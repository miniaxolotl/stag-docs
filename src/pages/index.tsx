import React from 'react';
import Docs from '../components/Docs';

import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';

const Index = () => {
	return (
		<Layout>
			<div className='container'>
				<GettingStarted />
				<hr/>
				<Docs />
			</div>
		</Layout>
	)
};

export default Index;