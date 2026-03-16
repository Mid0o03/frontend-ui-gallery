import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login');
            } else {
                setUser(session.user);
            }
            setLoading(false);
        };
        checkUser();
    }, [navigate]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin size-10 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.user_metadata?.first_name || 'User'}!</h1>
                        <p className="text-gray-500">Here's what's happening with your projects today.</p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="px-6 py-2.5 bg-white border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">logout</span>
                        Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Stat Card 1 */}
                    <div className="p-8 rounded-[2.5rem] bg-primary text-white shadow-xl shadow-primary/20 flex flex-col justify-between group h-64">
                        <div>
                            <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">Total Revenue</p>
                            <h2 className="text-4xl font-bold tracking-tighter">$12,450</h2>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold">
                            <span className="bg-white/20 px-2 py-1 rounded-lg">+12.5%</span>
                            <span className="opacity-60">from last month</span>
                        </div>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col justify-between h-64">
                        <div>
                            <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Active Users</p>
                            <h2 className="text-4xl font-bold tracking-tighter text-gray-900">1,284</h2>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-green-500">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span>+5.2% trend</span>
                        </div>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col justify-between h-64">
                        <div>
                            <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Growth Rate</p>
                            <h2 className="text-4xl font-bold tracking-tighter text-gray-900">18.2%</h2>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-500">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                            <span>Accelerating</span>
                        </div>
                    </div>

                    {/* Quick Upgrade/Referral Card */}
                    <div className="p-8 rounded-[2.5rem] bg-gray-900 text-white shadow-xl flex flex-col justify-between h-64">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">Get unlimited projects and advanced analytics.</p>
                        </div>
                        <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold text-xs hover:bg-gray-100 transition-all">
                            Upgrade Now
                        </button>
                    </div>

                    {/* Full Width Activity/Data Box */}
                    <div className="md:col-span-4 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold">Recent Activity</h3>
                            <button className="text-sm font-bold text-primary hover:underline">View all</button>
                        </div>
                        <div className="space-y-6">
                            {[
                                { user: 'Sarah K.', action: 'created a new project', time: '2 mins ago', icon: 'add_circle' },
                                { user: 'Mike R.', action: 'upgraded to Business', time: '1 hour ago', icon: 'stars' },
                                { user: 'Team Alpha', action: 'added 5 members', time: '3 hours ago', icon: 'group' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{item.user} <span className="font-medium text-gray-500">{item.action}</span></p>
                                            <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
