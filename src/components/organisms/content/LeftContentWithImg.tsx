import React from 'react';
import Ligne from "../../atoms/lign/Lign";

interface ImgWithTextProps {
  imgUrl: string;
  title: string;
  paragraphs: JSX.Element[];
  darkComponent?: boolean; // Rendre cette prop optionnelle
}

const LeftContentWithImg: React.FC<ImgWithTextProps> = ({
  imgUrl,
  title,
  paragraphs,
  darkComponent = false// Valeur par défaut pour darkComponent
}) => {
  const sectionClassName = darkComponent ? 'bg-secondary text-white' : 'bg-white text-black';
  const textClassName = darkComponent ? 'text-white' : 'text-black';
    return (
    <section className={`${sectionClassName} w-[100vw]`}>
      <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-32 py-20 md:flex-row flex-col justify-between items-center">
        <div className={`md:w-6/12 w-full ${textClassName}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="mt-7 mb-14">
            <Ligne />
          </div>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className={`mt-7 ${textClassName}`}>
              {paragraph}
            </div>
          ))}
        </div>
        <div className="md:w-6/12 w-full flex justify-center items-center md:mt-0 mt-12">
          <img src={imgUrl} className="max-h-[500px] h-auto" alt="Image Description" />
        </div>
      </div>
    </section>
  );
};

export default LeftContentWithImg;