import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../config/content';

export const ProductDetail: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [openSection, setOpenSection] = useState<string | null>('description');

    // For demo purposes, we'll use the first product or a placeholder
    const product = content.products[0];

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="bg-[#FDFBF6] min-h-screen text-[#333333]">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">

                {/* Breadcrumbs */}
                <div className="flex gap-2 text-sm text-[#555555] mb-8">
                    <Link to="/" className="hover:text-[#2E5936] cursor-pointer">{content.productDetail.breadcrumbs.home}</Link> /
                    <Link to="/shop" className="hover:text-[#2E5936] cursor-pointer">{content.productDetail.breadcrumbs.shop}</Link> /
                    <span className="font-medium text-[#333333]">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Images */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-sm"
                            style={{ backgroundImage: `url('${product.image}')` }}
                        />
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                product.image,
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuCV-CD_FvrboF6h-0iLZ_2P6MHEZnlyJJPYqMgTb3gD0py5aUgpkQPV2H8KrwC_9XGjIOHm8Gys7LHaODk-q1qILgcaAgcITayUhLPyOWraL9jNCVWPV3jatHzunSjGjt73LsCzH5HmEH4uiCszOTm270u2Cb9KxpZ5O0HkQstTQFRzmZJJHrZPcpUqVpNg6eEAncQ1Zw6r3yLQ5M76yFy_f9tngMGLDlJI-YB6mxTRaFxX8uxAxj_ZJ3Xv2TlZuuttjhRuGI5Yk9Bx',
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuCtY-hQ-TEnWnDZKBFfTF8ueKR-aqm_FgCxNdWoxNNc-pCTKaDCZ7nOsycP2xyLsS4zuczi6u67JMyG7DMkTtjLafjdPSNCHTbxLKJ7fwBZBm5cXoQPw99D_ozO8_WXPdV3m3XJizyxJfwLTZ8X-lCacFgHWeCS3hkFeLqwoyiu50pUYJjjPKbag9_y7K8GeKjC0hjjo3k_ujaXgy0Dyyxi0nXWApWwXDhOe8CTTrdPpzlNgS00o3LYba40mjJrW-7E77z5y2i3c1i1',
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IAJWBG6OvH3I63k95wLFoOrzvmKkoA0GmPbHVmR-_qWW_4syvpulJHPPInnXyOvr2OgbBkjvu4rOUruoLw8Mzgwi7XelKbeH6Gq-qWYuogO16E-6Hf5gx9f4BH_qY82MtFNqilRWr95kutAHIaaBna0WM6fDiHuL5mgbB8mFjBp-RBs9XuR6pj75OqFmw6RKSvSOYyuMnqse4FrX4Vf54jtjHM8c2jUKcsoZxMP_B2eZJxSEdcaAdqgaQBjgZ8s7nh7pdDP3Dwqx'
                            ].map((url, idx) => (
                                <div
                                    key={idx}
                                    className="w-full aspect-square rounded-lg bg-cover bg-center border-2 border-transparent hover:border-[#2E5936] transition-all cursor-pointer"
                                    style={{ backgroundImage: `url('${url}')` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#333333]">{product.name}</h1>
                        <p className="text-lg text-[#555555] mb-6">{product.tagline || 'An exceptionally smooth, vibrant green tea for traditional preparation.'}</p>

                        <div className="flex items-center gap-2 mb-6 text-[#2E5936]">
                            <div className="flex text-xl">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill">star</span>)}
                            </div>
                            <span className="text-sm underline cursor-pointer">({content.productDetail.reviewSummary.countText})</span>
                        </div>

                        <p className="text-3xl font-bold mb-8">{product.price} USD</p>

                        <div className="flex items-center gap-6 mb-8">
                            <label className="font-medium">Quantity</label>
                            <div className="flex items-center border border-[#D1C7B8] rounded-full px-2">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-[#2E5936]"><span className="material-symbols-outlined">remove</span></button>
                                <input readOnly value={quantity} className="w-12 text-center border-0 bg-transparent focus:ring-0 p-0 font-medium" />
                                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-[#2E5936]"><span className="material-symbols-outlined">add</span></button>
                            </div>
                        </div>

                        <button className="w-full h-14 bg-[#2E5936] text-white font-bold rounded-full text-lg hover:bg-[#23452a] transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">add_shopping_cart</span>
                            Add to Cart
                        </button>

                        <div className="flex gap-6 mt-8 text-sm text-[#555555]">
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#2E5936]">spa</span> Organic</div>
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#2E5936]">local_florist</span> Sustainably Sourced</div>
                        </div>

                        {/* Accordions */}
                        <div className="mt-12 border-t border-[#D1C7B8]/40 pt-6 space-y-4">
                            {Object.entries(content.productDetail.sections).map(([id, section]) => (
                                <div key={id} className="border-b border-[#D1C7B8]/40 pb-4">
                                    <button
                                        onClick={() => toggleSection(id)}
                                        className="w-full flex justify-between items-center text-lg font-bold py-2"
                                    >
                                        {section.title}
                                        <span className={`material-symbols-outlined transition-transform duration-300 ${openSection === id ? 'rotate-180' : ''}`}>expand_more</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openSection === id ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                                        <p className="text-[#555555] leading-relaxed pb-4">{section.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-24 pt-12 border-t border-[#D1C7B8]/40">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">{content.productDetail.reviewsTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#2E5936]/5 p-8 rounded-2xl">
                        {/* Summary */}
                        <div className="flex items-center gap-8 border-r border-[#D1C7B8]/20 pr-8">
                            <div className="text-center">
                                <div className="text-6xl font-black text-[#2E5936]">{content.productDetail.reviewSummary.rating}</div>
                                <div className="flex justify-center text-[#2E5936] my-2">
                                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill text-sm">star</span>)}
                                </div>
                                <div className="text-sm text-[#555555]">{content.productDetail.reviewSummary.countText}</div>
                            </div>
                            <div className="flex-1 space-y-2">
                                {[
                                    { s: 5, p: '89%' }, { s: 4, p: '8%' }, { s: 3, p: '2%' }, { s: 2, p: '1%' }, { s: 1, p: '0%' }
                                ].map((row) => (
                                    <div key={row.s} className="flex items-center gap-3 text-sm">
                                        <span className="w-3">{row.s}</span>
                                        <div className="flex-1 h-2 bg-[#D1C7B8]/30 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#2E5936]" style={{ width: row.p }} />
                                        </div>
                                        <span className="w-8 text-right text-[#555555]">{row.p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                            {content.productDetail.reviews.map((review, i) => (
                                <div key={i} className="pb-6 border-b border-[#D1C7B8]/20 last:border-0">
                                    <div className="flex text-[#2E5936] text-sm mb-2">
                                        {[...Array(review.stars)].map((_, idx) => <span key={idx} className="material-symbols-outlined fill text-sm">star</span>)}
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">{review.title}</h4>
                                    <div className="text-xs text-[#555555] mb-2">{review.name} on {review.date}</div>
                                    <p className="text-sm leading-relaxed">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};