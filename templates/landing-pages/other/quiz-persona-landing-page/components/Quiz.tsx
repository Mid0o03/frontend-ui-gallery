
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { Question, QuizOption } from '../types';

interface QuizProps {
  onComplete: (answers: Record<number, string>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = answers[currentQuestion.id] !== undefined;

  return (
    <section id="quiz-section" className="py-24 bg-surface-light rounded-t-[3rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {currentQuestion.title}
            </h2>
            <p className="text-text-muted-light">
              Question {currentStep + 1} sur {QUESTIONS.length}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-text-muted-light">
              <span>Progression</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-3 rounded-full bg-background-light overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`group flex flex-col items-start p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                  answers[currentQuestion.id] === option.id 
                    ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                    : 'border-background-light hover:border-primary/30 bg-surface-light'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  answers[currentQuestion.id] === option.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined !text-3xl">{option.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{option.title}</h3>
                  <p className="text-sm text-text-muted-light leading-relaxed">{option.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-background-light">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-colors ${
                currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-text-muted-light hover:bg-black/5'
              }`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Précédent</span>
            </button>
            <button
              onClick={handleNext}
              disabled={!isStepValid}
              className={`flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold text-base shadow-lg shadow-primary/20 transition-all ${
                !isStepValid ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:opacity-90 active:scale-95'
              }`}
            >
              <span>{currentStep === QUESTIONS.length - 1 ? 'Terminer' : 'Suivant'}</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
