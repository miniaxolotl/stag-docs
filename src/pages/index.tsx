import React from 'react';
import Docs from '../components/Docs';
import DocsExt from '../components/DocsExt';
import ExtLibrary from '../components/ExtLibrary';

import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';

const Index = () => {
	return (
		<Layout>
			<div className='container'>
				<GettingStarted />
				<hr />
				<Docs />
				<hr />
				<ExtLibrary />
				<hr />
				<DocsExt />
			</div>
		</Layout>
	)
};

export default Index;