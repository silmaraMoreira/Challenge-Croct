import React, { ReactElement } from 'react';
import PersonaSelector from './PersonaSelector';

type Props = {
	children?: ReactElement
};

function Layout({ children }: Props): ReactElement {
	return (
		<div className="container">
			<header className="header">
				<a href="https://croct.com" className="logo">
					<img src="/logo.svg" title="Croct" alt="Croct" />
				</a>
				<PersonaSelector />
			</header>
			<div className="content">
				{children}
			</div>
		</div>
	);
}

export default Layout;