import { PhoneIcon } from "@heroicons/react/24/solid";
import React from 'react';

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
}

const ButtonPhone: React.FC<ButtonPhoneProps> = ({ value = '0631420045', bgColor = "orange", textColor = "text" }) => {
    const bgClass = bgColor === "orange" ? "bg-clear" : "bg-secondary"; // Remplacez 'bg-blue-500' par la classe réelle pour d'autres couleurs
    const textClass = textColor === "text" ? "text-white" : "text-primary"; // Remplacez 'text-black' par la classe réelle pour d'autres couleurs

    return (
        <a href={`tel:${value}`} className={`py-3 lg:px-5 px-3 rounded-full lg:rounded-lg ${bgClass} ${textClass} flex items-center hover:transition-all hover:duration-100 hover:ease-in-out hover:shadow-lg`}>
            <PhoneIcon className="h-5 w-5 inline-block lg:mr-2" />
            <div className='lg:flex hidden'>
                {value}
            </div>
        </a>
    );
};

export default ButtonPhone;