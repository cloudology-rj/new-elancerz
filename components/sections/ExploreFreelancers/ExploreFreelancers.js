import { useContext } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';

import { IsMobileContext } from 'context/IsMobile';

import {
  ButtonPrimary,
  ButtonPrimaryIconOnly,
} from '@/components/global/Button';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';

import FreelancerList from '../../search/FreelancerList/FreelancerList';

import {
  CategoriesContainer,
  ExploreHeader,
  YellowTextBackground,
  HeaderFlex,
  Flexbetween,
} from './ExploreFreelancersStyles';

// List Out the Freelancers of a particular category on  /explore:category/ endpoint

const ExploreFreelancers = (props) => {
  const router = useRouter();
  const [isMobile] = useContext(IsMobileContext);
  return (
    <>
      {!isMobile ? (
        <HeaderFlex>
          <Flexbetween>
            <HeaderTwo>Freelancers</HeaderTwo>

            <YellowTextBackground>
              <HeaderThree>Web Developers</HeaderThree>
            </YellowTextBackground>
          </Flexbetween>

          <ButtonPrimary onClick={() => router.push('/explore')}>
            <Flexbetween>
              <Image
                src="/icons/ArrowPointLeftWhite.svg"
                width={22}
                height={22}
              />
              Back to categories
            </Flexbetween>
          </ButtonPrimary>
        </HeaderFlex>
      ) : (
        <div>
          <Flexbetween>
            <ButtonPrimaryIconOnly onClick={() => router.push('/explore')}>
              <Image
                src="/icons/ArrowPointLeftWhite.svg"
                width={22}
                height={22}
              />
            </ButtonPrimaryIconOnly>
            <HeaderTwo>Freelancers</HeaderTwo>
          </Flexbetween>

          <br />
          <YellowTextBackground>
            <HeaderThree>Web Developers</HeaderThree>
          </YellowTextBackground>
        </div>
      )}

      <FreelancerList list={freelancersData} />
    </>
  );
};

ExploreFreelancers.propTypes = {};

export default ExploreFreelancers;

const freelancersData = [1, 2, 3];
