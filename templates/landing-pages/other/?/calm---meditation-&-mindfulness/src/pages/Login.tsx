import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-24 min-h-[500px]">
            <div className="w-full max-w-sm p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome Back</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="hello@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="••••••••" />
                    </div>
                    <button className="w-full py-3 bg-white text-background-dark font-bold rounded-xl hover:bg-white/90 transition-colors mt-4">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
