import { SocialIconLinkI } from "../../models/Common.model";

interface SocialIconLinkProps {
    iconLinkDescription: SocialIconLinkI
}


const SocialIconLink = ({ iconLinkDescription }: SocialIconLinkProps) => {

    return (
        <a href={iconLinkDescription.href}
            className={`hover:bg-light-text dark:hover:bg-dark-text dark:hover:text-dark-background hover:text-light-background rounded-sm p-1 ${iconLinkDescription.className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={iconLinkDescription.name}
        >
            {iconLinkDescription.icon}
        </a>
    )
}

export default SocialIconLink;