import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TeamLogo from 'public/assets/team-dao-v2.png';
import TeamMeta from 'public/assets/team-meta.png';
import Image from "next/image";

const RBNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ifWalletConnected = async () => {
        try {
            // make sure have access window ethereum
            const { ethereum } = window;

            if (!ethereum) {
                console.log("No ethereum found");
            } else {
                console.log("Ethereum found", ethereum);
            }

            // check if authorized using wallet connect
            const accounts = await ethereum.request({ method: "eth_accounts" });

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
    };

    const disconnectWallet = async () => {
        try {
            setCurrentAccount("");
            handleClose();
        } catch (e) {
            console.log("Error", e);
        }
    };

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
            const { ethereum } = window;
            if (!ethereum) {
                alert("get metamask");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (e) {
            console.log("Error", e);
        }
    };

    const addTeamToken = async () => {
        const wasAdded = await ethereum.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20", // Initially only supports ERC20, but eventually more!
                options: {
                    address: "0x9BADA086BAE4962037f14B0e79BaEa62e972dD21", // The address that the token is at.
                    symbol: "TEAM", // A ticker symbol or shorthand, up to 5 chars.
                    decimals: 8, // The number of decimals in the token
                    image:
                        "https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png", // A string url of the token logo
                },
            },
        });
    };

    // run function when page loaded
    useEffect(() => {
        ifWalletConnected();
    }, []);

    console.log(isOpen);
    return (
        <>
            <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.75) !important'}} className='fixed-top bg-black' expand='lg' id='myNavbar'>
                <div className='container'>
                    <Link className='navbar-brand text-white' href='/'>
                        <a>
                            <img src={TeamLogo.src} style={{width: '210px'}} className={`brand_img`} alt=""/>
                        </a>
                    </Link>
                    <Navbar.Toggle
                        onClick={() => setIsOpen(!isOpen)}
                        aria-controls='basic-navbar-nav'
                    >
                        <span className={`navbar-toggler-icon ${isOpen ? `close` : ``}`} />
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id='basic-navbar-nav'
                        className={`collapse-animation`}
                    >
                        <Nav className='ml-auto ms-auto' id='myNavItem'>
                            <Link href='/marketplace'>
                                <a className='nav-link'>MARKETPLACE</a>
                            </Link>
                            <Link href='/players'>
                                <a className='nav-link'>PLAYERS</a>
                            </Link>
                            <Link href='#'>
                                <a className='nav-link'>STAKE</a>
                            </Link>
                            <Link href='https://goo.gl/maps/BjL2WXMcup4NSRqS7'>
                                <a target='_blank' className='nav-link'>GAMECAFE</a>
                            </Link>
                            <Link href='https://whitepaper.teamdao.com/'>
                              <a className='nav-link' target='_blank' rel='noreferrer'>
                                WHITEPAPER
                              </a>
                            </Link>
                            <Link href='/media-kit'>
                                <a className='nav-link'>MEDIAKIT</a>
                            </Link>
                            <Link href='#'>
                                <a className='nav-link'>SCHOLARSHIPS</a>
                            </Link>


                            {/*<Link href='#'>*/}
                            {/*    <a className='nav-link'>GAMES</a>*/}
                            {/*</Link>*/}
                            {/*<Link href='#'>*/}
                            {/*    <a className='nav-link'>SPORTS</a>*/}
                            {/*</Link>*/}
                            {/*<Link href='#'>*/}
                            {/*    <a className='nav-link'>ATHLETES</a>*/}
                            {/*</Link>*/}
                            {/*<Link href='#'>*/}
                            {/*    <a className='nav-link'>TEAMS</a>*/}
                            {/*</Link>*/}
                            {/*<Link href='#'>*/}
                            {/*    <a className='nav-link'>TOURNAMENTS</a>*/}
                            {/*</Link>*/}
                        </Nav>

                        <Nav className='ms-auto left-nav-menu' id='myNavItem'>
                            <div
                                onClick={addTeamToken}
                                className='btn_b me-2 reflect-left w-100'
                            >
                                <div
                                    style={{ width: 150 + "px" }}
                                    className='d-flex btn_b--txt flex-row justify-content-center align-items-center flex-grow-1 add-meta btn_b--textwrap'
                                >
                                    <Image src={TeamMeta} className='coin-link' width={25} height={25}/>
                                    <span className={`text-center d-flex flex-column`}>
                    <span>
                      +ADD <span className='neon'>$TEAM</span>
                    </span>{" "}
                                        <span>METAMASK</span>
                  </span>
                                </div>
                                <div className='btn_b--bgwrap'>
                                    <div className='btn_b--bg'>
                                        <div className='btn_b--fill no_full' />
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={connectWallet}
                                id='con_wallet-txt'
                                className='btn_b w-100'
                            >
                                <div className='btn_b--textwrap h-100'>
                                    {!currentAccount ? (
                                        <div
                                            id='con_wallet'
                                            className='btn_b--txt d-flex flex-column'
                                        >
                                            <span className='neon'>Connect</span> <span>Wallet</span>
                                        </div>
                                    ) : (
                                        <div
                                            id='con_wallet'
                                            className='btn_b--txt d-flex align-items-center justify-content-center '
                                        >
                                            {
                                                <span className='neon'>
                          {currentAccount.substr(0, 3)}...
                                                    {currentAccount.substr(currentAccount.length - 4)}
                        </span>
                                            }
                                        </div>
                                    )}
                                </div>
                                <div className='btn_b--bgwrap'>
                                    <div className='btn_b--bg'>
                                        <div className='btn_b--fill no_full' />
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Modal
                show={show}
                onHide={handleClose}
                contentClassName='modal-disconnect'
                centered={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Disconnect Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={disconnectWallet} className='btn btn-default'>
                        Disconnect
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default RBNavBar;
