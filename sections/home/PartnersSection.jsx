import styled from 'styled-components';
import {H2, H4} from 'components/Typo';
import imgBackground from 'public/assets/galaxy-night-view.png';
import imgBackgroundLazy from 'public/assets/background-galaxy-lazy.png';
import imgAnimoca from 'public/assets/partners/partners-animoca.png';
import imgKrust from 'public/assets/partners/partners-krust.png';
import imgShima from 'public/assets/partners/partners-shima.png';
import imgAlgorand from 'public/assets/partners/partners-algorand.png';
import imgNexo from 'public/assets/partners/partners-nexo.png';
import imgGsr from 'public/assets/partners/partners-gsr.png';
import imgExcap from 'public/assets/partners/partners-excapital.png';
import imgOctava from 'public/assets/partners/partners-octava.png';
import imgAntiFund from 'public/assets/partners/partners-anti-fund.png';
import imgEverseCapital from 'public/assets/partners/partners-everse-capital.png';
import imgNGC from 'public/assets/partners/partners-ngc-ventures.png';
import imgLibraCapitalVentures from 'public/assets/partners/partners-libra-capital-ventures.png';
import imgGsg from 'public/assets/partners/partners-gsg.png';
import imgReadWP from 'public/assets/whitepaper-container.png';
import imgCoinHako from 'public/assets/partners/partners-coinhako.png';
import imgRisingCapital from 'public/assets/partners/partners-rising-cap.png';
import imgGainAssociate from 'public/assets/partners/partners-gains-associsates.png';
import imgNxgen from 'public/assets/partners/partners-nxgen.png';
import imgBaseLayer from 'public/assets/partners/partners-baselayer.png';
import imgDwf from 'public/assets/partners/partners-dwf-labs.png';
import Image from "next/image";
import useProgressiveImage from "../../hooks/useProgressiveImage";



const BgContainer = styled.div`
  background: linear-gradient(to bottom,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0) 80%,
  rgba(0, 0, 0, 1) 100%),
  url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  padding-top: 60px;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
  min-height: 800px;
  position: relative;

  #tsparticles {
    canvas {
      position: relative;
    }
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  img {
    width: 100%;
  }

  > div {
    width: ${props => props.widthSize};

    @media (min-width: 768px) {
      width: ${props => props.widthSize};
    }
  }
`;

const Button = styled.div`
  color: #00ff19;
  font-weight: 500;
  border: 1px solid #00ff19;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #153300;
  box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
  0px 19px 16px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  padding: 15.5px 17px;
  width: 181px;
  font-size: 20px;
  line-height: 24px;
  transition: 0.2s ease all;
  cursor: pointer;

  &:hover {
    background-color: #3f701e;
  }
`;

const ResponsiveBtn = styled(Button)`
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 100px;
    padding: 8px;
    margin-top: 10px;
  }
`;

const Item = styled.div`
  margin-bottom: 80px;
`;

const ColumnPartner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;

  > div {
    width: 19%;
    flex: 0 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    
    > div {
      width: 38%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 528px) {

    > div {
      width: 29%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }
`;

const ColumnPartner2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;

  > div {
    width: 15%;
    flex: 0 1 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    
    > div {
      width: 38%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 528px) {

    > div {
      width: 29%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 50px;
    }
  }
`;

const PartnersSection = () => {
    const bgImage = useProgressiveImage(imgBackground.src, imgBackgroundLazy.src);
    return (
        <div>
            <BgContainer bgImage={bgImage}>
                <Container>
                    <div style={{ marginBottom: 150 }}>
                        <H2 style={{ display: 'inline-block' }}>Partners</H2>
                    </div>
                    <Columns widthSize="17%">
                        <Columns
                            widthSize="22%"
                            style={{ width: '100%', justifyContent: 'space-around', gap: 0 }}
                        >
                            <Columns widthSize="45%" style={{ width: '47%' }}>
                                <Item>
                                    <img src={imgAnimoca.src} alt="partner" />
                                </Item>
                                <Item>
                                    <img src={imgKrust.src} alt="partner" />
                                </Item>
                            </Columns>
                            <Columns widthSize="45%" style={{ width: '47%' }}>
                                <Item>
                                    <img src={imgShima.src} alt="partner" />
                                </Item>
                                <Item>
                                    <img src={imgAntiFund.src} alt="partner" />
                                </Item>
                            </Columns>
                        </Columns>

                        <Item>
                            <img src={imgAlgorand.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgNGC.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgLibraCapitalVentures.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgNexo.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgGsr.src} alt="partner" />
                        </Item>

                        <Item>
                            <img src={imgExcap.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgCoinHako.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgOctava.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgRisingCapital.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgEverseCapital.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgDwf.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgNxgen.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgGainAssociate.src} alt="partner" />
                        </Item>
                        <Item>
                            <img src={imgBaseLayer.src} alt="partner" />
                        </Item>
                    </Columns>

                    <div style={{ margin: '150px 0' }}>
                        <H2 style={{ display: 'inline-block' }}>Advisors</H2>
                    </div>
                    <Columns widthSize="22%">
                        <Item>
                            <img src={imgGsg.src} alt="partner" />
                        </Item>
                    </Columns>

                    <div style={{ position: 'relative' }}>
                        <div style={{ marginBottom: 80, width: '100%', minWidth: 700 }}>
                            <div
                                id="whitepaper"
                                style={{
                                    position: 'absolute',
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    padding: '2%',
                                    top: '32%',
                                    left: '4%',
                                    width: 250,
                                    zIndex: 100
                                }}
                            >
                                <H4 style={{ textAlign: 'left' }}>Read the Whitepaper</H4>
                                <ResponsiveBtn
                                    type="diagonal"
                                    onClick={() => window.open('https://whitepaper.teamdao.com/')}
                                >
                                    READ NOW
                                </ResponsiveBtn>
                            </div>
                        </div>

                        <Image src={imgReadWP} alt="partner" />
                    </div>
                </Container>
            </BgContainer>
        </div>
    );
};

export default PartnersSection;
