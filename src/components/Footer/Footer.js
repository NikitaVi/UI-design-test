import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaFacebook
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcon,
    SocialIcons
} from './Footer.styled';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join Your exclusive membership to receive the latest new and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubcribe at aoy time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                    </SocialLogo>
                    <WebsiteRights>ULTRA 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank'
                        aria-label='Facebook'>
                          <FaFacebook />  
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                        aria-label='Instagram'>
                          <FaInstagram />  
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                        aria-label='Youtube' rel='noopener noreferrer'>
                          <FaYoutube />  
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                        aria-label='Twitter'>
                          <FaTwitter />  
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                        aria-label='Linkedin'>
                          <FaLinkedin />  
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
} 
export default Footer
