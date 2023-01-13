import {WrapHeroRight, HeroLeft, HeroRight, BoxHero, SECTION, WrapHero, Paragraph} from "@sections/transparancy/style";


const HeroSection = () => {
    return (
        <SECTION>
            <div className="container">
                <WrapHero>
                    <HeroLeft>
                        <h2>Transparency</h2>
                        <Paragraph>
                            All Tether tokens are pegged at 1-to-1 with a matching fiat currency and are backed 100% by
                            Tether’s reserves.
                            The value of our reserves is published daily and updated at least once per day.
                        </Paragraph>
                    </HeroLeft>
                    <HeroRight>
                        <WrapHeroRight className="row">
                            <div className="col-6">
                                <BoxHero>
                                    <h3>Etheureum</h3>
                                    <p>$66,263,713,430.65</p>
                                </BoxHero>
                                <BoxHero>
                                    <h3>Klaytn</h3>
                                    <p>€36,387,340.03</p>
                                </BoxHero>
                                <BoxHero>
                                    <h3>Algorand</h3>
                                    <p>¥20,503,468.90</p>
                                </BoxHero>
                                <BoxHero>
                                    <h3>ImmutableX</h3>
                                    <p>℥246,524.33</p>
                                </BoxHero>
                            </div>
                            <div className="col-6">
                                <BoxHero>
                                    <h3>Matic</h3>
                                    <p>$19,562,400.00</p>
                                </BoxHero>
                                <BoxHero>
                                    <h3>Solana</h3>
                                    <p>$19,562,400.00</p>
                                </BoxHero>
                                <BoxHero>
                                    <h3>Bantu</h3>
                                    <p>$19,562,400.00</p>
                                </BoxHero>
                            </div>
                        </WrapHeroRight>
                    </HeroRight>
                </WrapHero>
            </div>
        </SECTION>
    )
}

export default HeroSection;