import React from 'react';
import Ligne from "../../atoms/lign/Lign";

interface ImgWithTextProps {
  imgUrl: string;
  title: string;
  paragraphs: JSX.Element[]; // Type modifié pour accepter des éléments JSX
}


const RightContentWithImg : React.FC<ImgWithTextProps> = ({
  imgUrl,
  title,
  paragraphs,
}) => {
   return (
    <section className=" bg-textSecondary">
      <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-32 py-20 md:flex-row flex-col justify-between items-center">
        <div className="md:w-6/12 w-full flex justify-center items-center">
          <img src={imgUrl} className="max-h-[500px] h-auto" alt="Image Description" />
        </div>
        <div className="md:w-6/12 w-full md:mt-0 mt-12 text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="mt-7 mb-14">
            <Ligne />
          </div>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="text-white mt-7">
              {paragraph}
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default RightContentWithImg;