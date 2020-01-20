import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Imprima|Roboto:400,500&display=swap');
	@import url('react-loader-spinner/dist/loader/css/react-spinner-loader.css');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	h1 {
		font-family: 'Imprima', sans-serif;
		font-weight: 400;
	}

	*:focus{
		outline:none;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const theme = {
  primary: '#000000',
  light: '#FFFFFF',
  gray: '#3A3A3A',
  mediumGray: '#BABABA',
  lightGray: '#EBEBEB',
  grayBackground: '#EAEAEA',
  dark: '#000000',
  primaryText: '#3a3a3a',
  error: '#C23A3A',
};
