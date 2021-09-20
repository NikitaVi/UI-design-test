import React from 'react'
import { Button } from '../../globalStyles'
import {GiCrystalBars, GiCutDiamond, GiStonePile} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLenght,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.styled'

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>    
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiStonePile />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>$99.99</PricingCardCost>
                                <PricingCardLenght>per month</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Lead Gen Analystics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>Gold Rush</PricingCardPlan>
                                <PricingCardCost>$299.99</PricingCardCost>
                                <PricingCardLenght>per month</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>1000 New Users</PricingCardFeature>
                                    <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Lead Gen Analystics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Diamond King</PricingCardPlan>
                                <PricingCardCost>$999.99</PricingCardCost>
                                <PricingCardLenght>per month</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Unlimited Users</PricingCardFeature>
                                    <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                                    <PricingCardFeature>24/7 Support</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
