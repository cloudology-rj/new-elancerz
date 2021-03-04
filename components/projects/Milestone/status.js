import { SmallText } from '@/components/global/Text';
import { ButtonPrimary } from '@/components/global/Button';

import Check from '../../../public/icons/success-check.svg';
import Clock from '../../../public/icons/clock.svg';
import Warning from '../../../public/icons/warning.svg';

const SwitchIconStatus = (title) => {
  switch (title) {
    case 'finished':
      return <Check width="20px" height="20px" />;
    case 'notify':
      return <Warning width="20px" height="20px" />;
    case 'ongoing':
      return <Clock width="20px" height="20px" />;
    default:
      return;
  }
};

const SwitchDateStatus = (title, date, setShowModal, role, setShowViewWork) => {
  switch (title) {
    case 'finished':
      return <SmallText>Approved by , {date}</SmallText>;
    case 'notify':
      return (
        <>
          {console.log(role)}
          <SmallText>Submit by , {date}</SmallText>
          <br />
          {role === 'employer' ? (
            <ButtonPrimary onClick={setShowViewWork}>
              View Work
            </ButtonPrimary>
          ) : (
            <ButtonPrimary onClick={setShowModal}>Submit work</ButtonPrimary>
          )}
        </>
      );

    case 'ongoing':
      return <SmallText>Submit by , {date}</SmallText>;

    default:
      return;
  }
};

const SwitchStatus = (title) => {
  switch (title) {
    case 'finished':
      return 'Completed';

    default:
      return 'Active';
  }
};

export { SwitchIconStatus, SwitchDateStatus, SwitchStatus };
