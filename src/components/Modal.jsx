import { IoClose } from "react-icons/io5"

const Modal = ({ children, handle, title }) => {
    return (
        <div className="w-screen h-screen fixed inset-0 z-[95] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handle}
            ></div>

            <div className="relative z-[99] w-full max-w-screen-lg bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex justify-between pb-1 border-b border-border-card">
                    <p className="font-semibold text-xl capitalize text-text-primary">{title}</p>
                    <button  onClick={handle} className="cursor-pointer">

                    <IoClose className="text-text-secondary text-xl"/>
                    </button>
                </div>
                <div className="py-2 text-text-primary max-h-[500px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
