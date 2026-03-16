
import React from 'react';

const features = [
  {
    title: "L'Atmosphère",
    description: "Un écrin de bois brûlé et d'ombres portées, conçu pour éveiller vos sens au-delà de la vue.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoez_KOF4GqTIRwFKug84OKcDuA4NoeRoa6zG6z4vw5tm_4m52RFr0u7xzZE4_iW-PZib_eJ_O-PHwcb8UQ76cPZUJ5lJE34LU4h3JxUlD63xtm4K7TEVZT2bHBuRE2dQI6f_1xdfRd1fZrtYZVCAs3pwODT-5qqjErF3MaZPc6OerxBMA1EUiPBdbopAjaXJgYFu1ILOPZeaqnjQA9zuSIlUdr5aCpsj8ic2-DTuqraIDwZz5z8olmkHEaWp0SjURrTdlOWd_0_xw",
    delay: ""
  },
  {
    title: "Le Geste",
    description: "Une précision millimétrée héritée des maîtres, au service d'une créativité sans limites.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGmgPMIyiyIHmRMxOxSapVtSgTo7elbK4xyN84OMWC2em2XcNGNNErAGSa6oIXBaA7vb1bK-qqAhUdGiYBphgEMIUn_-b8JP1dMXi6E_AsbONTw2Y0oCR9uZwW3f9gwPGtzeew0LXw4KK7kSrgpPN7X6cl9m4rSKHECCbu0e95kRAQpBzxw27VIprSWE_9W5q4lJO1w_EQPLvAvJAzQ09PrWPf4z9r3CnobxS3Q8qft_C3Retblkd9gMnxfTWNsNghSPOfnkhgTV",
    delay: "md:mt-12"
  },
  {
    title: "Le Sake",
    description: "Une collection rare de junmai daiginjo, sélectionnés pour leur pureté cristalline.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMkxNKz7hxrb8BzEQEkrji1kT3ftYGm-wUmVSsynjQaHAh72_Mkn3dp1h5FhsUnWo3EA7cLCcJ5XZ0NbjXy29Lpna9oipDpvFUpgowpYI4OrPm1xeFZt_J4PwZmVqj1mf9YzgAfoTBG8egAdZ5s7vk-g8pY19fy6Rzj9N3oTeervSY5V394VOxzz2zCX4jp3AHaDaYt05XlJ90sJHsC5Y4kBXFoHxc9LLpCoksXGGIrtsUYNPVSOgX1_hvXYAGGQjDE7E2IeIz5Nt9",
    delay: "md:mt-24"
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="px-6 py-32 lg:px-40 bg-charcoal">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 mb-20">
          <h2 className="text-white text-4xl font-serif-jp font-extralight leading-tight">Tradition & Innovation</h2>
          <div className="h-[1px] w-24 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col gap-8 group ${feature.delay}`}>
              <div className="aspect-[4/5] bg-cedar rounded-lg overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${feature.image}")` }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-serif-jp text-2xl group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
