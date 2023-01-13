import {Tab} from "@headlessui/react";
import {Fragment} from "react";
import {SECTION_TAB_SECTION, BUTTON_TAB, TAB_GROUP} from "@sections/transparancy/style";
import CurrentBalanceSection from "@sections/transparancy/CurrentBalanceSection";
import Reports from "@sections/transparancy/Reports";
import Brides from "@sections/transparancy/Bridges";


const TabSection = () => {
    return (
        <SECTION_TAB_SECTION>
            <div className="container">
                <Tab.Group>
                    <Tab.List as={Fragment}>
                        <TAB_GROUP>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Current Balances</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Reports & Reserves</BUTTON_TAB>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <BUTTON_TAB className={selected && 'active'}>Bridges</BUTTON_TAB>
                                )}
                            </Tab>
                        </TAB_GROUP>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <CurrentBalanceSection/>
                        </Tab.Panel>
                        <Tab.Panel>
                            <Reports/>
                        </Tab.Panel>
                        <Tab.Panel>
                            <Brides/>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </SECTION_TAB_SECTION>
    )
}

export default TabSection;