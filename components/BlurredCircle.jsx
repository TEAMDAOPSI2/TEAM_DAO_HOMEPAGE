import styled from 'styled-components';

const BlurredCircle = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: #00ff19;
  border-top: $size * 2 dotted #00ff19;
  border-right: $size dotted #00ff19;
  border-bottom: $size * 2 dotted #00ff19;
  border-left: $size * 10 dotted #00ff19;
  filter: blur(700px);
  pointer-events: none;
  position: absolute;
  top: ${props => (Number.isInteger(props.top) ? `${props.top || 0}px`: props.top)};
  left: ${props => (Number.isInteger(props.left) ? `${props.left || 0}px`: props.left)};
`;

export default BlurredCircle;
