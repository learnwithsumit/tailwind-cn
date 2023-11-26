import { useState } from "react";
import cn from "./lib/cn";

export default function Button({ className, ...restProps }) {
    const [loading, setLoading] = useState(false);

    return (
        <button
            className={cn(
                "bg-blue-500 text-white py-2 px-4 rounded",
                className,
                {
                    "bg-gray-500": loading,
                }
            )}
            onClick={() => setLoading((l) => !l)}
            {...restProps}
        >
            Be a good Human
        </button>
    );
}
