// useHandleCrud.ts
import { useState } from "react";
import AxiosRequest from "./AxiosRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface CrudProps {
    url: string;
    method: string;
    nav?: string;
    successmsg?: string;
    data?: Record<string, unknown>;
    disp?: (data: any) => void;
}

const useHandleCrud = ({ url, method, data, nav, successmsg, disp }: CrudProps) => {
    const [result, setResult] = useState({});
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Crud = async () => {
        try {
            setIsLoading(true);
            const res = await AxiosRequest({
                url,
                method,
                data,
                headers: {
                    Authorization: `Bearer ${""}`,
                    'Content-Type': 'application/json',
                },
            });
            setResult(res.data);
            toast.success(`${successmsg}`);
            navigate(`${nav}`);
            if (disp) {
                dispatch(disp(res?.data));
            }
        } catch (error: any) {
            setErr(error);
            toast.error(error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return { result, err, isLoading, Crud };
};

export default useHandleCrud;
