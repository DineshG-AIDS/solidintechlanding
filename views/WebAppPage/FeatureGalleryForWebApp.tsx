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
      title: 'Tailored Solutions for Your Unique Business Needs',
      description:
        '<p>We understand that every business is different, and we take the time to create websites that reflect your brand’s unique identity. Our solutions are customized to fit your business goals and budget.</p>',
      imageUrl: '/cpi-1-1200x600-1.png',
      baseColor: '249,82,120',
      secondColor: '221,9,57',
    },
    {
      title: 'User-Centric Design for an Engaging Experience',
      description:
        '<p>A great website isn’t just about looks; it’s about functionality and experience. We prioritize user-centric design to create interfaces that are intuitive, engaging, and optimized for conversions.</p>',
      imageUrl: '/12065046_4886714.jpg',
      baseColor: '57,148,224',
      secondColor: '99,172,232',
    },
    {
      title: 'Responsive & Mobile-Optimized Websites',
      description:
        '<p>With mobile usage on the rise, we build websites that look and perform flawlessly across all devices. From desktops to tablets and smartphones, we ensure your website delivers a seamless experience.</p>',
      imageUrl: '/10276612_4421964.jpg',
      baseColor: '88,193,132',
      secondColor: '124,207,158',
    },
    {
      title: 'SEO & Performance-Driven Web Development',
      description:
        '<p>Every website we create is built with SEO best practices and performance in mind. We ensure your website loads quickly, is easy to navigate, and ranks well in search engines to help drive more traffic and leads.</p>',
      imageUrl: '/seo-performance.jpg',
      baseColor: '67,170,139',
      secondColor: '92,184,156',
    },
  ];
  


export default function FeatureGalleryForWebApp() {
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
<SectionTitle>Why Choose Us?</SectionTitle>

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
