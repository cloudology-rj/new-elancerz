import Image from 'next/image';
import PropTypes from 'prop-types';

import { ButtonPill } from '@/components/global/Button';
import { PreTitle } from '@/components/global/Text';

import { ListContainer, ListHeader } from './CategoryListStyles';

const CategoryList = ({ title, searchHistory }) => {
  return (
    <div>
      <ListHeader>
        <PreTitle>{title}</PreTitle>

        {
          // if component is from search history then render delete
          searchHistory && (
            <span>
              <Image src="/icons/bin.svg" height="24px" width="24px" />
            </span>
          )
        }
      </ListHeader>

      <ListContainer>
        <ButtonPill>
          <PreTitle>Logo Design</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Landing Page</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Mobile App</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Wire Frame</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Prototype</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Backend</PreTitle>
        </ButtonPill>
        <ButtonPill>
          <PreTitle>Python</PreTitle>
        </ButtonPill>

        <ButtonPill>
          <PreTitle>Virtual Assistant</PreTitle>
        </ButtonPill>
      </ListContainer>
    </div>
  );
};

CategoryList.propTypes = {};



const lists = [
  {
    name: "Web Development",
    isActive: false,
    

  }
]


export default CategoryList;



