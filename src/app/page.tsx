import Image from 'next/image'
import NavBar from '../components/organisms/navigation/NavBar'
import HeroWithForm from '@/components/organisms/Hero/HeroWithForm'
import Footer from '@/components/organisms/footer/Footer';
import Temoignage from '@/components/organisms/commentary/Temoignage';
import RightContentWithImg from '@/components/organisms/content/RightContentWithImg';
import LeftContentWithImg from '@/components/organisms/content/LeftContentWithImg';
import About from '@/components/organisms/about/About';

const cards =[
    {
        title: "Proximité",
        text: "En tant qu'artisan du web, je m'engage à vous fournir des prospects qualifiés et des projets sur-mesure dans le bâtiment, garantissant une collaboration étroite et sans engagement ni frais de service.",
    },
    {
        title: "Efficacité", 
        text: "Je maximise l'efficacité de vos campagnes avec des prospects ciblés et des solutions clés en main dans le bâtiment, le tout en tant qu'artisan du web dédié et sans contraintes de service."
    },
    {
        title: "Rentabilité",
        text: "Augmentez votre rentabilité grâce à mes services personnalisés dans le bâtiment, offrant des prospects qualifiés et des campagnes efficaces, sans engagement ni frais de service."
    }
]

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
        <About imgAlt='Nicolas Castera' cards={cards} imgUrl='' title='Qui suis-je ?' lieu='Bordeaux' name="Nicolas CASTERA" paragraphs="Expert en marketing digital et communication en ligne, basé à Bordeaux. Fort de plus de 10 ans d'expérience, je me spécialise dans les campagnes Google Ads et la création de landing pages sur-mesure pour les professionnels du bâtiment. Mon approche est centrée sur l'acquisition de prospects qualifiés et l'optimisation des campagnes pour une efficacité maximale. Je m'adapte aux besoins spécifiques de chaque client, offrant une flexibilité budgétaire et une transparence totale. Mon objectif est d'accroître significativement le chiffre d'affaires de mes clients dans le bâtiment, en garantissant des résultats concrets et un taux de conversion élevé, le tout sans engagement ni frais de service."  />
      </main>
      <Footer />
    </>
  )
} 
