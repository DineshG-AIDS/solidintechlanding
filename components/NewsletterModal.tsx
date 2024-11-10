import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import MailSentState from './MailSentState';
import Overlay from './Overlay';

export interface NewsletterModalProps {
  onClose: () => void;
}

interface EmailPayload {
  name: string;
  email: string;
  description: string;
  mobile: string;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const { register, handleSubmit, formState } = useForm<EmailPayload>();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: 'Email from contact form', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      } else {
        setHasSuccessfullySentMail(true);
      }
    } catch {
      setHasErrored(true);
    }
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  return (
    <Overlay>
      <Container>
        <Card onSubmit={handleSubmit(onSubmit)}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          {hasSuccessfullySentMail && <MailSentState />}
          {!hasSuccessfullySentMail && (
            <>
              <Title>Contact Us</Title>
              {hasErrored && <ErrorMessage>Couldnt send email. Please try again.</ErrorMessage>}
              <InputGroup>
                <InputStack>
                  {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
                  <Input placeholder="Your Name" id="name" disabled={isDisabled} {...register('name', { required: true })} />
                </InputStack>
                <InputStack>
                  {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
                  <Input placeholder="Your Email" id="email" disabled={isDisabled} {...register('email', { required: true })} />
                </InputStack>
              </InputGroup>
              <InputStack>
                {errors.mobile && <ErrorMessage>Mobile number is required</ErrorMessage>}
                <Input
                  placeholder="Your Mobile Number"
                  id="mobile"
                  type="tel"
                  disabled={isDisabled}
                  {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                />
              </InputStack>
              <InputStack>
                {errors.description && <ErrorMessage>Description is required</ErrorMessage>}
                <Textarea
                  as="textarea"
                  placeholder="Enter Your Message..."
                  id="description"
                  disabled={isDisabled}
                  {...register('description', { required: true })}
                />
              </InputStack>
              <Button as="button" type="submit" disabled={isSubmitDisabled}>
                Send Message
              </Button>
            </>
          )}
        </Card>
      </Container>
    </Overlay>
  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
