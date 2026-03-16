import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { branding } from '../config/branding';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Supabase Authentication: Log in with email and password
        // The session is automatically managed by the Supabase client
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Redirect to dashboard on successful login
            navigate('/dashboard');
        }
    };

    const handleSocialLogin = async (provider: 'google' | 'github') => {
        // OAuth logic: Redirects to the provider's login page
        // Ensure you have configured these providers in the Supabase Dashboard
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/dashboard`
            }
        });
        if (error) setError(error.message);
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
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-gray-500 mt-2">Log in to manage your workspace.</p>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-2xl border border-red-100 font-medium">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email Address</label>
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
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-8 flex items-center gap-4 opacity-50">
                        <hr className="flex-grow" />
                        <span className="text-xs font-bold uppercase tracking-widest">Or continue with</span>
                        <hr className="flex-grow" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-2 py-4 border-2 border-gray-50 rounded-2xl hover:border-gray-200 transition-all font-bold text-sm"
                        >
                            <span className="material-symbols-outlined text-xl">google</span> Google
                        </button>
                        <button
                            onClick={() => handleSocialLogin('github')}
                            className="flex items-center justify-center gap-2 py-4 border-2 border-gray-50 rounded-2xl hover:border-gray-200 transition-all font-bold text-sm"
                        >
                            <span className="material-symbols-outlined text-xl">terminal</span> GitHub
                        </button>
                    </div>
                </div>

                <p className="text-center mt-10 text-gray-500 text-sm">
                    Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
