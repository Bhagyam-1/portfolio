import useClipboard from "../../custom-hooks/useClipboard";

interface CopyToClipboardIconsPropsI {
    icon: React.ReactElement,
    iconInfo: { link: string, className: string };
}

const CopyToClipboardIcons = ({ icon, iconInfo }: CopyToClipboardIconsPropsI) => {
    const { copyToClipboard, copied } = useClipboard();

    return (
        <>
            <button type="button" onClick={() => { copyToClipboard(iconInfo.link) }}
                className={`border-0 relative ${iconInfo.className}`}>
                {icon}

                {
                    copied &&
                    <span className="absolute top-[2rem] left-1/2 text-xs text-light-text dark:text-dark-text p-1 rounded transform-all -translate-x-1/2 
            opacity-100 translate-y-0 transition-all duration-300 delay-100">
                        Copied!
                    </span>
                }
            </button>
        </>
    )
}

export default CopyToClipboardIcons;