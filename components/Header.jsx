/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import TeamLogo from 'public/assets/team-logo.png';
import {useEffect, useState} from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 70px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    font-family: 'Technology';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }

  &[data-toggle='false'] {
    a {
      position: relative;

      &#marketplace_header {
        &:after {
          content: 'MARKETPLACE';
        }

        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }

      &#teamToken_header {
        &:after {
          content: 'ADD TEAM TOKEN';
        }

        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }

      &#marketplace_header {
        &:after {
          content: 'MARKETPLACE';
        }

        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }

      &#teamToken_header {
        &:after {
          content: 'ADD TEAM TOKEN';
        }

        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }

      &#connect_header {
        &:after {
          content: 'CONNECT';
        }

        &:hover {
          &:after {
            content: 'COMING SOON';
          }
        }
      }

      &:before {
        position: absolute;
        bottom: -4px;
        content: '';
        width: 0px;
        height: 4px;
        background: #00ff19;
        transition: all 0.2s ease;
      }

      &:hover {
        &:before {
          width: 100%;
          transition: all 0.2s ease;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    &[data-toggle='false'] {
      display: none;
    }

    &[data-toggle='true'] {
      padding: 4rem 0;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: calc(100% - 8rem);
      justify-content: space-around;

      a {
        font-size: 1.75rem;
      }
    }
  }
`;

const HamburgerContainer = styled.div`
  z-index: 1000;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 200px;
`;

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body');
        body[0].setAttribute('data-scroll-lock', `${isOpen}`);
    }, [isOpen]);

    return (
        <HeaderContainer>
            <ContainerLogo>
                <NextLink href="/">
                    <Image
                        src={TeamLogo}
                        width={131}
                        height={38}
                        alt="Team Logo"/>
                </NextLink>
            </ContainerLogo>

            <NavContainer data-toggle={isOpen}>
                <NextLink onClick={() => setOpen(false)} href="/#about-us">
                    About us
                </NextLink>
                <NextLink href="/#token">Token</NextLink>
                <NextLink href="/#road-map">Roadmap</NextLink>
                <NextLink href="/#whitepaper">Whitepaper</NextLink>
                <NextLink href="media-kit">Mediakit</NextLink>
                <a id="marketplace_header"/>
                <a id="teamToken_header"/>
                <a id="connect_header"/>
            </NavContainer>

            <HamburgerContainer>
                <Hamburger color="white" toggled={isOpen} toggle={setOpen}/>
            </HamburgerContainer>
        </HeaderContainer>
    );
};

export default Header;
