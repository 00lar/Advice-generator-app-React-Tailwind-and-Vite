import { createContext, useState} from "react"
import { url } from "../Api";
import { useEffect } from "react";

const CardContext = createContext();

const CardContextProvider = ({children}) => {

        const [item, setItem] = useState({
            slip: {
                id: "217",
                advice: "Take a while."
            }
        });

        const fetchRandomAdvice = async () => {
            try {
              const res = await fetch(url);
              const data = await res.json();
                setItem(data);;
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