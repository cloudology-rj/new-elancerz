import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: none;
  background: #fff;
  padding: 1rem;
  position: relative;
  max-height: 100vh;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: block;
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: -8px;
  background-color: #fff;
  z-index: 2;
  padding-bottom: 12px;
`;
