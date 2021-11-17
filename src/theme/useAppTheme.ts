import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useAppTheme = () => {
  const themes = getFromLS('all-themes');
  const defaultTheme = 'theme1';
  const [theme, setTheme] = useState(themes.data[defaultTheme]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data[defaultTheme]);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};