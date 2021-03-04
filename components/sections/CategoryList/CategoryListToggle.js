import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonPill } from '@/components/global/Button';
import { PreTitle } from '@/components/global/Text';

import { ListContainer, ListHeader } from './CategoryListStyles';

const CategoryListToggle = ({ title, list, onToggleSelected }) => {
 

  const toggleActive = (id) => {
    onToggleSelected(id, title);
  };

  return (
    <div>
      <ListHeader>
        <PreTitle>{title}</PreTitle>
      </ListHeader>
      <ListContainer>
        {list.map(({ selected, name, id }) => (
          <ButtonPill
            key={id}
            isActive={selected}
            onClick={() => toggleActive(id)}
          >
            {name}
            {selected && (
              <Image src="/icons/closeOutline.svg" height={22} width={22} />
            )}
          </ButtonPill>
        ))}
      </ListContainer>
    </div>
  );
};

CategoryListToggle.propTypes = {};

export default CategoryListToggle;
