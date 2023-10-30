import { BtnRandom } from "../BtnRandom"

const Card = () => {
    return (
        <div className=" w-screen h-screen flex justify-center items-center">
        <div className=" w-11/12 h-auto max-w-md bg-Neutral1 rounded-2xl " >
            <div>
                <div className="w-full flex flex-col justify-center text-center p-4 border-b border-Primary1">
                    <p className=" text-Primary2 text-sm tracking-[0.3rem] mt-8 mb-8">Advice # 117</p>
                    <p className=" text-Primary1 text-3xl mb-4">"It is easy to sit up and take notice, whats difficult is getting up an taking action"</p>
                </div>
                <div className=" w-full h-24 relative">
                    <BtnRandom/>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export {Card}