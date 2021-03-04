import { useRouter } from 'next/router';
import { useState } from 'react';

import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import { HighlightColor } from '@/components/global/Text';
import Container from '@/components/global/Container';

import Input from '@/components/global/Input';
import { LogoBig } from '@/components/global/Logo';
import AuthModal from '../../../HOC/AuthModal';
import Toast from '../../global/Alert';

import { useToast } from '../../../context/ToastProvider';

import {
  NavbarContainer,
  HeroTitle,
  HeaderContent,
  HeaderContainer,
  NavbarButton,
  ButtonContainer,
  HeaderForm,
} from './HeaderStyles';

const Header = ({ signin, signup }) => {
  const router = useRouter();

  const { toastData, toast } = useToast();



  const [keyword, setKeyword] = useState('');

  const HandleInput = (e) => {
    setKeyword(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search/${keyword}`);
  };

  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoBig />

        <NavbarButton>
          <ButtonTertiary onClick={() => signup(true)}>Sign Up</ButtonTertiary>
          <ButtonTertiary onClick={() => signin(true)}>Sign In</ButtonTertiary>
        </NavbarButton>
      </NavbarContainer>
      <Container>
        {toast && <Toast {...toastData} />}
        <HeaderContent>
          <HeroTitle>
            Looking for the perfect
            <HighlightColor> freelance services </HighlightColor>
            for your business?
          </HeroTitle>
          <HeaderForm onSubmit={HandleSubmit}>
            <Input
              type="text"
              placeholder="Try logo design"
              value={keyword}
              onChange={HandleInput}
            />
          </HeaderForm>

          <ButtonContainer>
            <ButtonPrimary onClick={() => router.push('/account/sign-up')}>
              Sign up
            </ButtonPrimary>
            <ButtonTertiary onClick={() => router.push('/account/sign-in')}>
              login
            </ButtonTertiary>
          </ButtonContainer>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};

export default AuthModal(Header);
