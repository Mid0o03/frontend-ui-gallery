
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Quiz from '../../components/Quiz';
import Benefits from '../../components/Benefits';
import ResultsView from '../../components/ResultsView';

export const Home: React.FC = () => {
    const [view, setView] = useState<'landing' | 'quiz' | 'results'>('landing');
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const startQuiz = () => {
        setView('quiz');
        // Scroll to quiz section after a tiny delay to allow render
        setTimeout(() => {
            document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleQuizComplete = (userAnswers: Record<number, string>) => {
        setAnswers(userAnswers);
        setView('results');
        // Scroll back to top to show results naturally or result section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light selection:bg-primary selection:text-white">
            <Header />

            <main className="flex-grow">
                {view === 'landing' && (
                    <>
                        <Hero onStart={startQuiz} />
                        <Benefits />
                    </>
                )}

                {view === 'quiz' && (
                    <Quiz onComplete={handleQuizComplete} />
                )}

                {view === 'results' && (
                    <ResultsView answers={answers} />
                )}
            </main>

            <Footer />
        </div>
    );
};
