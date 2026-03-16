
import React from 'react';
import Hero from '../../components/Hero';
import StatsStrip from '../../components/StatsStrip';
import CourseGrid from '../../components/CourseGrid';
import Newsletter from '../../components/Newsletter';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <StatsStrip />
            <CourseGrid />
            <Newsletter />
        </>
    );
};

export default Home;
