import React from 'react';

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
    disabled?: boolean;
    type?: "submit" | "button" | "reset" | undefined;
}

const ButtonForm: React.FC<ButtonPhoneProps> = ({ value = 'Envoyer', bgColor = "secondary", textColor = "white", disabled = true, type = "submit" }) => {
    const bgClass = bgColor === "secondary" ? "bg-secondary" : `bg-${bgColor}`; // Remplacez 'bg-primary' par la classe réelle
    const textClass = textColor === "white" ? "text-white" : "text-primary"; // Remplacez 'text-black' par la classe réelle

    return (
        <button type={type} disabled={disabled} className={`py-3 lg:px-5 px-3 rounded-lg ${bgClass} ${textClass} flex mt-10 min-w-[150px] justify-center items-center hover:transition-all hover:duration-100 hover:ease-in-out ${disabled ? "opacity-60" : "opacity-100 hover:shadow-lg"}`}>
            <div className='flex'>
                {value}
            </div>
        </button>
    );
};

export default ButtonForm;