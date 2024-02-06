import { useCallback, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../Redux/ModelSlice";

interface modelProp {
    title?: string;
    subtitle?: string;
    w?: string;
    bodyContent?: any;
}

const Model = ({ title, subtitle, bodyContent, w }: modelProp) => {

    const dispatch = useDispatch()
    const { model } = useSelector((state: any) => state.model)

    const handleModelClose = useCallback(() => {
        dispatch(closeModel());
    }, [dispatch]);

    return (
        <div className={`${model ? "" : "hidden"} model fixed w-full h-screen flex items-center justify-center left-0 top-0`}>
            <div className={`modelcon ${w ? w : "w-[500px]"} min-h-[200px] relative rounded-xl bg-white p-10`}>
                <div className="w-full h-full border-b-[1px] border-solid border-neutral-200 p-5">
                    <h1 className="text-2xl font-bold capitalize text-start">{title}</h1>
                    <p className="text-neutral-400 ">{subtitle}</p>
                    <span className="absolute right-3 top-3 cursor-pointer hover:opacity-50" onClick={handleModelClose}><IoMdClose size={20} /></span>
                </div>
                <div className="body w-full h-full p-3 flex flex-col gap-3">
                    {bodyContent}
                </div>
            </div>
        </div>
    )
}

export default Model