import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import SettingsComponent from 'components/settings';
import { IsMobileContext } from 'context/IsMobile';

import { useAuth } from '../../context/AuthProvider';

const Settings = () => {
  const router = useRouter();
  const [isMobile] = useContext(IsMobileContext);
  const { isLogin } = useAuth();

  if (!isLogin) {
    typeof window !== 'undefined' && router.push('/');
  }

  useEffect(() => {
    if (!isMobile) {
      router.push('/settings/account-information');
    }
  }, [isMobile]);
  return <>{isMobile && <SettingsComponent />}</>;
};

export default Settings;
