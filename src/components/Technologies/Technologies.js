import React from 'react';
import { DiDatabase,DiJavascript,DiCode, DiPython,DiDotnet, DiAws } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Vue - Electron - JavaScript - HTML - CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node - Express - .Net Core - Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python - Pandas - NumPy - TensorFlow - Matplotlib - Plotly
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            Postgres - MySQL - Microsoft SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDotnet size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Integration Test - xUnit - MSTest
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
