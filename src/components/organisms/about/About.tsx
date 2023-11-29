import React from 'react';
import Ligne from "../../atoms/lign/Lign";
import { MapPinIcon } from '@heroicons/react/24/solid';

interface Card {
    title: string;
    text: string;
}

interface ImgWithTextProps {
    imgUrl: string;
    imgAlt: string;
    title: string;
    lieu: string;
    name: string;
    paragraphs: string;
    darkComponent?: boolean; // Rendre cette prop optionnelle
    cards?: Card[];
}

const About: React.FC<ImgWithTextProps> = ({imgUrl, imgAlt, title = "Qui suis-je ?", paragraphs, darkComponent=false, cards, lieu, name}) => {
    const sectionClassName = darkComponent ? 'bg-secondary text-white' : 'bg-white text-primary';
    const cardClassName = darkComponent ? 'bg-white text-primary' : 'bg-secondary text-white';
    return (
       <section className={sectionClassName + " w-[100vw]"} id="qui">
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pt-32 pt-20 md:flex-row flex-col justify-between items-center">
                <div className={`md:w-6/12 w-full ${darkComponent ? " text-white" : " text-secondary"}`}>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <div className="mt-7">
                        <Ligne />
                    </div>
                    <div className='w-full flex justify-between py-10'>
                        <p>{name}</p>
                       { lieu &&  <div className='flex'>
                            <MapPinIcon className="h-5 w-5 text-yellow" aria-hidden="true" />
                            <p className='ml-2'>{lieu}</p>
                        </div>}
                    </div>
                    <p>{paragraphs}</p>
                </div>
                <div className="md:w-6/12 w-full flex justify-center items-center md:mt-0 mt-12">
                    <img src={imgUrl} className="max-h-[500px] h-auto max-w-[300px]" alt={imgAlt} />
                </div>
            </div>
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pb-32 pb-20 md:flex-row flex-col justify-between items-center">
                {cards && cards.map((card, index) => (
                    <div className={`${cardClassName} md:w-4/12 w-full flex flex-col items-center md:max-w-[30%] min-h-[340px] p-7 rounded-md md:mt-0 mt-7`} key={index}>
                        <h3 className='text-xl font-bold mt-4'>{card.title}</h3>
                        <p className='text-center mt-4'>{card.text}</p> 
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;