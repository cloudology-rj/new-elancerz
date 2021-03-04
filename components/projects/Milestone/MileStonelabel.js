import PropTypes from 'prop-types';

import { Bold } from '@/components/global/Text';
import { ButtonPill } from '@/components/global/Button';

import { AccordionHeader, Flex, AccordionContainer } from './MilestoneStyles';

import { SwitchIconStatus, SwitchStatus } from './status';

const MileStoneLabel = ({ status, task,price }) => {
  return (
    <AccordionContainer>
      <AccordionHeader>
        <Flex>
          {SwitchIconStatus(status)}
          <Bold>Initial Sketch $(10)</Bold>
          <ButtonPill>{SwitchStatus(status)}</ButtonPill>
        </Flex>
      </AccordionHeader>
    </AccordionContainer>
  );
};

MileStoneLabel.propTypes = {
  status: PropTypes.string.isRequired,
};

export default MileStoneLabel;
