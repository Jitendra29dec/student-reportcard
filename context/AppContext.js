import { settings } from 'config';
import { createContext, useReducer } from 'react';
import useToggleStylesheet from 'hooks/useToggleStyle';
import { configReducer } from 'reducers/configReducer';
import { getItemFromStore } from 'helpers/utils/storage';

export const AppContext = createContext({
  config: settings,
  setConfig: () => {},
  configDispatch: () => {}
});

const AppProvider = ({ children }) => {
  const configState = {};

  if (typeof window !== 'undefined') {
    configState['isFluid'] = getItemFromStore('isFluid', settings.isFluid);
    configState['isRTL'] = getItemFromStore('isRTL', settings.isRTL);
    configState['isDark'] = getItemFromStore('isDark', settings.isDark);
    configState['navbarPosition'] = getItemFromStore(
      'navbarPosition',
      settings.navbarPosition
    );
    configState['navbarStyle'] = getItemFromStore(
      'navbarStyle',
      settings.navbarStyle
    );
    configState['isNavbarVerticalCollapsed'] = getItemFromStore(
      'isNavbarVerticalCollapsed',
      settings.isNavbarVerticalCollapsed
    );
    configState['navbarStyle'] = getItemFromStore(
      'navbarStyle',
      settings.navbarStyle
    );
    configState['currency'] = settings.currency;
    configState['showBurgerMenu'] = settings.showBurgerMenu;
    configState['showSettingPanel'] = false;
    configState['navbarCollapsed'] = false;
  }

  const [config, configDispatch] = useReducer(configReducer, configState);

  const setConfig = (key, value) => {
    configDispatch({
      type: 'SET_CONFIG',
      payload: {
        key,
        value,
        setInStore: [
          'isFluid',
          'isRTL',
          'isDark',
          'navbarPosition',
          'isNavbarVerticalCollapsed',
          'navbarStyle'
        ].includes(key)
      }
    });
  };

  useToggleStylesheet(config.isRTL, config.isDark, configDispatch);

  return (
    <AppContext.Provider value={{ config, setConfig, configDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
