import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { Body } from '@/components/global/Text';

const DropdownContainer = styled.div`
  position: relative;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  width: 100%;
  padding: 12 16px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  p {
    color: ${(props) => props.theme.colors.subtleText};
  }
`;

const DropdownList = styled.ul`
  z-index: 100;
  background: ${(props) => props.theme.colors.primaryBrand};
  position: absolute;
  // bottom: -170px;
  left: 0;
  width: 100%;
  margin-top: 14px;
  box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  padding: 17px;
`;

const DropdownListItem = styled.button`
  color: #fff;
  border-radius: 4px;
  border: none;
  background: transparent;
  text-align: left;
  font-family: 'Open sans';
  font-weight: 600;

  padding: 10px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      headerTitle: this.props.title,
    };
  }


  static getDerivedStateFromProps(nextProps) {
    const { list, title } = nextProps;
    const selectedItem = list.filter((item) => item.selected);
  
    if (selectedItem.length) {
      return {
        headerTitle: selectedItem[0].title,
      };
    }
    return { headerTitle: title };
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectItem = (name) => {
    const { resetThenSet } = this.props;

    this.setState(
      {
        headerTitle: name,
        isOpen: false,
      },
      () => resetThenSet(name)
    );
  };

  render() {
    const { isOpen, headerTitle } = this.state;
    const { list } = this.props;
    return (
      <DropdownContainer>
        <DropdownHeader onClick={this.toggleOpen}>
          <Body>{headerTitle}</Body>
          <Image src="/icons/arrowDown.svg" width="12px" height="6px" />
        </DropdownHeader>

        {isOpen && (
          <DropdownList>
            {list.map(({ name, id }) => (
              <DropdownListItem key={name} onClick={() => this.selectItem(name)}>
                {name}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    );
  }
}

export default Dropdown;
