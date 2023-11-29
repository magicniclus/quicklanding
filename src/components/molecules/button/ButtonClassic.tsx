import React from 'react';

interface ButtonClassicProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
    type?: "submit" | "button" | "reset" | undefined;
    href?: string;
}

const ButtonClassic : React.FC<ButtonClassicProps> = ({ value = 'Envoyer', bgColor = "secondary", textColor = "white", href }) => {
        const bgClass = bgColor === "secondary" ? "bg-secondary" : `bg-${bgColor}`; // Remplacez 'bg-primary' par la classe réelle
         const textClass = textColor === "white" ? "text-white" : "text-primary"; // Remplacez 'text-black' par la classe réelle
    return (
        <a href={href} className={`py-3 lg:px-5 px-3 rounded-lg ${bgClass} ${textClass} flex mt-10 min-w-[150px] justify-center items-center hover:transition-all hover:duration-100 hover:ease-in-out opacity-100 hover:shadow-lg`}>
            <div className='flex'>
                {value}
            </div>
        </a>
    );
};

export default ButtonClassic;