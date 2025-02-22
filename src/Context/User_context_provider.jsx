import React, { useContext, useState } from 'react';
import UserContext from "./Context";
const User_context_provider = ({children}) => {
        
    const [open, setopen] = useState(null);
     console.log(open);
     



     





    return (
        <div>
            <UserContext.Provider value={setopen}>

            {children}

            </UserContext.Provider>
        </div>
    );
};

export default User_context_provider;