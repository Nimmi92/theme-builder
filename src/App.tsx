import React, { useEffect, useState }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from './client/pages/Home/Home';
import * as themes from './theme/schema.json';
import { useTheme } from './theme/useTheme';
import { setToLS } from './utils/storage';

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.specs.fontFamily};
    font-size: ${({ theme }) => theme.specs.fontSize};
    background: ${({ theme }) => theme.specs.body};
    color: ${({ theme }) => theme.specs.color};
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
  }
  h1 {
    text-align: center;
  }
`;

const App: React.FC = () => {

  setToLS('all-themes', themes);

  const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
  
	useEffect(() => {
	  setSelectedTheme(theme);
	 }, [themeLoaded]);

	return (
		<BrowserRouter>
      {
        themeLoaded && 
        <ThemeProvider theme={ selectedTheme }>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <GlobalStyle/>
        </ThemeProvider>
      }
		</BrowserRouter>
	)
}

export default App