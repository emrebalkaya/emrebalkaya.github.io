import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Emre Balkaya's Personal Portfolio,
        </SectionTitle>
        <SectionText>
          Here, you can explore my projects, delve into my technical skills, and more.
        </SectionText>
      <Link href="#about">
        <Button onClick={props.handleClick}>Contact</Button>
        </Link>
      </LeftSection>
      
    </Section>
  </>
);

export default Hero;