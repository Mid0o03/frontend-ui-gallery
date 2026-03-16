import React from 'react';
import { Template } from '../types';
import { content } from '../config/content';

const templates: Template[] = [
  {
    id: '1',
    title: 'SaaS Starter Kit',
    techStack: 'React, Tailwind, Node.js',
    price: 49,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfGuK2wc7odKWq5_IkwtP9iOY4e_RbbUC-5qK-tCDQ6bFTTRYIE3GPNOr3A6HFWXCpqKhRAS7tz-1fS56PW9CjFUP_C_Dzp_NNgeVYLCoVyestf7nie0AECLEKFx5C6N801ma4LJJIE6Zj6LibE_SP980uc4sL3z3kzG2mX1pR-TPUjIKuCCxrGlRi-vb_a2kFRKxSahI_cekVMLoKf7kjGR6xOjDikpZuGALrF_oDcHWcqJqHQ7E4GsR5GxVvEGHFXYf0pWuATP7N',
    alt: 'Data analytics dashboard template preview'
  },
  {
    id: '2',
    title: 'Portfolio Pro',
    techStack: 'Next.js, Framer Motion',
    price: 39,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEqM1y9GrMJvEYoz6snuKgSBhfyAirOJOjAaYXcXQ1lUdxz-6_ATOzp_YFkeh4SvuQoqJuy0m5Dig-ab7X9vg3zxn3ZWkkfTQGeNXKO_KMlKcj3TKZHV_ME669MileNqQdgC_8mfT6FoKjBbHK0o8yHaMIL7PXSOp1CTXQnqVrIZhKxZRt94A4ah5JKCXHeMFUif9orWPy4MdHFVP2cJfTQVSDeGYgtHQq9OD2-Y476TgT9xBRc-s8hSPH6uV8dtRIgLE6sjnYXCFX',
    alt: 'Portfolio website template minimalist design'
  },
  {
    id: '3',
    title: 'E-com Empire',
    techStack: 'Shopify Liquid, Vue.js',
    price: 79,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1DyeHBtFzVQHp4ry3j97SqzOLtgeiAU56n4F7C13T3LTRWBbGrOd45AHD2-Ykdnh25PVE2MmTcuzKoz2fvLMP9USPTsucwYH190UOp2P6kiOlONXuu-n8irHSA178Mep8l_9DSYUMfkqU1ZAga7iZS34LZKwaDTo0pK3wEUseAPq2aY71fKEh0sS3ek9kraJze3VgP8UxASiTYR87xuT5rG61nmeTid7Vk1WYC4joOn5S1AFZK7Ts4FwIIPOAxuj5dFMxY0Q7mECt',
    alt: 'E-commerce store template product grid'
  },
  {
    id: '4',
    title: 'Minimal Blog',
    techStack: 'Hugo, Tailwind CSS',
    price: 29,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWwNszJsGL3k5-jhwIlMCGJDzhb2SzDWIi35741tU5CTUS7Q1g7uN0j4tyVQSzPNCMxnTO3u7QaS1PrJpz0Xp-GCxTPdX_Jm9pp9sCFxb1QjK-l3w2gu0ZSXUM5DMf-by8oXeeSU2abAaaBAAjqPwjpxYM3XYEWQliGa4Af2OIE31NrQx6uGaQzHZvnhwHNQWpusqmstaUVPjI9XpUrNH98TbF4KpYy0BB8MqhA66QIYld4U7sxrF1NnP8oetib8Qc-KIz68Qzzrvq',
    alt: 'Blog minimalist template typography focus'
  },
  {
    id: '5',
    title: 'Admin UI Dark',
    techStack: 'Bootstrap 5, SCSS',
    price: 59,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgLIl2xeIK18U7aaBlL3pME5Zg66mgR8pI2A2Nmp46jvKZ5v6rOnhh5IdA9pNHhw0a47IzFbBgixktr8sATMc9gSlA_GV5zdYCVtFQumvkz6UmyK5KNZ1BvHwHnF3njNd2Idzd79u1em2YAa41ixscYpp_WsXeV1iMll3OCtOGg_3i3H0cGBUAux3jjWlxnyp7Y4HIRShXrBK92iZ3Taszm9Vo4SkQbTEQycfd4UToRF5cz2zb7k8rEhhLEKfzIBH71KZYGiUQp-Gt',
    alt: 'Admin dashboard dark mode ui'
  },
  {
    id: '6',
    title: 'Landing Page Kit',
    techStack: 'HTML5, Tailwind',
    price: 25,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTiyDmIGQfuW_ld0JcENbFreYkfPBGlNvy45wr2cDGnzhtjt9DmZlHaxaXoH8k2yDwcxvq4lIUkx2g_A884XEkiG8rch9BoBjVIFqvi9nBji6iaW9in3Ow0VEmvHz1nMznDXOrGTXR1OYOFpYRS6DN-jYElw1YBGQtDHUqosYvucMfcLHIFMc0Zkr1G5vt1_dEL00gDyRTAOjZbwH07vU-4G8zJfEF_mgae-aGkQnevdsFDdE6wjYrbUV-iagQa7A5iznMTTCF2DJg',
    alt: 'Landing page website wireframe sketch'
  }
];

const TemplateGallery: React.FC = () => {
  return (
    <section id="templates" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading">{content.gallery.title}</h2>
            <p className="mt-2 text-slate-text">{content.gallery.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">{content.gallery.viewAllLabel}</button>
            <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-slate-100">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${template.imageUrl}')` }}
                  aria-label={template.alt}
                ></div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-heading">{template.title}</h3>
                    <p className="text-sm text-slate-500">{template.techStack}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-bold text-primary">
                    ${template.price}
                  </span>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                    {content.gallery.buyNowLabel}
                  </button>
                  <button className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-slate-600 transition-colors hover:border-primary hover:bg-blue-50 hover:text-primary" title={content.gallery.customQuoteLabel}>
                    <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;