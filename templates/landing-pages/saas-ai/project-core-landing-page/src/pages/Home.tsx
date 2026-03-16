
import React from 'react';
import Header from '../../components/Header';
import InstallationSection from '../../components/InstallationSection';
import DocumentationSection from '../../components/DocumentationSection';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">
                <InstallationSection />
                <DocumentationSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};
