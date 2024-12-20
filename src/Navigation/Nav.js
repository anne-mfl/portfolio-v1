import React, { useState, useEffect, useLayoutEffect } from 'react';
import NavLink from './NavLink';
import './Nav.css'
import useScrollListener from '../useScroll'
import ScrollAnimation from 'react-animate-on-scroll';
import logo from '../images/fav.png'

const Nav = ({ lightTheme, setLightTheme }) => {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [windowSize, setWindowSize] = useState(0)

	const [navClassList, setNavClassList] = useState([]);
	const scroll = useScrollListener();

	useEffect(() => {
		const _classList = [];
		if (windowSize > 768 && scroll.y > 15 && scroll.y - scroll.lastY > 0)
			_classList.push("nav-bar--hidden");

		setNavClassList(_classList);
	}, [scroll.y, scroll.lastY, windowSize]);

	const navLinks = [
		{ navLinkId: 'Home', scrollToId: 'home' },
		{ navLinkId: 'About', scrollToId: 'about' },
		{ navLinkId: 'Projects', scrollToId: 'projects' },
		{ navLinkId: 'Contact', scrollToId: 'contact' },
	];

	useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


	return (
		<nav className={`
		${navClassList.join(" ")}
		${lightTheme
				? 'bg-white md:bg-white/90 md:shadow-sm font-montserrat'
				: 'bg-slate-800 md:bg-slate-800/80 md:shadow-sm md:shadow-white'}
		h-24
	 `}>
			<nav
				className='flex' >

				<ScrollAnimation animateOnce={true} className='navAnim'>
					<a href='#home'>
						<img src={logo} alt='logo' className={`${!lightTheme && 'invert'} w-16 ml-10 md:ml-24`} />
					</a>
				</ScrollAnimation>

				<ScrollAnimation animateOnce={true} className='hidden md:flex navAnim'>
					<div className='navMenu'>
						{navLinks.map(({ navLinkId, scrollToId }, idx) => (
							<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
						))}
					</div>

					<label className='mr-6 switch'>
						<input
							type='checkbox'
							defaultChecked
							onClick={() => setLightTheme(!lightTheme)}
						/>
						<span
							className={`slider round ${lightTheme ?
								'bg-slate-800 before:bg-white light' :
								'bg-white before:bg-slate-800 dark'}`}>
						</span>
					</label>
				</ScrollAnimation>

				{/* ------------- mobile menu ------------- */}
				<ScrollAnimation className='navAnim md:hidden'>
					<div className='hamburger-menu mr-8' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						<div className={
							mobileMenuOpen && lightTheme
								? 'bar-top-changed bg-black'
								: mobileMenuOpen && !lightTheme
									? 'bar-top-changed bg-white'
									: !mobileMenuOpen && lightTheme
										? 'bar-top bg-black'
										: !mobileMenuOpen && !lightTheme
										&& 'bar-top bg-white'
						}></div>
						<div className={
							mobileMenuOpen && lightTheme
								? 'bar-middle-changed bg-black'
								: mobileMenuOpen && !lightTheme
									? 'bar-middle-changed bg-white'
									: !mobileMenuOpen && lightTheme
										? 'bar-middle bg-black'
										: !mobileMenuOpen && !lightTheme
										&& 'bar-middle bg-white'
						}></div>
						<div className={
							mobileMenuOpen && lightTheme
								? 'bar-bottom-changed bg-black'
								: mobileMenuOpen && !lightTheme
									? 'bar-bottom-changed bg-white'
									: !mobileMenuOpen && lightTheme
										? 'bar-bottom bg-black'
										: !mobileMenuOpen && !lightTheme
										&& 'bar-bottom bg-white'
						}></div>
					</div>
				</ScrollAnimation>
			</nav>

			<div className={`${mobileMenuOpen
				? `block duration-700 md:invisible`
				: 'block duration-700 -translate-y-full md:invisible'}
					`}>
				<div className={`text-center md:hidden block ${lightTheme ? 'shadow-sm bg-white text-light-black' : 'border-b  bg-slate-800 text-white'}`}>

					{navLinks.map(({ navLinkId, scrollToId }, idx) => (
						<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} mobileMenuOpen={mobileMenuOpen} />
					))}

					<label className={`switch mb-6 mt-2
				${!mobileMenuOpen ? 'opacity-0 duration-500' : 'opacity-100 duration-500'}
				`}>
						<input
							type='checkbox'
							defaultChecked
							onClick={() => setLightTheme(!lightTheme)}
						/>
						<span
							className={`slider round ${lightTheme ?
								'bg-slate-800 before:bg-white light' :
								'bg-white before:bg-slate-800 dark'}`}>
						</span>
					</label>

				</div>
			</div>


			{/* ------------------------------------------------ */}

		</nav >
	);
};

export default Nav;