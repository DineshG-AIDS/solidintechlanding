import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
    <h3>Contact Info</h3>
    <p>
      <span>Phone:</span> 7010563845
    </p>
    <p>
      <span>Email:</span> Hello@solidintech.com
    </p>
    <p>
      <span>Address:</span> 1, Koviapudur Traders Association, Kamarajar Street,
      Koviapudur, Coimbatore, Tamil Nadu, India - 641042
    </p>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
    margin:1rem;
  }

  span {
  font-weight:semi-bold;
    color: #000000;
    
  }
`;
