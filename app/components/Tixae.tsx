'use client';

import React, { useEffect } from 'react';

const TixaeAgent = () => {
	useEffect(() => {
		// Create the script element for TIXAE Agents widget
		const script = document.createElement('script');
		script.src = 'https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js';
		script.defer = true;
		document.body.appendChild(script);

		// Set up the configuration for the widget
		window.VG_CONFIG = {
			ID: '0rl5u2nlq47rof2r', // Your agent ID
			region: 'na', // Your account region
			render: 'bottom-right', // Can be 'full-width' or 'bottom-left' or 'bottom-right'
			stylesheets: [
				'https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css',
				// Add custom stylesheets here
			],
		};

		// Cleanup the script on component unmount
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div>
			<div style={{ width: 0, height: 0 }} id='VG_OVERLAY_CONTAINER'>
				{/* The TIXAE widget will render here */}
			</div>
		</div>
	);
};

export default TixaeAgent;
