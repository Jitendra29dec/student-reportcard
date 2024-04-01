import { useRouter } from 'next/router';
import Footer from 'components/footer/Footer';
import { AppContext } from 'context/AppContext';
import NavbarTop from 'components/navbar/top/NavbarTop';
import { useContext, useEffect, useState } from 'react';
import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';

const Layout = ({ Component, pageProps }) => {
  const [isMount, setIsMount] = useState(false);
  const context = useContext(AppContext);
  const router = useRouter();

  const {
    config: { navbarPosition }
  } = useContext(AppContext);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <div
      className={
        isMount && context.config.isFluid && router.pathname !== '/landing' && router.pathname !== '/'
          ? 'container-fluid'
          : router.pathname === '/landing'
          ? 'wrapper'
          : 'container'
      }
    >
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') &&
        router.pathname !== '/landing' && router.pathname !== '/' && <NavbarVertical />}
      <div className="content d-flex flex-column justify-content-between">
        <div>
          {router.pathname !== '/landing' && router.pathname !== '/' && <NavbarTop />}
          <Component {...pageProps} />
          <SettingsToggle />
          <SettingsPanel />
        </div>
        <div>{router.pathname !== '/landing' && router.pathname !== '/' && <Footer />}</div>
      </div>
    </div>
  );
};

export default Layout;
