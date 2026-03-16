
import React, { useState, useCallback, useMemo } from 'react';
import Sidebar from '../../components/Sidebar';
import DashboardStats from '../../components/DashboardStats';
import ImageCard from '../../components/ImageCard';
import { DashboardTab, AppState, AnalysisResult } from '../../types';
import { analyzeHTMLContent } from '../../services/geminiService';
import { Loader2, Send, Database, AlertTriangle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const Home: React.FC = () => {
    const [state, setState] = useState<AppState>({
        currentTab: DashboardTab.OVERVIEW,
        isAnalyzing: false,
        history: [],
        lastResult: null
    });

    const [htmlInput, setHtmlInput] = useState('');

    const handleTabChange = (tab: DashboardTab) => {
        setState(prev => ({ ...prev, currentTab: tab }));
    };

    const handleAnalyze = async () => {
        if (!htmlInput.trim()) return;

        setState(prev => ({ ...prev, isAnalyzing: true }));
        try {
            const result = await analyzeHTMLContent(htmlInput);
            setState(prev => ({
                ...prev,
                isAnalyzing: false,
                lastResult: result,
                history: [result, ...prev.history].slice(0, 10)
            }));
        } catch (error) {
            console.error(error);
            setState(prev => ({ ...prev, isAnalyzing: false }));
            alert("Failed to analyze content. Please check your API key or input.");
        }
    };

    const chartData = useMemo(() => {
        if (!state.lastResult) return [];
        const categories: Record<string, number> = {};
        state.lastResult.images.forEach(img => {
            const cat = img.category || 'unknown';
            categories[cat] = (categories[cat] || 0) + 1;
        });
        return Object.entries(categories).map(([name, count]) => ({ name, count }));
    }, [state.lastResult]);

    const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#8b5cf6'];

    const renderOverview = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Workspace Insights</h1>
                    <p className="text-slate-500 mt-1">Real-time analysis of your digital assets.</p>
                </div>
                <button
                    onClick={() => handleTabChange(DashboardTab.PROCESSOR)}
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                >
                    <Send className="w-4 h-4" />
                    <span>Process New HTML</span>
                </button>
            </div>

            <DashboardStats
                totalImages={state.history.reduce((acc, h) => acc + h.images.length, 0)}
                totalHTMLProcessed={state.history.length}
                avgConfidence={0.92}
                issuesDetected={state.lastResult?.recommendations.length || 0}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-indigo-500" />
                        <span>Asset Distribution</span>
                    </h3>
                    <div className="h-[300px] w-full">
                        {chartData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={40}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-400 italic">
                                No data available. Process an HTML snippet to see insights.
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        <span>AI Recommendations</span>
                    </h3>
                    <div className="space-y-4">
                        {state.lastResult?.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-700 leading-relaxed">{rec}</p>
                            </div>
                        )) || (
                                <p className="text-sm text-slate-400 italic">Run an analysis to see optimization suggestions.</p>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProcessor = () => (
        <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-900">HTML Image Extractor</h1>
                <p className="text-slate-500 mt-2">Paste your HTML source code to identify and optimize all linked visual assets.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="mb-6">
                    <label htmlFor="html-input" className="block text-sm font-semibold text-slate-700 mb-2">Source HTML Code</label>
                    <textarea
                        id="html-input"
                        rows={10}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all outline-none font-mono text-sm resize-none bg-slate-50"
                        placeholder="<html><body><img src='...' /></body></html>"
                        value={htmlInput}
                        onChange={(e) => setHtmlInput(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={state.isAnalyzing || !htmlInput.trim()}
                    className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
                >
                    {state.isAnalyzing ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Analyzing Visuals...</span>
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-6 h-6" />
                            <span>Process Assets with Gemini AI</span>
                        </>
                    )}
                </button>
            </div>

            {state.lastResult && (
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="bg-emerald-500 p-2 rounded-full text-white">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-emerald-900 font-bold">Analysis Complete</p>
                            <p className="text-emerald-700 text-sm">Extracted {state.lastResult.images.length} assets and generated semantic data.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleTabChange(DashboardTab.GALLERY)}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
                    >
                        View Gallery
                    </button>
                </div>
            )}
        </div>
    );

    const renderGallery = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Asset Gallery</h1>
                    <p className="text-slate-500 mt-1">Categorized view of all identified image links.</p>
                </div>
                <div className="flex space-x-2">
                    <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-100">
                        <option>All Categories</option>
                        <option>Logos</option>
                        <option>Icons</option>
                        <option>Hero Images</option>
                    </select>
                </div>
            </div>

            {!state.lastResult || state.lastResult.images.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-20 text-center">
                    <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ImageIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">No assets to display</h3>
                    <p className="text-slate-500 mt-2 max-w-sm mx-auto">Please process an HTML snippet in the Processor tab to populate your gallery.</p>
                    <button
                        onClick={() => handleTabChange(DashboardTab.PROCESSOR)}
                        className="mt-6 text-indigo-600 font-bold hover:underline"
                    >
                        Go to Processor &rarr;
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {state.lastResult.images.map((img) => (
                        <ImageCard key={img.id} image={img} />
                    ))}
                </div>
            )}
        </div>
    );

    const renderContent = () => {
        switch (state.currentTab) {
            case DashboardTab.OVERVIEW: return renderOverview();
            case DashboardTab.PROCESSOR: return renderProcessor();
            case DashboardTab.GALLERY: return renderGallery();
            case DashboardTab.SETTINGS: return (
                <div className="max-w-2xl bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h1 className="text-2xl font-bold text-slate-900 mb-6">Settings</h1>
                    <div className="space-y-6">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-1">API Integration</h4>
                            <p className="text-sm text-slate-500">Currently using Gemini 3 Flash. Ensure your API_KEY environment variable is configured for production use.</p>
                        </div>
                        <div className="flex items-center justify-between py-4 border-b border-slate-100">
                            <div>
                                <p className="font-semibold text-slate-900">Automatic Alt Generation</p>
                                <p className="text-xs text-slate-500">Automatically suggest accessible descriptions using AI.</p>
                            </div>
                            <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-semibold text-slate-900">Strict Image Validation</p>
                                <p className="text-xs text-slate-500">Check if URLs return valid image mime types.</p>
                            </div>
                            <div className="w-12 h-6 bg-slate-300 rounded-full relative">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50">
            <Sidebar currentTab={state.currentTab} onTabChange={handleTabChange} />
            <main className="flex-1 ml-64 p-10 min-w-0">
                <div className="max-w-7xl mx-auto">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};
