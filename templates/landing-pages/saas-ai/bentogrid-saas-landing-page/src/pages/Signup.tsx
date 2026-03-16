import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                },
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Supabase by default requires email confirmation.
            // We can redirect to a check-email page or just show a message.
            alert('Check your email for the confirmation link!');
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-background-light flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-8">
                        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-2xl">{branding.logo.icon}</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">{branding.logo.text}</span>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
                    <p className="text-gray-500 mt-2">Start your 14-day free trial today.</p>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-2xl border border-red-100 font-medium">
                            {error}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSignup}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-400 ml-1">Work Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-400 ml-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="pt-4">
                            <div className="flex items-start gap-3 mb-6">
                                <input type="checkbox" required className="mt-1 rounded text-primary focus:ring-primary" id="terms" />
                                <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed uppercase font-bold tracking-tighter">
                                    I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? 'Creating account...' : 'Get Started'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 flex items-center gap-4 opacity-50">
                        <hr className="flex-grow" />
                        <span className="text-xs font-bold uppercase tracking-widest">Already have an account?</span>
                        <hr className="flex-grow" />
                    </div>

                    <Link to="/login" className="mt-8 w-full flex items-center justify-center py-4 border-2 border-gray-50 rounded-2xl hover:border-gray-200 transition-all font-bold text-sm">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
