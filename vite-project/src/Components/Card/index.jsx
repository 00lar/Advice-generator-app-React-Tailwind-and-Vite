import { PauseIconSVG } from "../Icons"
import { CardContext } from "../../Context"
import { useContext } from "react"

const Card = () => {
    const context = useContext(CardContext)
    console.log(context.item)

    const generate = () => {
        console.log("Hola")
        context.fetchRandomAdvice()
        context.fetchRandomAdvice()
    }

    return (
        <div className=" w-screen h-screen flex justify-center items-center">
        <div className=" w-11/12 h-auto max-w-md bg-Neutral1 rounded-2xl " >
            <div className="px-8">
                <div className="w-full h-72 py-4 relative flex flex-col justify-center text-center border-b border-Primary1">
                    <p className=" text-Primary2 text-sm tracking-[0.3rem] mt-8 mb-8">Advice # <span>{context.item.slip.id}</span></p>
                    <p className=" text-Primary1 text-3xl mb-6">"{context.item.slip.advice}"</p>
                    <PauseIconSVG></PauseIconSVG>
                </div>
                <div className=" w-full h-24 relative">
                <button
                className=" w-14 h-14 rounded-full bg-Primary2 absolute left-1/2 transform -translate-x-1/2 -bottom-8"
                onClick={() => generate()}
                >

        </button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export {Card}