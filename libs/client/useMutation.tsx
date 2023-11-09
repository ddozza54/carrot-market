import { useState } from "react";

interface UseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];


//백엔드에 mutation 요청을 보내는 hook
export default function useMutation<T = any>(url: string): UseMutationResult<T> {
    const [state, setState] = useState<UseMutationState<T>>({
        loading: false,
        data: undefined,
        error: undefined
    })

    function mutation(data: any) {
        setState((prev) => ({ ...prev, loading: true }));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json().catch(() => { }))
            .then((data) => setState((prev) => ({ ...prev, data, loading: false })))
            .catch((error) =>
                setState((prev) => ({ ...prev, error, loading: false }))
            );
    }
    return [mutation, { ...state }];
}