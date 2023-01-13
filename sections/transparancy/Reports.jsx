import {Paragraph} from "@components/Typo";
import {PanelReport, TabWrapperPanel, WraperPanel, ReportEntry, ReverseBreakdown, Legends} from "@sections/transparancy/style";

const Reports = () => {
    return (
        <div>
            <WraperPanel>
                <Paragraph>Last Update: Jan 03, 2023 - 11:30:10 PM UTC</Paragraph>
                <TabWrapperPanel>
                    <PanelReport>
                        <ReportEntry>
                            <h3>Independent Accountant Report</h3>
                            <Paragraph>
                                As part of our continued commitment to transparency, Tether Holdings Limited do regular
                                assurance opinions every quarter. To allow easier accessibility, we make all our
                                historical
                                and most recent opinions available here. The assurance opinions are carried out by BDO
                                Italia. The opinion and the underlying report from Tether clearly and unambiguously
                                shows
                                that all Tether tokens are fully backed by reserves and provides a comprehensive
                                breakdown
                                of those reserves.
                                <div className="wrap-box mt-5">
                                    <div className="box">
                                        <a href="#">
                                            <div className="img">
                                                <img
                                                    src="https://images.ctfassets.net/vyse88cgwfbl/6kGnvgjuFt8D1tDqeaZHPv/85d5ea40bdbea6d3a3f3bcf0aaffdf98/BDO_Deutsche_Warentreuhand_Logo.svg.png"
                                                    alt=""/>
                                            </div>
                                            <div className="text">
                                                <h6>Tether Assurance Consolidated Reserves Report</h6>
                                                <p>December 31, 2020</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="box">
                                        <a href="#">
                                            <div className="img">
                                                <img
                                                    src="https://images.ctfassets.net/vyse88cgwfbl/6kGnvgjuFt8D1tDqeaZHPv/85d5ea40bdbea6d3a3f3bcf0aaffdf98/BDO_Deutsche_Warentreuhand_Logo.svg.png"
                                                    alt=""/>
                                            </div>
                                            <div className="text">
                                                <h6>Tether Assurance Consolidated Reserves Report</h6>
                                                <p>December 31, 2020</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="box">
                                        <a href="#">
                                            <div className="img">
                                                <img
                                                    src="https://images.ctfassets.net/vyse88cgwfbl/6kGnvgjuFt8D1tDqeaZHPv/85d5ea40bdbea6d3a3f3bcf0aaffdf98/BDO_Deutsche_Warentreuhand_Logo.svg.png"
                                                    alt=""/>
                                            </div>
                                            <div className="text">
                                                <h6>Tether Assurance Consolidated Reserves Report</h6>
                                                <p>December 31, 2020</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="box more">
                                        <a href="#">
                                            <h6>See More...</h6>
                                        </a>
                                    </div>

                                </div>
                            </Paragraph>
                        </ReportEntry>
                        <ReverseBreakdown>
                            <h3>Reserves Breakdown</h3>
                            <div className="lines">
                                <div className="other"
                                     style={{backgroundColor: 'rgb(52, 73, 94)', flexBasis: '3.84544%'}}/>
                                <div className="secured_loans"
                                     style={{backgroundColor: 'rgb(52, 152, 219)', flexBasis: '9%'}}/>
                                <div className="bonds" style={{backgroundColor: 'rgb(155, 89, 182)', flexBasis: '4%'}}/>
                                <div className="cash" style={{backgroundColor: 'rgb(15,199,19)', flexBasis: '82.4%'}}/>
                            </div>
                            <Legends>
                                <div className="legend">
                                    <div className="top">
                                        <div className="color" style={{backgroundColor: 'rgb(52, 73, 94)'}}/>
                                        <div className="text">
                                            <p>3.84544%</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        Other Investments (Including Digital Tokens)
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="top">
                                        <div className="color" style={{backgroundColor: 'rgb(52, 152, 219)'}}/>
                                        <div className="text">
                                            <p>9%</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        Secured Loans (None To Affiliated Entities)
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="top">
                                        <div className="color" style={{backgroundColor: 'rgb(155, 89, 182)'}}/>
                                        <div className="text">
                                            <p>4%</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        Corporate Bonds, Funds & Precious Metals
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="top">
                                        <div className="color" style={{backgroundColor: 'rgb(15,199,19)'}}/>
                                        <div className="text">
                                            <p>82.4%</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        Cash & Cash Equivalents & Other Short-Term Deposits & Commercial Paper
                                    </div>
                                </div>
                            </Legends>
                            <div className="cash_detail">
                                <h6>Cash & Cash Equivalents & Other Short-Term Deposits & Commercial Paper</h6>
                                <div className="detail-lines">
                                    <div className="lines">
                                        <div className="other"
                                             style={{backgroundColor: 'rgb(52, 73, 94)', flexBasis: '3.84544%'}}/>
                                        <div className="secured_loans"
                                             style={{backgroundColor: 'rgb(52, 152, 219)', flexBasis: '9%'}}/>
                                        <div className="bonds" style={{backgroundColor: 'rgb(155, 89, 182)', flexBasis: '4%'}}/>
                                        <div className="cash" style={{backgroundColor: 'rgb(15,199,19)', flexBasis: '82.4%'}}/>
                                    </div>
                                    <Legends>
                                        <div className="legend">
                                            <div className="top">
                                                <div className="color" style={{backgroundColor: 'rgb(52, 73, 94)'}}/>
                                                <div className="text">
                                                    <p>3.84544%</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                Other Investments (Including Digital Tokens)
                                            </div>
                                        </div>
                                        <div className="legend">
                                            <div className="top">
                                                <div className="color" style={{backgroundColor: 'rgb(52, 152, 219)'}}/>
                                                <div className="text">
                                                    <p>9%</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                Secured Loans (None To Affiliated Entities)
                                            </div>
                                        </div>
                                        <div className="legend">
                                            <div className="top">
                                                <div className="color" style={{backgroundColor: 'rgb(155, 89, 182)'}}/>
                                                <div className="text">
                                                    <p>4%</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                Corporate Bonds, Funds & Precious Metals
                                            </div>
                                        </div>
                                        <div className="legend">
                                            <div className="top">
                                                <div className="color" style={{backgroundColor: 'rgb(15,199,19)'}}/>
                                                <div className="text">
                                                    <p>82.4%</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                Cash & Cash Equivalents & Other Short-Term Deposits & Commercial Paper
                                            </div>
                                        </div>
                                    </Legends>
                                </div>
                            </div>
                        </ReverseBreakdown>
                    </PanelReport>
                </TabWrapperPanel>
            </WraperPanel>
        </div>
    );
}

export default Reports;