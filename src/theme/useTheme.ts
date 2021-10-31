import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');

  const [theme, setTheme] = useState(themes.data.theme1);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.theme1);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};