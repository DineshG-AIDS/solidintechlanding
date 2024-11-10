import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
    {
      imageUrl: '/MobApp/2463937_330874-PANOKF-227.jpg',
      title: 'iOS & Android App Development',
      description:
        'We specialize in native app development for both iOS and Android platforms, ensuring optimal performance, security, and user experience.',
    },
    {
      imageUrl: '/MobApp/rb_260.png', 
      title: 'Cross-Platform App Development',
      description:
        'For businesses looking for a solution that works across both iOS and Android, we offer cross-platform development using technologies like Flutter and React Native.',
    },
    {
      imageUrl: '/MobApp/rb_69316.png', 
      title: 'UI/UX Design',
      description:
        'Our design team crafts visually stunning and user-friendly interfaces. From wireframes to final designs, we ensure your app provides an engaging experience from the first touch.',
    },
    {
      imageUrl: '/MobApp/20125854_6215432.jpg', 
      title: 'App Consulting & Strategy',
      description:
        'Not sure where to start? Our consultants work with you to clarify your ideas, define app goals, and develop a strategy for success.',
    },
    {
      imageUrl: '/MobApp/rb_1897.png', 
      title: 'App Testing & Quality Assurance',
      description:
        'Every app we build goes through rigorous testing to ensure it’s reliable, secure, and free of bugs, providing a smooth experience for your users.',
    },
    {
      imageUrl: '/MobApp/rb_3250.png', 
      title: 'Maintenance & Support',
      description:
        'Post-launch, our team offers ongoing support and maintenance to keep your app up-to-date with the latest features, security updates, and performance enhancements.',
    },
  ];
  


export default function FeatureForMobApp() {
  return (
      <Wrapper>
        <SectionTitle>Our Mobile App Development Services</SectionTitle>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
        margin-top: 10rem;
        margin-left:10rem;
margin-bottom:10rem;
        margin-right:10rem;

`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 50rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
