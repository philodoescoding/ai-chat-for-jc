'use client';

// App.js
import React from 'react';
import Link from 'next/link';

import TixaeAgent from './components/Tixae';

function Home() {
	return (
		<div className='App'>
			<TixaeAgent />
			<Navigation />
			<Hero />
			<ResearchInterests />
			<Publications />
			<Contact />
			<Footer />
		</div>
	);
}

const Navigation = () => (
	<nav className='navbar'>
		<div className='nav-container'>
			<h1 className='logo'>AI Research Lab</h1>
			<div className='nav-links'>
				<Link href='research'>Research</Link>
				<Link href='publications'>Publications</Link>
				<Link href='contact'>Contact</Link>
			</div>
		</div>
	</nav>
);

const Hero = () => (
	<section className='hero'>
		<div className='hero-content'>
			<h1>Advancing Artificial Intelligence Research</h1>
			<p>Exploring the frontiers of machine learning and AI applications</p>
<p>By: Jayden Strausbaugh</p>
		</div>
	</section>
);

const ResearchInterests = () => {
	const interests = [
		{
			title: 'Deep Learning',
			description: 'Developing novel neural architectures...',
		},
		{ title: 'NLP', description: 'Advanced language modeling techniques...' },
		{
			title: 'Computer Vision',
			description: 'Image recognition and scene understanding...',
		},
	];

	return (
		<section id='research' className='section'>
			<h2>Research Interests</h2>
			<div className='research-grid'>
				{interests.map((item, index) => (
					<div key={index} className='research-card'>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const Publications = () => {
	const publications = [
		{ title: 'Paper Title 1', authors: 'Author et al.', journal: 'Nature AI' },
		{ title: 'Paper Title 2', authors: 'Author et al.', journal: 'NeurIPS' },
	];

	return (
		<section id='publications' className='section dark'>
			<h2>Recent Publications</h2>
			<div className='publications-list'>
				{publications.map((pub, index) => (
					<div key={index} className='publication-item'>
						<h3>{pub.title}</h3>
						<p>{pub.authors}</p>
						<p className='journal'>{pub.journal}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const Contact = () => {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log(formData);
	};

	return (
		<section id='contact' className='section'>
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit} className='contact-form'>
				<input
					type='text'
					placeholder='Name'
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<input
					type='email'
					placeholder='Email'
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<textarea
					placeholder='Message'
					value={formData.message}
					onChange={(e) =>
						setFormData({ ...formData, message: e.target.value })
					}
				/>
				<button type='submit'>Send Message</button>
			</form>
		</section>
	);
};

const Footer = () => (
	<footer className='footer'>
		<p>© 2023 AI Research Lab. All rights reserved.</p>
	</footer>
);

export default Home;
