import { createContext, useState} from "react"
import { url } from "../Api";
import { useEffect } from "react";

const CardContext = createContext();

const CardContextProvider = ({children}) => {

    const [item,setItem] = useState([{
        id: "117",
        advice: "It is easy to sit up and take notice, whats difficult is getting up an taking action"
    }])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setItem(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); 
    }, []); 

    return (
        <CardContext.Provider
        value = {{
            item,
            setItem,
        }}>
            {children}
        </CardContext.Provider>
    )
}

export {CardContext, CardContextProvider}