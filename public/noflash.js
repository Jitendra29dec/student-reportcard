(function initTheme() {
    const storageKey = 'isDark';
    const classNameDark = 'dark';
    const classNameLight = 'light';
  
    function setClassOnDocumentBody(darkMode) {
      document.querySelector('html').classList.add(darkMode ? classNameDark : classNameLight);
      document.querySelector('html').classList.remove(darkMode ? classNameLight : classNameDark);
    }
    
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(preferDarkQuery);
    const supportsColorSchemeQuery = mql.media === preferDarkQuery;
    let localStorageTheme = null;
    try {
      localStorageTheme = JSON.parse(localStorage.getItem(storageKey));
    } catch (err) {}
    const localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
      localStorageTheme = JSON.parse(localStorageTheme);
    }
  
    if (localStorageExists) {
      setClassOnDocumentBody(localStorageTheme);
    } else if (supportsColorSchemeQuery) {
      setClassOnDocumentBody(mql.matches);
      localStorage.setItem(storageKey, mql.matches);
    } else {
      const isDarkMode = document.body.classList.contains(classNameDark);
      localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
})()