import React from 'react'
import CardPrimary from './components/CardPrimary';
import CardSecondary from './components/CardSecondary';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { primaryCard, secondaryCard } from './data'

function App() {
	return (
		<div className='flex font-sans text-white bg-gray-900'>
			<div className='flex flex-col min-h-screen w-80'>
				<div className='px-8 py-8'>
					<h1 className='text-xl font-semibold'>Skateboard</h1>
				</div>
				<Sidebar />
			</div>

			<div className='flex flex-col w-full pl-5 pr-14 py-7'>
				<Navbar />

				<div className='pt-10'>
					<h3 className='text-4xl font-semibold'>Discover</h3>
					<div className='flex space-x-6 py-7'>
						{primaryCard.map((card, i) => (
							<CardPrimary key={i} content={card} index={i} />
						))}
					</div>
				</div>

				<div className='pt-4'>
					<h2 className='text-2xl font-medium'>Most watched</h2>
					<div className='flex justify-between py-6'>
						{secondaryCard.map((card, i) => (
							<CardSecondary key={i} content={card} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
