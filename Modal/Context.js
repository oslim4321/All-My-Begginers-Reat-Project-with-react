import React, { useState, useContext } from "react";
import QuestData from '../QuestionAnswer/QuestData'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebaropen, setisSidebaropen] = useState(false)
    const [isModalOpen, setisModalOpen] = useState()
    const [Data, setData] = useState(QuestData)

    function opensidebar(){
        setisSidebaropen(true)
    }
    function closesidebar(){
        setisSidebaropen(false)
    }
    function closesidebar(){
        setisSidebaropen(false)
    }
    /* MODAL */
    function Openmodalset(){
        setisModalOpen(true)
    }
    function Closemodalset(){
        setisModalOpen(false)
    }
    function logData(Title,Id){
        console.log(Title, Id)
        console.log('cool                                                                                                                   ')
    }

    return <AppContext.Provider value={{
        opensidebar,
        closesidebar,
        isSidebaropen,
        // Modal
        Openmodalset,
        Closemodalset,
        isModalOpen,
        /* DATA */
        Data,
        logData

    }}
    >{children}</AppContext.Provider>
}
export const useGlobalContext=() => {
    return useContext(AppContext)
        
    }
export {AppContext, AppProvider}