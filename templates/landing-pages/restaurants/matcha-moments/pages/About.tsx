import React from 'react';
import { content } from '../config/content';

export const About: React.FC = () => {
    return (
        <div className="bg-[#F9F9F7] min-h-screen text-[#333333]">

            {/* Hero */}
            <div className="w-full px-4 sm:px-8 py-12 sm:py-20 lg:py-24 max-w-7xl mx-auto">
                <div
                    className="relative min-h-[500px] rounded-2xl flex flex-col items-center justify-center text-center p-8 bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("${content.aboutPage.heroImage}")` }}
                >
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">{content.aboutPage.heroTitle}</h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                            {content.aboutPage.heroSubtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Philosophy */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102218]">{content.aboutPage.philosophyTitle}</h2>
                    <p className="text-[#555555] text-lg leading-relaxed">
                        {content.aboutPage.philosophyDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {content.aboutPage.philosophyCards.map((card, i) => (
                        <div key={i} className="bg-white border border-[#EAE8E4] p-8 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[#3A5B3D]">
                                <span className="material-symbols-outlined text-5xl">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#102218]">{card.title}</h3>
                            <p className="text-[#555555] text-sm leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Journey */}
            <div className="bg-[#3A5B3D]/5 py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#102218]">{content.aboutPage.journeyTitle}</h2>
                        <p className="text-[#555555]">{content.aboutPage.journeySubtitle}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        <div className="col-span-2 row-span-2 rounded-xl bg-cover bg-center shadow-md" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqJlluMAKdm_T3sm-Hhsp-lSBstmjv2oh3JMudZG7hZTJvfvWqTiaRyk2Wl00w0Ej1mHVYMuteeuXjaiWDeL6w1vFmkphNPhGrRRUoFjeaSvw9Ycf2cfUSRQxB5xbVvpiWJvfT3IoTKJ0NY4M6zeDc1f0fbIWyM0cDnYzsewvNtMpac5D236fb8VlCl-c20aX4w8QxzPhgxec2TgscUQeW0EG0-bqyma9ILgOd0GkokEOrQ5HP-UkaSZUM-YLcKe4JTqEUtvxIVRlW")` }} />
                        <div className="rounded-xl bg-cover bg-center shadow-md" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuATSmyh459QhAdNnKaRF3aXRNwcBmU3rN1oXUwImV_tR0riU7EkYuqTXeDATMKMZFrVR0giVHqaG_gZWx87PRGA2k0J4MV3EcfPdjkQbnKeg1Itauu2dLrLgPSIVoUC5pDZKZ3pejrWsbGnSCI0zgmYycsel9PzLB_9amPd4TvD11DuYMtmSI350Tb-An1TnVJPtG0994Vi-NvFvXChCz01ubFToTmI39RMT_PplCEbxTIRWnYv8cBpUjccn92Ij2TpPvtit03RgNW2")` }} />
                        <div className="rounded-xl bg-cover bg-center shadow-md" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSPfFGduFd4UVUkZ5zDjJuZGmWnhMmIIh0RqfST4cT-Y2ET1xqpudW8fML8y480yndsz6SjjHnQc6rFJtDRK4bNIXEJ3VKvlKtRxUf8Mm07HKvExbCamRylDkMB5VVjmWQQmCorpYTI1RKsAxPfHRanRPMLV39kVScIbeJIiTYv_5AEHl6JhhB8BYRVCcJn-spuoqwEc1CxHYtu8Q6kubp4s5Iuz1qutkJrMC2w9ACj6On8bU4c0ry_XZwdJqRBBKUeTwdF9KWkZ2R")` }} />
                        <div className="col-span-2 rounded-xl bg-cover bg-center shadow-md" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3gpm9JVWYklEICDLuFUsgUSMHh5t10UvoWfPGCxwxg1VmeUNffbSmXrEzZkl9mVt5JqFWVdeZPH_dMtWF7rpXLWbrwkdrSURyaquOAI1wZm6_fD21vyQmV8TcFBA33p1P3OD2Uq7b4F4QvIVuKI9d4bjgTx3BhDXi8dvuDG-rLesprxTFUKynePWe6JrQqJfJg-4dHnnqpP4C7dKCAIAWTfiH-uz61RkEUl2jF2cZDkebz23neCZYvOOinAGQs6XKe3bzuciVMT9A")` }} />
                    </div>
                </div>
            </div>

            {/* Founder */}
            <div className="max-w-5xl mx-auto px-4 sm:px-8 py-24">
                <div className="bg-white border border-[#EAE8E4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-sm">
                    <div className="w-64 h-64 flex-shrink-0">
                        <img src={content.aboutPage.founderImage} className="w-full h-full object-cover rounded-full shadow-md" alt="Founder" />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 text-[#102218]">{content.aboutPage.founderTitle}</h2>
                        <p className="text-[#555555] leading-relaxed mb-4 italic">
                            {content.aboutPage.founderQuote}
                        </p>
                        <p className="font-bold text-[#3A5B3D] text-lg">{content.aboutPage.founderName}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};