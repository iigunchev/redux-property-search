import React from 'react';

import SearchBar from '../components/SearchBar/SearchBar'
import PopularListings from '../components/PopularListings/PopularListings'

const LandingPage = () => {
  return (
    <main className="py-4 px-8 flex flex-col items-center">
      <div className="grid gap-4 md:grid-cols-2 py-8">
        <section className="w-100 text-left">
          <h2 className="font-bold text-4xl text-slate-800">Your property search just got serious</h2>
          <p className="mt-8 md:pr-24">We feature thousands of new properties every month, 24 hours or more before they are advertised on Rightmove or Zoopla.</p>
        </section>
        <section className="mt-8 md:mt-0">
          <SearchBar />
        </section>
      </div>
      <PopularListings />
    </main>
  )
}

  export default LandingPage