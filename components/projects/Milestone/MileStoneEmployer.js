import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderThree,
  SmallText,
  HighlightColor,
} from '@/components/global/Text';
import {
  ButtonSecondary,
  ButtonPrimary,
  ButtonDanger,
} from '@/components/global/Button';

import ChevronDown from '../../../public/icons/ChevronDown.svg';
import ChevronUp from '../../../public/icons/ChevronUp.svg';

import {
  AccordionHeader,
  AccordionContainer,
  AccordionDescription,
  Flex,
  ComparePrices,
  CompareBottomContent,
} from './MilestoneStyles';

import { SwitchIconStatus } from './status';

const MileStone = ({ name, price, status, newUpdate }) => {
  const description = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(!isOpen ? `${description.current.scrollHeight}px` : '0px');
  };

  return (
    <>
      <AccordionContainer>
        <AccordionHeader>
          <ComparePrices>
            <div>
              <Flex>
                {SwitchIconStatus(status)}
                <HeaderThree>
                  {name}
                  <HighlightColor>
                    (${newUpdate.updatedMileStone.price})
                  </HighlightColor>
                </HeaderThree>
                <ButtonPrimary>updated</ButtonPrimary>
              </Flex>
            </div>

            <div>
              <Flex>
                <HeaderThree>
                  {name}
                  <HighlightColor color="#D03131">
                    (${newUpdate.previousMileStone.price})
                  </HighlightColor>
                </HeaderThree>
                <ButtonDanger>PREVIOUS</ButtonDanger>
              </Flex>
            </div>
          </ComparePrices>

          <ButtonSecondary onClick={() => toggleAccordion()}>
            {!isOpen ? <ChevronDown /> : <ChevronUp />}
          </ButtonSecondary>
        </AccordionHeader>

        <AccordionDescription height={height} ref={description} open={isOpen}>
          <CompareBottomContent>
            <SmallText>
              <HighlightColor>
                Submit by {newUpdate.updatedMileStone.date}
              </HighlightColor>
            </SmallText>
            <SmallText>
              <HighlightColor color="#D03131">
                Submit by {newUpdate.previousMileStone.date}
              </HighlightColor>
            </SmallText>
          </CompareBottomContent>
        </AccordionDescription>
      </AccordionContainer>
    </>
  );
};

MileStone.propTypes = {
  newUpdate: PropTypes.obj,
};

export default MileStone;
