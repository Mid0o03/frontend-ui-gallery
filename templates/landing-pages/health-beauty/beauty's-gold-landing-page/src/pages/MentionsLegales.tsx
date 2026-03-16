import React from 'react';

const MentionsLegales: React.FC = () => {
    return (
        <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-white min-h-screen">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-primary">Mentions Légales</h1>

            <div className="space-y-10 text-zinc-400 font-light leading-relaxed">
                <section>
                    <h2 className="text-xl text-white font-bold uppercase mb-4 tracking-widest">1. Édition du site</h2>
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>Beauty's Gold</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li><strong>Propriétaire du site :</strong> Beauty's Gold SAS - Contact : contact@beautysgold.fr - Adresse : 12 Avenue de la Gare, 91430 Igny.</li>
                        <li><strong>Identification de l'entreprise :</strong> SAS Beauty's Gold au capital social de 10 000€ - SIREN : 123456789 - RCS ou RM : Evry.</li>
                        <li><strong>Directeur de la publication :</strong> Contact : contact@beautysgold.fr.</li>
                        <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl text-white font-bold uppercase mb-4 tracking-widest">2. Propriété intellectuelle</h2>
                    <p>
                        <strong>Beauty's Gold</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p className="mt-4">
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>Beauty's Gold</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-white font-bold uppercase mb-4 tracking-widest">3. Limitations de responsabilité</h2>
                    <p>
                        <strong>Beauty's Gold</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.
                    </p>
                    <p className="mt-4">
                        <strong>Beauty's Gold</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur le site.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;
