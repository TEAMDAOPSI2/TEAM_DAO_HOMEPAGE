import {Paragraph} from "@components/Typo";
import {LockedAsset, PanelReport, ReportEntry, TabWrapperPanel, WraperPanel} from "@sections/transparancy/style";

const Bridges = () => {
    return (
        <div>
            <WraperPanel>
                <Paragraph>Last Update: Jan 03, 2023 - 11:30:10 PM UTC</Paragraph>
                <TabWrapperPanel>
                    <PanelReport>
                        <ReportEntry>
                            <h3>OKC Bridge</h3>
                            <Paragraph>
                                Tether has decided to provide information about USDt that is "bridged" by Aux Cayes
                                FinTech
                                Co. Ltd. ("OKX") utilising the OKX Bridge (described by OKX here). OKX reports that the
                                "Locked Assets" should be slightly larger than the "Assets on other blockchains" because
                                a
                                portion of the "Locked Assets" serve as withdrawal fees. The "Locked Assets" are a
                                portion
                                of the issued USDt on the TRON and Ethereum blockchains reported elsewhere as Current
                                Balances on Tether's Transparency pages and do not represent additional outstanding USDt
                                tokens. These Locked Assets also are not assets of Tether and are not a part of Tether's
                                Reserves reported elsewhere on Tether's Transparency pages. The "Assets on other
                                blockchains" are not issued by or endorsed by Tether.
                            </Paragraph>
                            <div className="card bg-dark text-center">
                                <div className="card-body">
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 27 22"
                                         color="#009393" aria-hidden="true" width="27" height="22" fill="none">
                                        <path
                                            d="M13.7051 10.1747L13.6838 12.6623C14.4881 12.5025 14.9782 12.0231 14.9835 11.3785C14.9782 10.7713 14.5308 10.4357 13.7051 10.1747Z"
                                            fill="#009393"></path>
                                        <path
                                            d="M11.3347 6.58984C11.3241 7.20241 11.8035 7.54864 12.4693 7.77769L12.4906 5.42329C11.7396 5.57776 11.3347 6.01988 11.3347 6.58984Z"
                                            fill="#009393"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M5.66985 0H20.6651C21.0229 0 21.3534 0.191159 21.5319 0.501284L25.9006 8.09409C26.1272 8.48785 26.0598 8.98484 25.7367 9.30414L13.7117 21.186C13.3221 21.5708 12.6955 21.5708 12.3059 21.186L0.297165 9.3202C-0.0334981 8.99347 -0.0954166 8.48197 0.147737 8.08579L4.81756 0.476923C4.99943 0.180594 5.32216 0 5.66985 0ZM13.6519 15.8636H12.3948L12.4054 14.6278C10.1469 14.4307 8.7353 13.2269 8.68204 11.0749H10.9139C10.9725 11.9645 11.5585 12.4972 12.4267 12.6623L12.4533 9.84445L11.942 9.71661C10.0989 9.2745 8.96435 8.35297 8.96968 6.74431C8.95903 4.9279 10.4292 3.6708 12.5119 3.46839L12.5226 2.22726H13.7797L13.769 3.47904C15.8198 3.70276 17.1355 4.96519 17.1622 6.72833H14.9516C14.8876 6.05717 14.4562 5.60439 13.7477 5.43927L13.7264 8.10262L14.0407 8.17719C15.937 8.60333 17.306 9.56746 17.3113 11.3839C17.306 13.2322 15.969 14.4574 13.6625 14.6332L13.6519 15.8636Z"
                                              fill="#009393"></path>
                                    </svg>
                                    {' '}USD₮
                                </div>
                            </div>
                            <LockedAsset>
                                <div>
                                    <div className="wrap-box">
                                        <div className="left-wrap">
                                            <h4>Locked Assets</h4>
                                            <div className="box">
                                                <div className="left">
                                                    <p>15,068,051.725 USDT</p>
                                                    <p className="address">TUAVzJ91...2mmBMJev</p>
                                                </div>
                                                <div className="group-btn">
                                                    <button className=""><i className="fa fa-copy"></i></button>
                                                    <button className=""><i className="fa fa-external-link"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="left">
                                                    <p>15,068,051.725 USDT</p>
                                                    <p className="address">TUAVzJ91...2mmBMJev</p>
                                                </div>
                                                <div className="group-btn">
                                                    <button className=""><i className="fa fa-copy"></i></button>
                                                    <button className=""><i className="fa fa-external-link"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mid-wrap">
                                            <div className="ico">
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.4 6.00006L10.1333 1.7334M14.4 6.00006L10.1333 10.2667M14.4 6.00006H1.06665"
                                                        stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="right-wrap">
                                            <h4>Assets on other blockchains</h4>
                                            <div className="box">
                                                <div className="left">
                                                    <p>15,068,051.725 USDT</p>
                                                    <p className="address">TUAVzJ91...2mmBMJev</p>
                                                </div>
                                                <div className="group-btn">
                                                    <button className=""><i className="fa fa-copy"></i></button>
                                                    <button className=""><i className="fa fa-external-link"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="left">
                                                    <p>15,068,051.725 USDT</p>
                                                    <p className="address">TUAVzJ91...2mmBMJev</p>
                                                </div>
                                                <div className="group-btn">
                                                    <button className=""><i className="fa fa-copy"></i></button>
                                                    <button className=""><i className="fa fa-external-link"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </LockedAsset>
                        </ReportEntry>
                    </PanelReport>
                </TabWrapperPanel>
            </WraperPanel>
            <WraperPanel>
                <TabWrapperPanel>
                    <PanelReport>
                        <ReportEntry>
                            <Paragraph>
                                The above information has not been reviewed by Tether for consistency with the
                                information reported by OKX. OKX Chain and related reporting of information is the
                                responsibility of OKX, and Tether is not auditing or providing any form of assurance of
                                the information reported or the security or operation of OKX Chain, OKX Bridge, Tron,
                                Ethereum and bridged tokens on OKX Chain (including bridged versions of USD₮, EUR₮, or
                                XAU₮).
                            </Paragraph>
                            <Paragraph>
                                OKX, the OKX Chain the OKX Bridge, Tron, Ethereum and bridged tokens on OKX Chain
                                (including bridged versions of USD₮, EUR₮ or XAU₮) are third-party services and
                                technology within the meaning of Tether's Terms of Service, and Tether does not own or
                                control these blockchain protocols or services or provide any assurance of their
                                functionality.
                                Tether does not provide advice about the use or suitability for a particular user of
                                third-party services or technology and disclaims any representation or warranty, express
                                or implied, relating thereto.
                            </Paragraph>
                        </ReportEntry>
                    </PanelReport>
                </TabWrapperPanel>
            </WraperPanel>
        </div>
    )
}

export default Bridges;