import React from 'react';
import {contextPropTypes, contextType} from '../types/types'

export const AppContext = React.createContext<contextType>({
    showNavBar: false,
    handleCloseNavBar: () => {},
    handleOpenNavBar: () => {},
    showDetails: false,
    handleShowDetails: () => {},
    handleHideDetails: () => {}
});

const AppProvider : React.FC<contextPropTypes> = ({children}) => {

    const[showNavBar,setShowNavBar] = React.useState(false);
    const[showDetails,setShowDetails] = React.useState(false);

    const handleCloseNavBar = () => {
        setShowNavBar(false);
    }

    const handleOpenNavBar = () => {
        setShowNavBar(true);
    }

    const handleShowDetails = () => {
        setShowDetails(true);
    }

    const handleHideDetails = () => {
        setShowDetails(false);
    }

    const data : contextType = {
        showNavBar: showNavBar,
        handleOpenNavBar: handleOpenNavBar,
        handleCloseNavBar: handleCloseNavBar,
        showDetails: showDetails,
        handleShowDetails: handleShowDetails,
        handleHideDetails: handleHideDetails
    }

    return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
    )
};

export default AppProvider;