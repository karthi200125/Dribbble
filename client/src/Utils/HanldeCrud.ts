// useHandleCrud.ts
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import AxiosRequest from "./AxiosRequest";

interface CrudProps {
    url: string;
    method: string;    
    successmsg?: string;
    data?: Record<string, unknown>;
    disp?: (data: any) => void;
}

const useHandleCrud = ({ url, method, data, successmsg, disp }: CrudProps) => {
    const [result, setResult] = useState<any>();
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);    
    const dispatch = useDispatch<any>();
    const token = localStorage.getItem("access_token")

    const Crud = async () => {
        try {
            setIsLoading(true);
            const res = await AxiosRequest({
                url,
                method,
                data,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setResult(res?.data);                        
            toast.success(`${successmsg}`);            
            if (disp) {
                dispatch(disp( res?.data ));
            }
        } catch (error: any) {
            setErr(error);
            toast.error(error.response.data.message );                        
        } finally {
            setIsLoading(false);
        }
    };
            
    return { result, err, isLoading, Crud };
};

export default useHandleCrud;
