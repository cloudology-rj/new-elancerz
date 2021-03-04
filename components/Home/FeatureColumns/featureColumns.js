import PropTypes from 'prop-types';
import Image from 'next/image';
import Container from '@/components/global/Container';

import {
  FeatureImage,
  FeatureSubtitle,
  FeatureContainer,
  FeatureTitle,
  FeatureRow,
} from './FeatureColumnsStyles';

// Three Column Feature on Homepage
const FeatureColumns = (props) => {
  return (
    <Container>
      <FeatureContainer>
        <FeatureRow>
          <Image
            src="/illustrations/featureOne.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </FeatureRow>

        <FeatureRow>
   
          <Image
            src="/illustrations/featureTwo.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </FeatureRow>

        <FeatureRow>
          <Image
            src="/illustrations/featureThree.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </FeatureRow>
      </FeatureContainer>
    </Container>
  );
};

FeatureColumns.propTypes = {};

export default FeatureColumns;
