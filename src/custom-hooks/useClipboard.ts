import { useState } from "react"

const useClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async(text: string) => {
        try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return { copyToClipboard, copied };
}

export default useClipboard;