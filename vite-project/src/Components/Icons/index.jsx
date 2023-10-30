import {PauseIcon} from "@heroicons/react/24/solid"

function PauseIconSVG () {
    return (
        <div className=" w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-Neutral1 flex justify-center items-center rounded-full text-white">
        <PauseIcon
            className="w-8 h-8 ">
        </PauseIcon>
        </div>

    )
}

export {PauseIconSVG}