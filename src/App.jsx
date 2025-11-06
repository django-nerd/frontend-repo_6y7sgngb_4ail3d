import React from 'react';
import HeroSection from './components/HeroSection';
import StoryScroller from './components/StoryScroller';
import POIExplorer from './components/POIExplorer';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white antialiased">
      <HeroSection />
      <StoryScroller />
      <POIExplorer />
      <FooterCTA />
    </div>
  );
}

export default App;
