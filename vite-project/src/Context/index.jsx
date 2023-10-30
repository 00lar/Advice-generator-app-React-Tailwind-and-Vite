import { createContext, useState} from "react"
import { url } from "../Api";
import { useEffect } from "react";

const CardContext = createContext();

const CardContextProvider = ({children}) => {

        const [item, setItem] = useState({
            slip: {
                id: "",
                advice: ""
            }
        });

        const fetchRandomAdvice = async () => {
            try {
              const res = await fetch(url);
              const data = await res.json();
              setTimeout(() => {
                setItem(data);
              }, 1000);
            } catch (error) {
              console.error(error);
            }
          };
        
          useEffect(() => {
            fetchRandomAdvice();
          }, []);

    return (
        <CardContext.Provider
        value = {{
            item,
            setItem,
            fetchRandomAdvice,
        }}>
            {children}
        </CardContext.Provider>
    )
}

export {CardContext, CardContextProvider}