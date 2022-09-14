import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";
import GamesGroup from "public/assets/Games-full.png"

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => {
        cache[key] = r(key);
    });
}

// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context('public/assets/logo/', false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) => module[1]);

const Container = styled.div`
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  overflow: hidden;
  margin-top: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 100%;
  }  
`;



const LogoCarousel = () => (
    <Container>
        {/*<Slider*/}
        {/*    infinite*/}
        {/*    dots={false}*/}
        {/*    arrows={false}*/}
        {/*    autoplay*/}
        {/*    slidesToShow={10}*/}
        {/*    slidesToScroll={1}*/}
        {/*    centerMode*/}
        {/*    responsive={[*/}
        {/*        {*/}
        {/*            breakpoint: 960,*/}
        {/*            settings: {*/}
        {/*                slidesToShow: 8*/}
        {/*            }*/}
        {/*        },*/}
        {/*        {*/}
        {/*            breakpoint: 768,*/}
        {/*            settings: {*/}
        {/*                slidesToShow: 6*/}
        {/*            }*/}
        {/*        }*/}
        {/*    ]}*/}
        {/*>*/}
        {/*    {images.map((e, idx) => (*/}
        {/*        <div key={`${e}-${idx}`}>*/}
        {/*            <Image src={e} alt="logo" />*/}
        {/*        </div>*/}
        {/*    ))}*/}
        {/*</Slider>*/}
        <img src={GamesGroup.src}  alt="games group"/>
    </Container>
);

export default LogoCarousel;
