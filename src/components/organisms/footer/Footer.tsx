"use client"

import React, { useEffect, useState } from "react";

// Type pour les éléments de navigation
interface NavLink {
  name: string;
  href: string;
}

const isValidEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const navigation: { legal: NavLink[] } = {
  legal: [
    { name: "Conditions d'utilisation", href: "/conditions-d-utilisation" },
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
  ],
};

export default function Footer() {
  const darkComponent = false; // ou utilisez un state ou props pour définir cette valeur
  const [email, setEmail] = useState<string>("");
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (notification) {
      setIsButtonActive(false);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setIsButtonActive(isValidEmail(currentEmail));
  };

  // Définition des classes en fonction de darkComponent
  const footerClassName = darkComponent ? "bg-secondary text-white" : "bg-gray-900";
  const textClassName = darkComponent ? "text-white" : "text-gray-400";

  return (
    <footer className={footerClassName} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-5xl px-6 pb-8 lg:px-8">
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <p className={`mt-8 text-xs leading-5 ${textClassName} md:mt-0`}>
            &copy; 2023 trouver-mon-chantier.com, Inc. Tous droits réservés.
          </p>
          <div className="flex">
            <a
              className={`mt-8 text-xs leading-5 ${textClassName} md:mt-0`}
              href="/mentions-legales"
            >
              Mentions légales
            </a>
            <a
              className={`mt-8 text-xs leading-5 ${textClassName} md:mt-0 ml-5 flex-wrap`}
              href="/politique-de-confidentialite"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
