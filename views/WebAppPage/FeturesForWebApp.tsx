import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/WebApp/rb_2295.png',
    title: 'Custom Web Development',
    description:
      'Whether you need a content management system (CMS), a custom e-commerce platform, or a fully dynamic site, we have the expertise to build powerful websites from scratch.',
  },
  {
    imageUrl: '/WebApp/rb_6882.png',
    title: 'Website Design',
    description:
      'Beautiful, functional design is at the core of everything we do. Our designers work closely with you to create a website that looks stunning and performs excellently.',
  },
  {
    imageUrl: '/WebApp/rb_5865.png',
    title: 'E-commerce Development',
    description:
      'For online stores, we offer specialized e-commerce solutions to build a secure, user-friendly platform that enhances your customers\' shopping experience.',
  },
  {
    imageUrl: '/WebApp/rb_2148825220.png',
    title: 'Website Maintenance & Support',
    description:
      'Once your website is live, we’re here to keep it running smoothly. Our maintenance packages include updates, security checks, and support to ensure your site remains up-to-date.',
  },
  {
    imageUrl: '/WebApp/rb_9862.png',
    title: 'Search Engine Optimization (SEO)',
    description:
      'Get discovered by more potential customers. Our SEO experts use the latest strategies to optimize your site and improve its ranking on search engines.',
  },
 
];


export default function FeturesForWebApp() {
  return (
      <Wrapper>
        <SectionTitle>Our Services</SectionTitle>
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
