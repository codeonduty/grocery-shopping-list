// App.js --- Root React component

const React = require('react');
const { MuiThemeProvider, createMuiTheme } = require('material-ui/styles');
const { indigo, pink } = require('material-ui/colors');

const MainRouter = require('./MainRouter');
const { BrowserRouter } = require('react-router-dom');

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757de8',
            main: '#3f51b5',
            dark: '#002984',
            contrastText: '#fff',
        },

        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
        },

        openTitle: indigo['400'],
        protectedTitle: pink['400'],
        type: 'light'
    }
});

const App = () => (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <MainRouter/>
        </MuiThemeProvider>
    </BrowserRouter>
);

// App.js ends here
