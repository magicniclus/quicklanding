"use client"

import React, { useEffect } from 'react';
import ButtonPhone from '../../molecules/button/ButtonPhone';
import { projectData } from '../../../data/projectData';
import Image from 'next/image';

const navigation = [
  { name: 'Qui suis-je ?', href: '#qui' },
  { name: 'Contact', href: '#form' },
];

const NavBar = () => {
    const darkComponent = false;

    return (
        <header className={`text-primary ${darkComponent && "bg-gray"}`}>
            <nav className={`mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8 text-primary `} aria-label="Global">
                <div className="flex">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Trouver-mon-chantier</span>
                        {
                        projectData[0].informations.logo &&
                       <Image
                        layout="responsive"
                        width={14}
                        height={20}
                        src={projectData[0].informations.logo}
                        alt="trouver-mon-chantier"
                        style={{ minWidth: '90px' }}
                        />
                        }
                    </a>
                </div>
                <div className='md:block hidden'>
                    {navigation.map((item, id) => (
                        <a href={item.href} key={id} className='mr-7'>{item.name}</a>
                    ))
                    }
                </div>
                {
                    projectData[0].informations.phone && <ButtonPhone value={projectData[0].informations.phone} bgColor='orange' textColor='text' />
                }
            </nav>
        </header>
    );
};

export default NavBar;
