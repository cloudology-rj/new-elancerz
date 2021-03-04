import Image from 'next/image';

import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import { LogoImage } from '@/components/global/Logo';
import { HeaderThree, SmallText, Body } from '@/components/global/Text';
import Input from '@/components/global/Input';
import SearchOverlay from '../../sections/SearchOverlay/SearchOverlay';

import { IsMobileContext } from '../../../context/IsMobile';
import { useAuth } from '../../../context/AuthProvider';

const notAuthenticated = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About us',
    route: '/',
  },
  {
    name: 'Features',
    route: '/',
  },
  {
    name: 'Explore',
    route: '/explore',
  },
];

const authenticated = [
  {
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    name: 'Categories',
    route: '/explore',
  },
  {
    name: 'Milestones',
    route: '/project',
  },
  {
    name: 'Services',
    route: '/services',
  },
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'Messages',
    route: '/messages',
  },
  {
    name: 'Settings',
    route: '/settings',
  },
];

import {
  SidebarContainer,
  SidebarUl,
  SidebarFlex,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarButton,
  SidebarButtons,
  SidebarLink,
  SidebarOverlay,
} from './SidebarNavStyles';

const SidebarNav = ({ toggle, onToggle }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [links, setLinks] = useState(notAuthenticated);
  const { isLogin, logout } = useAuth();
  const router = useRouter();
  const [isMobile] = useContext(IsMobileContext);

  const switchPage = (route) => {
    onToggle(false);
    router.push(route);
  };

  useEffect(() => {
    if (isLogin) {
      setLinks(authenticated);
    } else {
      setLinks(notAuthenticated);
    }
  }, [isLogin]);

  const handleEnter = (event) => {
    if (event.key === 'Enter' || (event.keyCode === 13 && keyword === '')) {
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <>
      <SidebarOverlay toggle={toggle}>
        <SidebarContainer toggle={toggle}>
          <SidebarHeader>
            <SidebarButton onClick={() => onToggle(!toggle)}>
              <Image src="/icons/Close.svg" height="30px" width="30px" />
            </SidebarButton>
            <LogoImage />
          </SidebarHeader>

          <SidebarFlex>
            <SidebarContent>
              <SidebarUl>
                {links.map(({ name, route }) => (
                  <SidebarLink key={name} onClick={() => switchPage(route)}>
                    {name}
                  </SidebarLink>
                ))}
              </SidebarUl>

              <SmallText>
                Let’s find the perfect freelance service for you!
              </SmallText>
              <br />
              {isMobile ? (
                <Input
                  onClick={() => setToggleSearch(true)}
                  placeholder="Try Logo Design"
                />
              ) : (
                <Input
                  placeholder="Try Logo Design"
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyPress={handleEnter}
                />
              )}
            </SidebarContent>

            <SidebarFooter>
              {!isLogin ? (
                <SidebarButtons>
                  <ButtonPrimary
                    onClick={() =>
                      isMobile
                        ? switchPage('/account/sign-up')
                        : switchPage('/')
                    }
                  >
                    Sign up
                  </ButtonPrimary>

                  <ButtonSecondary
                    onClick={() =>
                      isMobile
                        ? switchPage('/account/sign-in')
                        : switchPage('/')
                    }
                  >
                    Login
                  </ButtonSecondary>
                </SidebarButtons>
              ) : (
                <ButtonPrimary onClick={() => logout()}>Log out</ButtonPrimary>
              )}

              <Body>2021 / elancerz. All rights reserved</Body>
            </SidebarFooter>
          </SidebarFlex>
        </SidebarContainer>
      </SidebarOverlay>
      {toggleSearch && <SearchOverlay onToggleSearch={setToggleSearch} />}
    </>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;
