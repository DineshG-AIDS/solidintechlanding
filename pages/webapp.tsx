import Head from 'next/head';
import FeatureGalleryForWebApp from 'views/WebAppPage/FeatureGalleryForWebApp';
import HeroForWEbApp from 'views/WebAppPage/HeroForWEbApp';
import { EnvVars } from 'env';
import FeturesForWebApp from 'views/WebAppPage/FeturesForWebApp';
import Timeline from 'components/Timeline';
interface Step {
  title: string;
  description: string;
}
const webapp = () => {const steps: Step[] = [
  { title: "Consultation", description: "We start by understanding your vision, goals, and target audience." },
  { title: "Planning & Strategy", description: "Our team develops a plan that outlines the project’s structure, timeline, and milestones." },
  { title: "Ongoing Support", description: "We’re with you every step of the way, offering support and enhancements as your business grows." },
  { title: "Design & Development", description: "We build your site with attention to detail, functionality, and aesthetics." },
  { title: "Testing & Launch", description: "Before going live, we rigorously test your website to ensure optimal performance." }
];
  return (
    <>
<Head>
        <title>
        Webpage development  | {EnvVars.SITE_NAME}

        </title>
        <meta name="description" content="Develop web site in easeway" />
      </Head>    <HeroForWEbApp/>
    <FeatureGalleryForWebApp/>
    <FeturesForWebApp/>
    <Timeline steps={steps}/>
    </>
  )
}

export default webapp
