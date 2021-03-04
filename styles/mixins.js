import { css } from 'styled-components';



const Mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flex: css`
    display: flex;
    align-items: center;
  `,
};

export default Mixins;




