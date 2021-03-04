import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Bold, HeaderThree } from '@/components/global/Text';

import {
  ButtonPrimaryIconOnly,
  ButtonSecondary,
  ButtonPrimary,
} from '@/components/global/Button';

import ArrowPointLeft from '../../../public/icons/ArrowPointLeftWhite.svg';

import {
  FlexHeader,
  UserFlex,
  ProjectDescription,
  Chatsvg,
  PriceText,
  MainTitle,
  ProjectFlex,
  ProjectDate,
  MobileBtn,
  DesktopBtn
} from './headerProjectStyles';


import { Flex } from '../../../styles/reusableStyles';


const index = ({
  mainTitle,
  projectTitle,
  freelancerPhoto,
  freelancerName,
  projectPrice,
  date,
}) => {
  const router = useRouter();

  return (
    <>
      <FlexHeader style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <MobileBtn>
            <ButtonPrimaryIconOnly onClick={() => router.back()}>
              <ArrowPointLeft stroke="white" />
            </ButtonPrimaryIconOnly>
          </MobileBtn>&emsp;

          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <DesktopBtn>
          <ButtonPrimary style={{ display: 'flex', alignItems: 'center' }} onClick={() => router.back()}>
            <ArrowPointLeft stroke="white" />&emsp;
            BACK TO PROJECTS
          </ButtonPrimary>
        </DesktopBtn>
      </FlexHeader>

      <ProjectDescription>
        <ProjectFlex>
          <HeaderThree>{projectTitle}</HeaderThree>
          <UserFlex>
            <div>
              <Image
                src={
                  freelancerPhoto ? `${freelancerPhoto}` : '/images/person.svg'
                }
                width={40}
                height={40}
              />
            </div>
            <Bold>{freelancerName}</Bold>
          </UserFlex>
          <ButtonSecondary>
            <Flex gap="5px">
              <Chatsvg />
              View Messages
            </Flex>
          </ButtonSecondary>
        </ProjectFlex>

        <PriceText>${projectPrice}</PriceText>
      </ProjectDescription>


      <ProjectDate>Started {date}</ProjectDate>
    </>
  );
};

index.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  freelancerName: PropTypes.string.isRequired,
  freelancerPhoto: PropTypes.string.isRequired,
  projectPrice: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default index;
