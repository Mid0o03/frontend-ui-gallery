import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white dark:bg-white/5 p-8 rounded-3xl border border-moss/10 dark:border-white/10 shadow-xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-moss dark:text-white mb-2">Welcome Back</h1>
                    <p className="text-moss/60 dark:text-white/60">Enter your details to sign in.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-moss dark:text-white mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-moss/5 dark:bg-white/5 border border-transparent focus:border-primary focus:ring-0 outline-none transition-all" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-moss dark:text-white mb-2">Password</label>
                        <input type="password" className="w-full px-4 py-3 rounded-xl bg-moss/5 dark:bg-white/5 border border-transparent focus:border-primary focus:ring-0 outline-none transition-all" placeholder="••••••••" />
                    </div>
                    <button className="w-full bg-moss dark:bg-primary text-white dark:text-background-dark font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
