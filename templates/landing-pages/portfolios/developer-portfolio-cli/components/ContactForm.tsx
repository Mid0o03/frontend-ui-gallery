import React, { useState } from 'react';
import { content } from '../config/content';

export const ContactForm: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Executing send:', { subject, message });
        alert('EXECUTE_SEND: Message packet transmitted successfully.');
        setSubject('');
        setMessage('');
    };

    return (
        <section className="mt-auto pt-4 pb-4">
            <h3 className="text-primary text-xl font-bold leading-tight tracking-wider border-b border-terminal-border pb-4 mb-2 flex items-center gap-2 font-mono">
                <span className="material-symbols-outlined">mail</span>
                {content.contact.title}
            </h3>
            <p className="text-white/50 text-sm mb-6 font-mono">{content.contact.description}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-black/40 border-b-2 border-primary/30 focus-within:border-primary transition-colors flex items-center px-4 py-3 group">
                        <span className="text-primary font-bold mr-2 whitespace-nowrap font-mono select-none">
                            user@dev:~/msg$
                        </span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none text-white w-full placeholder-white/30 focus:ring-0 p-0 font-mono text-sm md:text-base"
                            placeholder="enter_subject..."
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex-1 bg-black/40 border-b-2 border-primary/30 focus-within:border-primary transition-colors flex items-start px-4 py-3 min-h-[100px] group">
                    <span className="text-primary font-bold mr-2 mt-0.5 select-none">&gt;&gt;</span>
                    <textarea
                        className="bg-transparent border-none outline-none text-white w-full h-full placeholder-white/30 focus:ring-0 p-0 resize-none font-mono text-sm md:text-base"
                        placeholder="Type your message stream here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <div className="flex justify-end mt-2">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-terminal-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(54,226,123,0.4)]"
                    >
                        <span className="material-symbols-outlined">send</span>
                        EXECUTE_SEND
                    </button>
                </div>
            </form>
        </section>
    );
};