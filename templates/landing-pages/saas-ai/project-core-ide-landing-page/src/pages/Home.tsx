
import React, { useState } from 'react';
import ActivityBar from '../../components/ActivityBar';
import SidebarExplorer from '../../components/SidebarExplorer';
import EditorHeader from '../../components/EditorHeader';
import MainHero from '../../components/MainHero';
import StatusBar from '../../components/StatusBar';

export const Home: React.FC = () => {
    const [activeActivity, setActiveActivity] = useState('files');

    return (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-editor-bg select-none">
            <div className="flex flex-1 overflow-hidden">
                {/* Left Side Bar - Activity Icons */}
                <ActivityBar
                    active={activeActivity}
                    onSelect={setActiveActivity}
                />

                {/* Explorer Panel */}
                {activeActivity === 'files' && <SidebarExplorer />}

                {/* Main Workspace */}
                <main className="flex flex-1 flex-col overflow-hidden">
                    {/* Editor Tabs & Breadcrumbs */}
                    <EditorHeader />

                    {/* Actual Page Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                        <MainHero />
                    </div>
                </main>
            </div>

            {/* Footer Status Bar */}
            <StatusBar />
        </div>
    );
};
