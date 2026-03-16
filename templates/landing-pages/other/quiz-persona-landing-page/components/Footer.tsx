
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light border-t border-text-light/5 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-muted-light">
            © 2024 QuizMaker Inc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-text-muted-light">
            <a href="#" className="hover:text-primary"><span className="material-symbols-outlined">public</span></a>
            <a href="#" className="hover:text-primary"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
