import { createContext } from "react";
//Added StoreContextProvider API in our project
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const contextValue = {
        food_list
        //We can access the food array anywhere
    }
        return(
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        )
    
}
export default StoreContextProvider;