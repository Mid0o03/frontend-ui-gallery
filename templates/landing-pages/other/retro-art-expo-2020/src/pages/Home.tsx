
import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SectionCard from '../../components/SectionCard';
import FeaturedSection from '../../components/FeaturedSection';
import FooterMarquee from '../../components/FooterMarquee';
import ColorBar from '../../components/ColorBar';
import ArtGenerator from '../../components/ArtGenerator';

export const Home: React.FC = () => {
    const [showGenerator, setShowGenerator] = useState(false);

    return (
        <div className="flex flex-col items-center p-4 md:p-10 font-body">
            {/* Header Container */}
            <Header />

            {/* Main Content Area */}
            <div className="w-full max-w-7xl grid grid-cols-12 gap-6 mt-6">
                {/* Left Sidebar */}
                <Sidebar text="ABSTRACT ART 2020" orientation="left" />

                {/* Middle Content */}
                <main className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <SectionCard
                        title="SONIC WAVES"
                        description="Visualizing sound through 8-bit aesthetic and analog noise."
                        level="01"
                        color="bg-retro-pink"
                        icon="radio"
                        imageUrl="https://picsum.photos/id/10/600/400"
                    />

                    <SectionCard
                        title="GAME OVER?"
                        description="Exploring the intersection of play and permanence in digital media."
                        level="02"
                        color="bg-retro-teal"
                        icon="videogame_asset"
                        imageUrl="https://picsum.photos/id/20/600/400"
                        pressStart
                    />

                    <div className="md:col-span-2">
                        <FeaturedSection />
                    </div>

                    <SectionCard
                        title="URBAN FLOW"
                        description="Motion captured in static graphics. The art of street culture."
                        color="bg-retro-yellow"
                        imageUrl="https://picsum.photos/id/30/600/600"
                        square
                    />

                    <div className="border-[6px] border-black bg-white p-8 flex flex-col items-center justify-center text-center pixel-shadow">
                        <div className="border-4 border-black p-4 bg-white mb-6">
                            <div className="w-32 h-32 bg-black flex items-center justify-center">
                                <span className="material-icons text-white text-7xl">qr_code_2</span>
                            </div>
                        </div>
                        <h3 className="font-heading text-xl mb-2">JOIN THE UNDERGROUND</h3>
                        <p className="font-bold text-xs uppercase mb-6 text-gray-600">Limited to first 100 users. Early access granted.</p>
                        <div className="w-full bg-retro-pink border-4 border-black py-2 px-4 font-pixel text-[10px] text-black">
                            MEMBER ID: #8802-A
                        </div>
                    </div>

                    {/* Interactive Feature: AI Art Generator */}
                    <div className="md:col-span-2 mt-8">
                        <button
                            onClick={() => setShowGenerator(!showGenerator)}
                            className="w-full bg-retro-black text-retro-white py-4 font-pixel text-sm border-4 border-black hover:bg-white hover:text-black transition-colors pixel-shadow"
                        >
                            {showGenerator ? 'CLOSE EXPERIMENT' : 'ENTER ART LAB (GENAI)'}
                        </button>
                        {showGenerator && <ArtGenerator />}
                    </div>
                </main>

                {/* Right Sidebar */}
                <Sidebar text="LIMITED TIME 2020" orientation="right" />
            </div>

            {/* Footer Marquee */}
            <FooterMarquee />

            {/* Aesthetic Color Blocks */}
            <ColorBar />
        </div>
    );
};
