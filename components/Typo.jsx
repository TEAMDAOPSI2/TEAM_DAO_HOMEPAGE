import styled from 'styled-components';

export const H2 = styled.h2`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 70px;
  background: linear-gradient(
    92.4deg,
    #ffffff 61.61%,
    rgba(255, 255, 255, 0) 106.62%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: -0.01em;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 0.9;
  }
`;

export const H3 = styled(H2).attrs(() => ({
    as: 'h3'
}))`
  font-weight: 700;
  font-size: 52px;
  line-height: 52px;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 0.9;
  }
`;

export const H4 = styled(H2).attrs(() => ({
    as: 'h4'
}))`
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 0.9;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;

  ul {
    list-style: none;
    padding-left: 14px;
    li {
      margin-bottom: 20px;
    }
    li:before {
      content: '■';
      color: #00ff19;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;
