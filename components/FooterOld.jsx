import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import TeamLogo from 'public/assets/team-logo.png';
import TwitterIcon from 'public/assets/social-media/twitter.svg';
import TelegramIcon from 'public/assets/social-media/telegram.svg';
import FacebookIcon from 'public/assets/social-media/facebook.svg';
import TiktokIcon from 'public/assets/social-media/tiktok.png';
import MediumIcon from 'public/assets/social-media/medium_white.svg';
import DiscordIcon from 'public/assets/social-media/discord_white.svg';
import WhitePaperIcon from 'public/assets/social-media/litepaper.png';
import GithubIcon from 'public/assets/social-media/github_white.svg';
import YoutubeIcon from 'public/assets/social-media/youtube.svg';
import TwitchIcon from 'public/assets/social-media/iconmonstr-twitch-1-240.png';
import LinksIcon from 'public/assets/social-media/iconmonstr-share-thin-240.png';
import Image from "next/image";


export default function FooterOld() {
    const [notification, setNotification] = useState('');
    const [notificationActive, setNotificationActive] = useState(false);
    const [email, setEmail] = useState('');


    const fetchNotifications = () => {
        fetch('https://script.google.com/macros/s/AKfycbwYEFQFcl2Anqos_CQ5qnYMtHP07Ej9xZNNykjyGMTabeS3SPVTpa8YIAFsE7JnHrv7bw/exec?action=notif')
            .then(res => res.json())
            .then(res => {
                setNotification(res[0].message);
            });
        // setTimeout(() => {
        //     setNotification(null)
        // }, 10 * 1000);
    }

    useEffect(() => {
        const notificationFetch = setInterval(() => {
            fetch('https://script.google.com/macros/s/AKfycbwYEFQFcl2Anqos_CQ5qnYMtHP07Ej9xZNNykjyGMTabeS3SPVTpa8YIAFsE7JnHrv7bw/exec?action=notif')
                .then(res => res.json())
                .then(res => {
                    setNotification(res[0].message);
                    setNotificationActive(true)
                    const ref = document.getElementById('notificationSound');
                    ref.play();
                });
            setTimeout(()=>{
                setNotificationActive(null);
            },5 * 1000)
        }, 10 * 1000);

        return function runningInterval() {
            clearInterval(notificationFetch);
        }




    }, []);


    const submitEmail = async () => {
        event.preventDefault();
        const email = event.target.email.value;

        const res = await fetch(`https://script.google.com/macros/s/AKfycbzA9mNJjFb1RR-kabS-fi-c7ErrW-4IaPgcRi5g9iVj84HCuiuze2hMen99EXv6cm8maA/exec?action=subscribe-email&email=${email}`, {
            method: 'POST'
        });
        const result = await res.json();

        if (result.message === 'success') {
            setNotification("You are added to TEAM mail");
        }

    };


    return (
        <>
            <section className="footer fixed-bottom" style={{backgroundColor: 'rgba(0, 0, 0, 0.75) !important'}}>
                {/*<div className="edge">*/}
                {/*    <img src="images/footer-edge.svg" alt="footer ege"/>*/}
                {/*</div>*/}
                <div className="container text-white content pb-3">
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="d-flex h-100 flex-row align-items-center socials">
                                <div className="footer-logo mr-1">
                                    <img src={TeamLogo.src} alt="Team game"/>
                                </div>
                                <div className="social-group">
                                    <a href="https://t.me/TEAMDAO" target="_blank" rel="noreferrer">
                                        {/*<img src="images/telegram_white.svg" alt="Telegram"/>*/}
                                        <TelegramIcon/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://twitter.com/TEAMDAOcom" target="_blank" rel="noreferrer">
                                        <TwitterIcon/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://web.facebook.com/TEAMDAOcom" target="_blank" rel="noreferrer">
                                        <FacebookIcon/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.tiktok.com/@teamdao" target="_blank" rel="noreferrer">
                                        <img src={TiktokIcon.src}/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://teamdao.medium.com" target="_blank" rel="noreferrer">
                                        <MediumIcon width="30" height="30"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://discord.gg/TEAMDAO" target="_blank" rel="noreferrer">
                                        <DiscordIcon width="30" height="30"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://whitepaper.teamdao.com/" target="_blank" rel="noreferrer">
                                        <img style={{width: '20px', height: '20px'}} src={WhitePaperIcon.src}
                                             alt="litepapper"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://github.com/TEAMDAO" target="_blank" rel="noreferrer">
                                        <GithubIcon/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.youtube.com/c/TeamDAO" target="_blank" rel="noreferrer">
                                        <YoutubeIcon/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://www.twitch.tv/teamdaoTV" target="_blank" rel="noreferrer">
                                        <img style={{width: '20px', height: '20px'}}
                                             src={TwitchIcon.src} alt="Twitch"/>
                                    </a>
                                </div>
                                <div className="social-group">
                                    <a href="https://linktr.ee/TEAMDAO" target="_blank" rel="noreferrer">
                                        <img style={{width: '20px', height: '20px'}}
                                             src={LinksIcon.src} alt="link"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ms-auto mail-subscription">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                  className="cta6-form-wrap-2" aria-label="Email Form" onSubmit={submitEmail}>
                                <input type="email" className="sub_input-2 w-input" maxLength="256" name="email"
                                       data-name="Email 3" placeholder="Enter your email" id="email-3" required/>
                                <button id="con_wallet-txt" className="btn_b ps-2 pe-2 flip" type="submit"
                                        style={{border: 'none'}}>
                                    <div className="btn_b--textwrap h-100">
                                        <div id="con_wallet"
                                             className="btn_b--txt d-flex align-items-center justify-content-center">
                                            Subscribe
                                        </div>
                                    </div>
                                    <div className="btn_b--bgwrap">
                                        <div className="btn_b--bg">
                                            <div className="btn_b--fill no_full"/>
                                        </div>
                                    </div>
                                </button>
                                {/*<input type="submit" value="Subscribe" data-wait="Please wait..."*/}
                                {/*       className="btn_b is--sub w-button"/>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className={'notification ' + (notificationActive ? 'is-show' : 'is-gone')}>
                <div className="notification-text-wrap">
                    <div className="notification-text d-flex justify-content-between w-100">
                        <span>{notification}</span>
                        <span className="close-btn" onClick={() => {
                            setNotificationActive(false)
                        }}>x</span>
                    </div>
                </div>
                <div className="notification-bg-wrap">
                    <div className="notification-bg">
                        <div className="notification-fill"/>
                    </div>
                </div>
            </div>
            <audio style={{display:'none'}} id="notificationSound" controls>
                <source src="assets/music/notification.mp3" type="audio/mp3"/>
            </audio>
        </>

    );
}
