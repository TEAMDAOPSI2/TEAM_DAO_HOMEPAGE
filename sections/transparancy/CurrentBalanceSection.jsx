import {Paragraph} from "@components/Typo";
import {BUTTON_TAB, TAB_GROUP_Balances, TabWrapperPanel, WraperPanel, PanelEntry, EntryBar, EntryTable} from "@sections/transparancy/style";
import {Tab} from "@headlessui/react";
import {Fragment} from "react";

const CurrentBalanceSection = () => {
    return (
        <WraperPanel>
            <Paragraph>Last Update: Jan 03, 2023 - 11:30:10 PM UTC</Paragraph>
            <TabWrapperPanel>
                <Tab.Group>
                    <Tab.List as={Fragment}>
                        <TAB_GROUP_Balances>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Ethereum</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Klaytn</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Algorand</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>ImmutableX</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Matic</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Solana</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Bantu</BUTTON_TAB>
                                )}
                            </Tab>
                        </TAB_GROUP_Balances>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel as={Fragment}>
                            <PanelEntry>
                                <div>
                                    <div className="group">
                                        <EntryBar>
                                            <div>On USDT</div>
                                            <div>
                                                <div className="bar">
                                                    <div className="bar-inner" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </EntryBar>
                                        <EntryTable>
                                            <p>Total Authorized</p>
                                            <p>$37,125,522,535.96</p>
                                        </EntryTable>
                                        <EntryTable>
                                            <p>Less: Authorized but not issued</p>
                                            <p>-$3,416,849,376.75</p>
                                        </EntryTable>
                                    </div>
                                    <div className="group">
                                        <EntryBar>
                                            <div>On Sushiswap</div>
                                            <div>
                                                <div className="bar">
                                                    <div className="bar-inner" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </EntryBar>
                                        <EntryTable>
                                            <p>Total Authorized</p>
                                            <p>$37,125,522,535.96</p>
                                        </EntryTable>
                                        <EntryTable>
                                            <p>Less: Authorized but not issued</p>
                                            <p>-$3,416,849,376.75</p>
                                        </EntryTable>
                                    </div>
                                    <div className="group">
                                        <EntryBar>
                                            <div>On Uniswap</div>
                                            <div>
                                                <div className="bar">
                                                    <div className="bar-inner" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </EntryBar>
                                        <EntryTable>
                                            <p>Total Authorized</p>
                                            <p>$37,125,522,535.96</p>
                                        </EntryTable>
                                        <EntryTable>
                                            <p>Less: Authorized but not issued</p>
                                            <p>-$3,416,849,376.75</p>
                                        </EntryTable>
                                    </div>
                                </div>
                                <div>
                                    <div className="group">
                                        <EntryBar>
                                            <div>On Lidao</div>
                                            <div>
                                                <div className="bar">
                                                    <div className="bar-inner" style={{width: '40%'}}></div>
                                                </div>
                                            </div>
                                        </EntryBar>
                                        <EntryTable>
                                            <p>Total Authorized</p>
                                            <p>$37,125,522,535.96</p>
                                        </EntryTable>
                                        <EntryTable>
                                            <p>Less: Authorized but not issued</p>
                                            <p>-$3,416,849,376.75</p>
                                        </EntryTable>
                                    </div>

                                </div>
                            </PanelEntry>
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </TabWrapperPanel>
        </WraperPanel>
    )
}

export default CurrentBalanceSection;