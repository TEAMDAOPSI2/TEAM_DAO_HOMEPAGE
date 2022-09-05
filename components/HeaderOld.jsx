/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import TeamLogo from 'public/assets/team-logo.png';
import {useEffect, useState} from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Link from "next/link";

const WrapHeader = styled.div`
  position: fixed;
  width: 100%;
  background: #000;
  z-index: 99999999;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 70px;
  border-bottom-width: 4px;
  background: linear-gradient(270deg, #1b8520, #1b8520, #2afe30, #2afe30) 0 100% #000 no-repeat;
  background-size: 100% 5px;
  @media (max-width: 1024px) {
    padding: 8px 10px;
  }
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
    const [currentAccount, setCurrentAccount] = useState("");

    const ifWalletConnected = async () => {
        try {
            // make sure have access window ethereum
            const {ethereum} = window;

            if (!ethereum) {
                console.log("No ethereum found");
            } else {
                console.log("Ethereum found", ethereum);
            }

            // check if authorized using wallet connect
            const accounts = await ethereum.request({method: "eth_accounts"});

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Account found", account);
                setCurrentAccount(account);
            } else {
                console.log("No account found");
            }
        } catch (e) {
            console.log("Error", e);
        }
    }

    const disconnectWallet = async () => {
        try {
            setCurrentAccount("");
            handleClose();
        } catch (e) {
            console.log("Error", e);
        }
    }

    // connect wallet method
    const connectWallet = async () => {

        // // check if authorized using wallet connect
        // const accounts = await ethereum.request({method: "eth_accounts"});
        //
        // if (accounts.length !== 0) {
        //     // open modal disconnect
        //     console.log("open modal disconnect");
        //     handleShow();
        //     return true;
        // }
        // if not doing connect meta mask
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert("get metamask");
                return;
            }

            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (e) {
            console.log("Error", e);
        }
    }

    const addTeamToken = async () => {
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21", // The address that the token is at.
                    symbol: "TEAM", // A ticker symbol or shorthand, up to 5 chars.
                    decimals: 8, // The number of decimals in the token
                    image: "https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png", // A string url of the token logo
                },
            },
        });

    }

    // run function when page loaded
    useEffect(() => {
        ifWalletConnected();
    }, []);

    useEffect(() => {
        const body = document.getElementsByTagName('body');
        body[0].setAttribute('data-scroll-lock', `${isOpen}`);
    }, [isOpen]);

    return (
        <WrapHeader>
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
                    <NextLink href="marketplace">marketplace</NextLink>
                    <NextLink href="https://whitepaper.teamdao.com/">
                        <a target="_blank" ref="noopener">Whitepaper</a>
                    </NextLink>
                    <NextLink href="media-kit">Mediakit</NextLink>
                    <NextLink href="#">Games</NextLink>
                    <NextLink href="#">Sports</NextLink>
                    <NextLink href="#">Athletes</NextLink>
                    <NextLink href="#">Teams</NextLink>
                    <NextLink href="#">Tournaments</NextLink>

                    <div onClick={addTeamToken} id="con_wallet-txt" className="btn_b w-100 reflect-left">
                        <div className="btn_b--textwrap h-100">
                            <div id="con_wallet" className="btn_b--txt d-flex flex-column text-center"><span
                                className="neon">Add</span> <br/><span>TEAM Token</span></div>
                        </div>
                        <div className="btn_b--bgwrap">
                            <div className="btn_b--bg">
                                <div className="btn_b--fill no_full"></div>
                            </div>
                        </div>
                    </div>

                    <div onClick={connectWallet} id="con_wallet-txt" className="btn_b w-100">
                        <div className="btn_b--textwrap h-100">
                            <div id="con_wallet" className="btn_b--txt d-flex flex-column">
                                {!currentAccount ? (
                                    <div
                                        id='con_wallet'
                                        className='btn_b--txt d-flex flex-column'
                                    >
                                        <span className='neon'>Connect</span><br/><span>Wallet</span>
                                    </div>
                                ) : (
                                    <div
                                        id='con_wallet'
                                        className='btn_b--txt d-flex align-items-center justify-content-center '>
                                        {
                                            <span className='neon'>
                                                {currentAccount.substr(0, 3)}...
                                                {currentAccount.substr(currentAccount.length - 4)}
                                            </span>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="btn_b--bgwrap">
                            <div className="btn_b--bg">
                                <div className="btn_b--fill no_full"></div>
                            </div>
                        </div>
                    </div>
                </NavContainer>

                <HamburgerContainer>
                    <Hamburger color="white" toggled={isOpen} toggle={setOpen}/>
                </HamburgerContainer>
            </HeaderContainer>
        </WrapHeader>
    );
};

export default Header;
