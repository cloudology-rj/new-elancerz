import { useContext } from 'react';
import {useRouter} from 'next/router';

import { HeaderTwo } from '@/components/global/Text';
import Container from '@/components/global/Container';
import { ButtonPrimary } from '@/components/global/Button';
import FreelancerCategory from '../FreelancerCategory/FreelancerCategory';
import FreelancerSlider from '../FreelancerSlider/FreelancerSlider';

import AuthModal from '../../../HOC/AuthModal';



import {
  ExploreContainer,
  FreelanceCategoryContainer,
} from './ExploreIntroStyles';

import { IsMobileContext } from '../../../context/IsMobile';

const FreelanceCategoryWithModal = AuthModal(FreelancerCategory)
const FreelanceSliderWithModal = AuthModal(FreelancerSlider)


const ExploreIntro = (props) => {
  const [isMobile] = useContext(IsMobileContext);
const router = useRouter();
  return (
    <ExploreContainer>
      <Container>
        <HeaderTwo>Categories</HeaderTwo>
      </Container>

      <FreelanceCategoryContainer>
        {isMobile ? (
          <>
            <FreelanceCategoryWithModal title="Graphic Designers" />
            <FreelanceCategoryWithModal title="Marketing Specialist" />
          </>
        ) : (
          <>
            <FreelanceSliderWithModal title="Graphic Designers" />
            <FreelanceSliderWithModal title="Marketing Specialist" />
          </>
        )}

        <br />
        <ButtonPrimary align="center" onClick={() => router.push('/explore')}>More Categories</ButtonPrimary>
      </FreelanceCategoryContainer>
    </ExploreContainer>
  );
};

ExploreIntro.propTypes = {};

export default ExploreIntro;
