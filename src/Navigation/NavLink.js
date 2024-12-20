import React, { useContext } from 'react';
import { NavContext } from './NavContext';

const NavLink = ({ navLinkId, scrollToId, mobileMenuOpen }) => {

	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<p
			id={navLinkId}
			className={`md:mr-5
			${activeNavLinkId === navLinkId ? 'activeClass' : ''}
			${!mobileMenuOpen ? 'opacity-0 duration-500 md:opacity-100' : 'opacity-100 duration-500'}
			pb-3
			`}
			onClick={handleClick}
		>
			{navLinkId}
		</p>
	);
};

export default NavLink;