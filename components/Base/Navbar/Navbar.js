import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAuth } from '../../../context/AuthProvider';

import { LogoSmall } from '@/components/global/Logo';
import Popover from '@/components/global/popover';
import Container from '@/components/global/Container';
import SidebarNav from '../SidebarNav/SidebarNav';
import NavbarRight from '../NavbarRight/NavbarRight';



import { useLocalStorage } from '../../../hooks/useLocalStorage';

import Hamburger from '../../../public/icons/menu.svg';

import {
  HeaderContainer,
  NavbarInput,
  SearchContent,
  NavbarLeft,
} from './NavbarStyles';

import { Flex } from '../../../styles/reusableStyles';

const Navbar = ({ fixed }) => {
  const [toggle, setToggle] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [popup, setPopup] = useState(false);

  const [searchQueries, setSearchQueries] = useLocalStorage('histories', [
    'Logo Design',
    'Web development',
  ]);

  const router = useRouter();

  const { isLogin } = useAuth();

  useEffect(() => {
    window.localStorage.setItem('histories', JSON.stringify(searchQueries));
  }, [searchQueries]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {

      if(keyword === '' || keyword === null){
        return
      }

      const currKeyword = keyword;

      const histories =
        JSON.parse(window.localStorage.getItem('histories')) || []; //the "|| []" replaces possible null from localStorage with empty array
      const newKeyword = currKeyword.replace('/', ' ');

      console.log(newKeyword);

      if (histories.indexOf(newKeyword) == -1) {
        histories.push(newKeyword);
        setSearchQueries([...searchQueries, newKeyword]);
      }
      router.push(`/search/${newKeyword}`);
      setKeyword('');
    }
  };

  return (
    <>
      <Container>
        <HeaderContainer fixed={fixed}>
          <NavbarLeft gap="46px">
            <Hamburger onClick={() => setToggle(!toggle)} />
            <LogoSmall />
          </NavbarLeft>

          <Flex gap="8px">
            <SearchContent>
              <NavbarInput
                value={keyword}
                placeholder="Enter a search"
                onClick={() => setPopup(true)}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={handleEnter}
              />

              {popup && (
                <Popover
                  title="Search History"
                  list={searchQueries}
                  onSetPopup={() => setPopup(false)}
                  popup={popup}
                />
              )}
            </SearchContent>

            <NavbarRight isLogin={isLogin} />
          </Flex>
        </HeaderContainer>
      </Container>
      <SidebarNav toggle={toggle} onToggle={setToggle} />
    </>
  );
};

export default Navbar;
