"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import ButtonForm from '../../molecules/button/ButtonForm';
import { addProspect } from '../../../firebase/dataManager';
import { useRouter } from 'next/navigation'

const HeroWithForm = () => {
    const darkComponent = true;
    const router = useRouter();
    const [disabled, setDisabled] = useState(true);

    const [value, setValue] = useState({
        name: '',
        email: '',
        tel: '',
        codePostal: '',
        nomEntreprise: "",
        metierPrincipal:""
    });

    useEffect(() => {
        setDisabled(!(value.name && value.email && value.tel && value.codePostal && value.metierPrincipal));
    }, [value]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProspect(value).then(() => {
            router.push("/merci");
        }).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <section className={`${darkComponent&&"bg-secondary"} w-[100vw]`} >
            <div className={`mx-auto flex max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8 md:flex-row flex-col justify-between items-center ${darkComponent ? "text-white" : "text-secondary"}`}>
                <div className='md:w-5/12 w-full'>
                    <h1 className={`sm:text-6xl text-5xl font-bold leading-snug`}>Trouver <span className="underline" style={{ textDecorationColor: '#F2B138' }}>des Chantiers</span></h1>
                    <p className='text-xl mt-10 font-semibold'>Augmenter votre de CA mensuel de </p>
                    <h2 className='sm:text-5xl text-3xl font-bold mt-2'>30 000€ <span className='text-2xl'>à</span><br/> 400 000€</h2>
                    <p className='text-xl font-semibold mt-2'>Efficace, fiable et continu</p>
                    <p className='mt-10'>Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. </p>
                </div>
                <div className='md:w-6/12 w-full md:mt-0 mt-12'>
                    <form onSubmit={handleSubmit} id="form" className='sm:px-7 px-2 py-16 bg-gray rounded-md shadow-md flex flex-col items-center w-full text-primary'>
                        <h2 className='text-center text-primary text-xl font-semibold'>Vous êtes professionel du bâtiment et vous recherchez de nouveaux chantiers ?</h2>
                        <p className='text-center text-xs mt-5'>Saisisez vos coordonnées et je vous contacterais afin que nous étudions votre projet</p>
                        <div className='md:w-9/12 mx-auto mt-8'>
                            <input 
                                type="text" 
                                name="fullname"
                                placeholder="Nom, prénom" 
                                value={value.name} 
                                onChange={(e) => setValue({ ...value, name: e.target.value })} 
                                className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={value.email} 
                                onChange={(e) => setValue({ ...value, email: e.target.value })} 
                                className='px-4 py-2 rounded-md mt-4 w-[100%]'
                            />
                            <input 
                                type="tel" 
                                name="tel" 
                                placeholder="Téléphone" 
                                value={value.tel} 
                                onChange={(e) => setValue({ ...value, tel: e.target.value })} 
                                className='px-4 py-2 rounded-md mt-4 w-[100%]'
                            />
                            <input 
                                type="text" 
                                name="codePostal" 
                                placeholder="Code postal" 
                                value={value.codePostal} 
                                onChange={(e) => setValue({ ...value, codePostal: e.target.value })} 
                                className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                            />
                            <div className='flex justify-center'>
                                <ButtonForm disabled={disabled} />
                            </div>
                        </div>
                        <div className='flex w-[100%] mt-5 justify-center text-xs'>
                            <a href="/mentions-legales" className='underline'>Conditions générales </a>
                            <p className='mx-1.5'>et </p>
                            <a href="/politique-de-confidentialite" className='underline'>politique de confidentialité.</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroWithForm;