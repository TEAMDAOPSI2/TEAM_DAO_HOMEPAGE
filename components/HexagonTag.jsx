import styled from 'styled-components';
import imgHexagon from 'public/assets/hexagon.png';

const Wrapper = styled.div`
  font-family: 'Technology';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #414141;
  width: calc(300px - 70px);
  height: 300px;
  position: relative;
  padding: 0 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${imgHexagon.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 150px;
    height: 200px;
  }
`;


const HexagonTag = (props) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};

export default HexagonTag;
