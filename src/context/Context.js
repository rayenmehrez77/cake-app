import React, {useState, useEffect } from "react"; 

import axios from "axios"; 

const APP_KEY = "a3ebdd55d602c17ef048d6d174bd6314"; 
const APP_ID = "70c9c027"; 

const rootUrl = `https://api.edamam.com/search?q=cakes&app_id=${APP_ID}&app_key=${APP_KEY}`; 


const EdamamContext = React.createContext(); 

const EdamamProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    // Request loading
    // const [request, setRequest] = useState(0)
    // const [isLoading, setIsloading] = useState(false); 
    // const [error, setError] = useState(false); 


    const fetchData = async () => {
        await axios.get(rootUrl).then(({ data} ) => {
            setRecipes(data.hits); 
        }).catch(error => console.log(error))
    }

    useEffect(() => fetchData(), [])  
    
    return (
        <EdamamContext.Provider value={{recipes}}>
                {children}
        </EdamamContext.Provider>
    )
}


export { EdamamContext, EdamamProvider}