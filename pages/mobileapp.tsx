import Head from 'next/head';
import { EnvVars } from 'env';
import Timeline from 'components/Timeline';
import HeroForMobApp from 'views/MobAppView/HeroForMobApp';
import FeatureGalleryForMobApp from 'views/MobAppView/FeatureGalleryForMobApp';
import FeatureForMobApp from 'views/MobAppView/FeatureForMobApp';

// Define types for the steps array
interface Step {
  title: string;
  description: string;
}

const MobileApp = () => {
    const steps: Step[] = [
        { title: "Discovery & Strategy", description: "We start with in-depth research and planning, understanding your vision, audience, and objectives." },
        { title: "Design & Prototyping", description: "Our designers create engaging, user-friendly interfaces that reflect your brand and resonate with users." },
        { title: "Development", description: "Using best-in-class technology, our developers bring the design to life, building a reliable and scalable mobile app." },
        { title: "Testing & Launch", description: "We rigorously test the app for quality and performance, ensuring a seamless experience before launching on the App Store or Google Play." },
        { title: "Ongoing Support", description: "After launch, we’re here to support you with regular updates, bug fixes, and new features as your app evolves." }
      ];
      

  return (
    <>
      <Head>
        <title>Mobile App Development | {EnvVars.SITE_NAME}</title>
        <meta name="description" content="Develop mobile apps with ease." />
      </Head>
      <HeroForMobApp />
      <FeatureGalleryForMobApp />
      <FeatureForMobApp />
      <Timeline steps={steps} />
    </>
  );
};

export default MobileApp;
