"use client"
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useRef } from 'react';
import ButtonPhone from '../../molecules/button/ButtonForm';
import ButtonClassic from '@/components/molecules/button/ButtonClassic';

interface Card {
    text: string;
    stars: number;
    name: string;
}

const cards: Card[] = [
    {
        text: "Travailler avec Nicolas a été une expérience révolutionnaire pour ma stratégie de communication. Grâce à son expertise en Google Ads, nous avons pu atteindre efficacement notre public cible et développer des campagnes qui ont réellement résonné avec nos clients. Nicolas comprend l'importance de la collaboration et son approche personnalisée a permis de renforcer nos relations avec des clients communs. Sa capacité à optimiser nos campagnes et à maximiser notre budget publicitaire a été un atout majeur pour notre entreprise.",
        stars: 5,
        name: "Nancy M/Agence de communication",
    },
    {
        text: "Nicolas CASTERA a joué un rôle crucial dans la croissance spectaculaire de Terabois. Depuis que nous avons commencé à travailler ensemble, nous avons triplé notre chiffre d'affaires, un résultat que je n'aurais jamais imaginé possible. Sa compréhension approfondie du marketing digital, combinée à une connaissance spécifique de l'industrie de l'isolation et de la couverture, a permis de mettre en place des stratégies sur-mesure qui ont réellement fonctionné. Je suis extrêmement reconnaissant pour son engagement et son expertise qui ont transformé notre entreprise",
        stars: 5,
        name: "Franck C/Terabois",
    },
    {
        text: "Collaborer avec Nicolas CASTERA a été une expérience exceptionnelle du début à la fin. Sa maîtrise du marketing digital et sa capacité à s'adapter à l'industrie des panneaux solaires ont grandement contribué au succès de notre entreprise. Nous avons vu une augmentation significative de notre clientèle et de notre visibilité sur le marché, grâce à ses stratégies innovantes et efficaces. Je suis plus que satisfait des résultats obtenus et je recommande vivement les services de Nicolas à toute entreprise cherchant à accroître sa présence en ligne.",
        stars: 5,
        name: "Nicolas R/Panneaux solaires",
    }
]

interface TemoignageProps {
    darkComponent?: boolean;
}

const Temoignage: React.FC<TemoignageProps> = ({ darkComponent = false }) => {
    const temoignage = useRef<HTMLFormElement>(null);

    // Définition des classes en fonction de darkComponent
    const sectionClassName = darkComponent ? 'bg-secondary text-white' : 'bg-white text-secondary';
    const cardClassName = darkComponent ? 'bg-white text-secondary' : 'bg-secondary text-white';

    return (
        <section className={`${sectionClassName} w-[100vw]`}>
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-32 py-20 flex-col justify-between items-center">
                <h2 className="text-2xl font-bold">Témoignage client</h2>
                <p className='mt-7 w-4/6 text-center'>Si vous désirez entendre un retour d'expérience direct de l'un de mes clients, n'hésitez pas à me contacter. Je vous mettrais en relation directement.</p>
                <div className='flex w-full md:flex-row flex-col justify-between mt-10'>
                    {
                        cards.map((card, index) => (
                            <div className={`${cardClassName} md:w-4/12 w-full flex flex-col items-center md:max-w-[32%] p-7 rounded-md md:mt-0 mt-7`} key={index}>
                                <p className='text-center mt-4'>{card.text}</p> 
                                <div className='flex justify-center items-center mt-4'>
                                    <StarIcon className='h-5 w-5 text-clear' />
                                    <StarIcon className='h-5 w-5 text-clear' />
                                    <StarIcon className='h-5 w-5 text-clear' />
                                    <StarIcon className='h-5 w-5 text-clear' />
                                    <StarIcon className='h-5 w-5 text-clear' />
                                </div>
                                <p className='mt-4 text-center'>{card.name}</p>
                            </div>
                        ))
                    }
                </div>
                <ButtonClassic value="En savoir plus" href="#form" bgColor={darkComponent ? "white" : "secondary"} textColor={darkComponent ? "text": "white"}/>
            </div>
        </section>
    );
};

export default Temoignage;