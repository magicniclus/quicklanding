import Image from 'next/image'
import NavBar from '../components/organisms/navigation/NavBar'
import HeroWithForm from '@/components/organisms/Hero/HeroWithForm'
import Footer from '@/components/organisms/footer/Footer';
import Temoignage from '@/components/organisms/commentary/Temoignage';
import RightContentWithImg from '@/components/organisms/content/RightContentWithImg';
import LeftContentWithImg from '@/components/organisms/content/LeftContentWithImg';

export default function Home() {
    const darkComponent = false;
    
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 min-w-[100vw]">
        <HeroWithForm darkComponent={false} />
        <Temoignage darkComponent={true} />
        <RightContentWithImg imgUrl="/img/resultat.png" title="Devenez maitre de votre rentabilité" paragraphs={[ <p  key="paragraph1">Optimisez la rentabilité de votre campagne avec une précision inégalée. Soyez informé en temps réel de chaque contact acquis grâce à la campagne.</p>, <p  key="paragraph4"><span className="font-bold">Suivi et Développement :</span> Traitez efficacement les demandes de devis pour accroître votre chiffre d'affaires. Évaluez l'efficacité de votre investissement grâce à un reporting détaillé, qui trace l'impact direct de la campagne sur vos résultats.</p>, <p key="paragraph2"><span className="font-bold">Flexibilité Budgétaire :</span> Ajustez votre budget en continu pour l'aligner avec vos objectifs commerciaux et les variations saisonnières de votre activité.</p>, <p key="paragraph3"><span className="font-bold">Transparence Totale :</span> Grâce aux notifications instantanées des appels et des formulaires générés par la campagne, ainsi qu'à un reporting dédié, vous avez une vision claire et précise de la rentabilité de votre investissement. Cette transparence vous permet de prendre des décisions éclairées pour optimiser vos stratégies marketing.</p> ]} />
        <LeftContentWithImg darkComponent={true}  imgUrl="/img/resultat.png" title="Devenez maitre de votre rentabilité" paragraphs={[ <p  key="paragraph1">Optimisez la rentabilité de votre campagne avec une précision inégalée. Soyez informé en temps réel de chaque contact acquis grâce à la campagne.</p>, <p  key="paragraph4"><span className="font-bold">Suivi et Développement :</span> Traitez efficacement les demandes de devis pour accroître votre chiffre d'affaires. Évaluez l'efficacité de votre investissement grâce à un reporting détaillé, qui trace l'impact direct de la campagne sur vos résultats.</p>, <p key="paragraph2"><span className="font-bold">Flexibilité Budgétaire :</span> Ajustez votre budget en continu pour l'aligner avec vos objectifs commerciaux et les variations saisonnières de votre activité.</p>, <p key="paragraph3"><span className="font-bold">Transparence Totale :</span> Grâce aux notifications instantanées des appels et des formulaires générés par la campagne, ainsi qu'à un reporting dédié, vous avez une vision claire et précise de la rentabilité de votre investissement. Cette transparence vous permet de prendre des décisions éclairées pour optimiser vos stratégies marketing.</p> ]} />
      </main>
      <Footer />
    </>
  )
} 
