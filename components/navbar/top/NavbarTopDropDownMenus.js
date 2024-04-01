import React, { useContext } from 'react';
import NavbarDropdown from './NavbarDropdown';
import {
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
} from 'routes/routes';
import { flatRoutes } from 'helpers/utils/route';
import NavbarDropdownApp from './NavbarDropdownApp';
import NavbarDropdownPages from './NavbarDropdownPages';
import NavbarDropdownModules from './NavbarDropdownModules';
import { AppContext } from 'context/AppContext';
import Link from 'next/link';
import classNames from 'classnames';

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };

  return (
    <>
      <NavbarDropdown title="dashboard">
        {dashboardRoutes.children[0].children.map(route => (
          <Link
            href={route.to}
            key={route.name}
            onClick={handleDropdownItemClick}
          >
            <a
              className={classNames('dropdown-item', {
                'link-600': route.active,
                'text-500': !route.active
              })}
            >
              {route.name}
            </a>
          </Link>
        ))}
      </NavbarDropdown>

      <NavbarDropdown title="app">
        <NavbarDropdownApp items={appRoutes.children} />
      </NavbarDropdown>

      <NavbarDropdown title="pages">
        <NavbarDropdownPages items={pagesRoutes.children} />
      </NavbarDropdown>
      <NavbarDropdown title="modules">
        <NavbarDropdownModules items={modulesRoutes.children} />
      </NavbarDropdown>

      <NavbarDropdown title="documentation">
        {flatRoutes(documentationRoutes.children).map(route => (
          <Link
            href={route.to}
            key={route.name}
            onClick={handleDropdownItemClick}
          >
            <a
              className={classNames('dropdown-item', {
                'link-600': route.active,
                'text-500': !route.active
              })}
            >
              {route.name}
            </a>
          </Link>
        ))}
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
