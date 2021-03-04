import PropTypes from 'prop-types';

import Container from '@/components/global/Container';
import { Lead, Paragraph, HeaderTwo } from '@/components/global/Text';

import {
  AboutContainer,
  AboutHeading,
  VideoSample,
  AboutContent,
} from './AboutStyles';

// About Component on HomePage

const About = (props) => {
  return (
    <AboutContainer>
      <Container>
        <AboutHeading>What is Elancerz?</AboutHeading>
        <AboutContent>
          <VideoSample></VideoSample>

          <div>
            <Lead>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Lead>

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              ultrices adipiscing dis enim quis hendrerit. Urna, orci, dignissim
              platea diam platea.
            </Paragraph>

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              ultrices adipiscing dis enim quis hendrerit. Urna, orci, dignissim
              platea diam platea.
            </Paragraph>
          </div>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};

About.propTypes = {};

export default About;
