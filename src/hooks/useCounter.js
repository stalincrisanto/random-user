import { useState } from "react";

export const useCounter = (initialState) => {
    const [ count, setCount ] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        setCount(count - 1);
    }

    return {
        count,
        handleAdd,
        handleSubstract
    }
}