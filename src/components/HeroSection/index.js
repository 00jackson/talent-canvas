import React from 'react';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../datasets/constant';
import HeroImg from '../../images/profile-pic.png';
import HeroBgAnimation from '../HeroAnimation';
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, LeetcodeButton, Links, Span, SubTitle, TextLoop, Title } from './heroStyle';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I'm a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <Links>
                            <ResumeButton href={Bio.resume} target='display'>Resume</ResumeButton>
                            <LeetcodeButton href={Bio.leetcode} target='display'>Leetcode</LeetcodeButton>
                            {/* <CodechefButton href={Bio.codechef} target='display'>Codechef</CodechefButton> */}
                        </Links>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />

                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}
export default HeroSection;