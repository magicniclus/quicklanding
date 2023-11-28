import { PhoneIcon } from "@heroicons/react/24/solid";

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
}

const ButtonPhone: React.FC<ButtonPhoneProps> = ({ value = '0631420045', bgColor = "orange", textColor = "text" }) => {
    return (
        <a href={`tel:${value}`} className={`py-3 lg:px-5 px-3 rounded-full lg:rounded-lg bg-${bgColor} text-${textColor} flex items-center hover:transition-all hover:duration-100 hover:ease-in-out hover:shadow-lg`}>
            <PhoneIcon className="h-5 w-5 inline-block lg:mr-2" />
            <div className='lg:flex hidden'>
                {value}
            </div>
        </a>
    );
};

export default ButtonPhone;