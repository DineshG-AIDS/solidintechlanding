import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="The Saas Tech startup " />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection
            imageUrl="/demo-illustration-1.svg"
            title="Revolutionize Your Business with  Cutting-Edge Development Services"
            overTitle="Innovate with Confidence"
          >
            <p>
              We specialize in building powerful single-page applications (SPA), scalable web and mobile apps, and delivering seamless
              consumer product integrations (CPI). With our tailored solutions, we ensure your business stays ahead in an ever-evolving
              digital landscape. <Link href="/services">Learn more about our full range of services.</Link> Whether you’re looking to
              enhance user experience, streamline processes, or drive engagement, our team is here to bring your vision to life.
            </p>
          </BasicSection>

          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Empowering Your Business with Custom Solutions"
            overTitle="Expert Development Services"
            reversed
          >
            <p>
              Our team combines expertise in modern technologies and agile development practices to deliver high-quality software solutions
              that meet your unique needs. <strong>From concept to launch, we’re committed to excellence</strong>, ensuring your product
              aligns with your business goals and customer expectations.
            </p>
            <ul>
              <li>Full-cycle SPA development for seamless user experiences</li>
              <li>Expert web and mobile app development to boost engagement</li>
              <li>Integration of Consumer Product Interfaces for a cohesive digital presence</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
