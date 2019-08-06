import React from 'react';
import Homepage from './Homepage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <Homepage/>
            </MuiThemeProvider>

        );
    }
}
export default App;
