import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonSecondary, ButtonIcon } from '@/components/global/Button';
import { PreTitle, Bold, HighlightColor, HeaderThree } from '@/components/global/Text';
import { CardContainer, FlexLeft, FlexRight, FlexSpaceBetween, FlexColumn, Paragraphs, FlexEnd, FlexNav } from './ServicesCardStyles';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ServicesCard = ({ title, subtitle, fee, desc, del, edit }) => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => {
    if (currentSlide >= 2) {
      return false
    }
    else {
      console.log('next', currentSlide);
      setCurrentSlide(currentSlide + 1)
    }
  };

  const prev = () => {
    if (currentSlide <= 0) {
      return false
    }
    else {
      console.log('prev', currentSlide);
      setCurrentSlide(currentSlide - 1)
    }

  };


  return (

    <CardContainer>
      <FlexLeft>
        <div>

          <Carousel selectedItem={currentSlide} showArrows={false} showIndicators={false} showStatus={false}>
            <div>
              <img alt="" src="/images/s1.png" />
            </div>
            <div>
              <img alt="" src="/images/s2.png" />
            </div>
            <div>
              <img alt="" src="/images/s3.png" />
            </div>
          </Carousel>

          <FlexNav>
            <ButtonIcon onClick={prev} >
              {
                currentSlide <= 0 ?
                  <Image src={'/icons/prev-gray.svg'} width={12} height={14} />
                  :
                  <Image src={'/icons/prev-primary.svg'} width={12} height={14} />
              }
            </ButtonIcon>
            <ButtonIcon onClick={next} >
              {
                currentSlide >= 2 ?
                  <Image src={'/icons/next-gray.svg'} width={12} height={14} />
                  :
                  <Image src={'/icons/next-primary.svg'} width={12} height={14} />
              }
            </ButtonIcon>
          </FlexNav>

        </div>
      </FlexLeft>
      <FlexRight>
        <FlexSpaceBetween>
          <FlexColumn>
            <HeaderThree>{title}</HeaderThree>
            <PreTitle>{subtitle}</PreTitle>
          </FlexColumn>
          <br />
          <HeaderThree>
            <HighlightColor>{fee}</HighlightColor>
          </HeaderThree>
        </FlexSpaceBetween>
        <Paragraphs>{desc}</Paragraphs>
        <FlexEnd>
          <ButtonSecondary onClick={del}>DELETE</ButtonSecondary>
          &emsp;
          <ButtonPrimary onClick={edit}>EDIT</ButtonPrimary>
        </FlexEnd>
      </FlexRight>
    </CardContainer>
  );
};

ServicesCard.propTypes = {};

export default ServicesCard;
