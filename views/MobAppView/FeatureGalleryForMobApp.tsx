// import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';
const TABS = [
    {
      title: 'Tailored App Solutions',
      description:
        'Every business is unique, and your mobile app should be too. We focus on understanding your goals and creating custom solutions that align with your brand and target audience.',
      imageUrl: '/custom-solutions.jpg', 
      baseColor: '249,82,120',
      secondColor: '221,9,57',
    },
    {
      title: 'Cross-Platform Expertise',
      description:
        'Whether you need an app for iOS, Android, or a cross-platform solution, we’ve got you covered. Our expertise ensures your app performs seamlessly on all devices and platforms.',
      imageUrl: '/cross-platform.jpg',  
      baseColor: '57,148,224',
      secondColor: '99,172,232',
    },
    {
      title: 'User-Centric Design',
      description:
        'A well-designed app isn’t just functional; it’s a joy to use. We prioritize UX/UI design, making sure your app looks beautiful and is intuitive for users to navigate.',
      imageUrl: '/user-centric-design.jpg',  
      baseColor: '88,193,132',
      secondColor: '124,207,158',
    },
    {
      title: 'Future-Proof & Scalable',
      description:
        'We develop apps that are built to grow with your business. Our code is optimized for scalability and performance, so your app can adapt to meet evolving business needs.',
      imageUrl: '/scalable-future-proof.jpg',  
      baseColor: '67,170,139',
      secondColor: '92,184,156',
    },
  ];
  
  
  


export default function FeatureGalleryForMobApp() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

//   const imagesMarkup = TABS.map((singleTab, idx) => {
//     const isActive = singleTab.title === currentTab.title;
//     const isFirst = idx === 0;

//     return (
//       <ImageContainer key={singleTab.title} isActive={isActive}>
//         <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} />
//       </ImageContainer>
//     );
//   });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
      {/* <OverTitle>Our Services</OverTitle> */}
<SectionTitle>Why Choose Us for Mobile App Development?</SectionTitle>

      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top:100px;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

// const ImageContainer = styled.div<{ isActive: boolean }>`
//   position: relative;
//   overflow: hidden;
//   border-radius: 0.8rem;
//   flex: ${(p) => (p.isActive ? '2' : '0')};
//   box-shadow: var(--shadow-md);

//   &:before {
//     display: block;
//     content: '';
//     width: 100%;
//     padding-top: calc((9 / 16) * 100%);
//   }

//   & > div {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//   }

//   ${media('<=desktop')} {
//     width: ${(p) => (p.isActive ? '100%' : '0')};
//   }
// `;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
