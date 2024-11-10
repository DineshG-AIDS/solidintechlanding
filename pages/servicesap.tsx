import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const ListIcon = styled.svg`
  width: 3.25rem;
  height: 3.25rem;
  margin-top: -0.125rem;
  color: #6b21a8;
  opacity: 0;
`;
const DesTExt = styled.span` 
  font-size: 1.7rem;
  font-weight: bold;
  color: #4F6CFF !important; 
`;
const SERVICES = [
  {
    imageUrl: '/rb_2370.png',
    title: 'SAP CPI Implementation Services',
    description: (
      <>
        Our SAP CPI implementation services are designed to make complex integrations simple and effective. We work with you to:
        <ul>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Plan and Design:</DesTExt> Analyze your existing architecture, understand your unique integration requirements, and
            design a custom SAP CPI solution to bridge your systems.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Develop and Configure:</DesTExt> Implement secure, robust integrations that align with your workflows using best
            practices and SAP standards, ensuring compliance and flexibility for future scalability.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Test and Deploy:</DesTExt> Rigorously test all integration flows and deploy them smoothly, ensuring minimal disruption to
            your daily operations.
          </li>
        </ul>
      </>
    ),
  },
  {
    imageUrl: '/rb_2148895051.png',
    title: 'SAP CPI Support and Maintenance Services',
    description: (
      <>
        Our support and maintenance services ensure your integrations continue to run smoothly. Our services include:
        <ul>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt> 24/7 Monitoring and Incident Management:</DesTExt> Proactively monitor integration flows to quickly identify and resolve
            issues, minimizing downtime and enhancing performance.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt> Performance Optimization:</DesTExt> Regularly evaluate and tune your integrations to ensure they are running efficiently
            and effectively.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Version Upgrades and Patch Management:</DesTExt> Manage upgrades and patches to keep your SAP CPI landscape updated with
            the latest SAP enhancements and security features.
          </li>
        </ul>
      </>
    ),
  },
  {
    imageUrl: '/rb_65954.png',
    title: 'SAP CPI Migration Services',
    description: (
      <>
        Migrating to SAP CPI from legacy or on-premise systems is often complex, requiring careful planning and precise execution. We
        provide:
        <ul>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Comprehensive Assessment:</DesTExt> Evaluate your current system and define the best approach for migrating data and
            integrations to the cloud.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Seamless Transition:</DesTExt> Migrate critical processes, data, and connections from SAP Process Integration (SAP PI) or
            other platforms to SAP CPI, ensuring no loss in data integrity or system performance.
          </li>
          <li>
            <ListIcon stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </ListIcon>
            <DesTExt>Data and Workflow Mapping:</DesTExt> Re-map data flows and workflows to fit SAP CPI’s capabilities, streamlining your
            integrations for future scalability.
          </li>
        </ul>
      </>
    ),
  },
];
export default function FeaturesPage() {
  return (
    <Page title="SAP CPI Services" description="Our SAP CPI implementation services are designed to make complex integrations simple and effective">
      <Wrapper>
        <SectionTitle>Explore Our SAP CPI Services</SectionTitle>
        <CustomAutofitGrid>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const ServiceCard = ({ imageUrl, title, description }: { imageUrl: string; title: string; description: JSX.Element }) => {
  return (
    <Card>
      <ImageWrapper>
        <NextImage src={imageUrl} width={228} height={228} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

// Basic styled components
const Wrapper = styled.div`

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;


const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
    // border: 0.2rem solid;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
border: 1rem solid;`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Description = styled.div`
  opacity: 0.6;
  text-align: left;
`;
