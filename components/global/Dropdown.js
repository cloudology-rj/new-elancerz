import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ReactDOM from 'react-dom';

import { Body } from '@/components/global/Text';

const DropdownContainer = styled.div`
  position: relative;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  width: 100%;
  padding: 12 16px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 320px;
  }
  
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

/*

How to use dropdown
Provide a parent  state that includes
-> state for that was selected ( we might need or not depends on the situation)
-> state for options which is stored in array of object
->  title fallback if no options were set to true

 the only two state you'll used
  state that contains our options -> const [options, setOptions] = useState(optionsList);
  state that will handle an option that was selected ->  const [selected, setSelected] = useState('');

*/

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      headerTitle: this.props.title,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        isOpen: false,
      });
    }
  };

  static getDerivedStateFromProps(nextProps) {
    const { options, title } = nextProps;
    // checks if there is an option that's true
    const selectedItem = options.filter((item) => item.selected);

    //sets the current header if there is
    if (selectedItem.length) {
      return {
        headerTitle: selectedItem[0].name,
      };
    }
    // if no option were found set the title as label
    return { headerTitle: title };
  }

  //show or hide dropdown
  toggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  // sets the item
  selectItem = (name, id) => {
    this.setState(
      {
        headerTitle: name,
        isOpen: false,
      },
      // resets the option after selecting an option
      () => this.resetOptions(id)
    );
  };

  //resets our option
  resetOptions = (id) => {
    const { options, onSetOptions, onSetSelected } = this.props;

    //clone our options
    const newOptions = [...options];

    // filters and set the current option to be true while rest are false
    newOptions.filter((item) =>
      item.id === id ? (item.selected = true) : (item.selected = false)
    );

    // set the new Options
    onSetOptions(newOptions);
    // set the selected
    onSetSelected(id);
  };

  render() {
    const { isOpen, headerTitle } = this.state;
    const { options } = this.props;

    return (
      <DropdownContainer>
        <DropdownHeader onClick={this.toggleOpen}>
          <Body>{headerTitle}</Body>
          <Image src="/icons/arrowDown.svg" width="12px" height="6px" />
        </DropdownHeader>

        {isOpen && (
          <DropdownList>
            {options.map(({ name, id }) => (
              <DropdownListItem
                key={name}
                onClick={() => this.selectItem(name, id)}
              >
                {name}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  // options: PropTypes.array.isRequierd,
  onSetOptions: PropTypes.func.isRequired,
  onSetSelected: PropTypes.func,
};
export default Dropdown;
