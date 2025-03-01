import { SocialIconLinkI } from "../../models/Common.model";

interface SocialIconLinkProps {
    iconLinkDescription: SocialIconLinkI
}


const SocialIconLink = ({ iconLinkDescription }: SocialIconLinkProps) => {

    return (
        <a href={iconLinkDescription.href}
            className={iconLinkDescription.className}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={iconLinkDescription.name}
            title={iconLinkDescription.name}
        >
            {iconLinkDescription.icon}
        </a>
    )
}

export default SocialIconLink;