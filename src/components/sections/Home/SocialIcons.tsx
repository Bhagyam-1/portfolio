import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../../../utility/constants";
import SocialIconLink from "../../common/SocialIconLink";
import { SiLeetcode } from "react-icons/si";
import { MdMail } from "react-icons/md";
import { SocialIconInfoI, SocialIconLinkI } from "../../../models/Common.model";

const getIcon = (socialMediaName: string) => {
    switch (socialMediaName) {
        case 'Github':
            return <FaGithub className="text-[1.35rem]" />

        case 'Linkedin':
            return <FaLinkedin className="text-[1.35rem]" />

        case 'Mail':
            return <MdMail className="text-2xl" />

        case 'Leetcode':
            return <SiLeetcode className="text-xl" />

        default:
            return socialMediaName;
    }
}

const getIconLinkDescription = (socialLink: SocialIconInfoI) => {
    const icon = getIcon(socialLink.name);

    const iconLinkDescription: SocialIconLinkI = {
        href: socialLink.href,
        name: socialLink.name,
        icon: icon,
        className: 'text-2xl',
    };

    return iconLinkDescription;
}

const SocialIcons = () => {

    return (
        <>
            {
                socialLinks.map((socialLink: SocialIconInfoI) => {
                    const iconLinkDescription = getIconLinkDescription(socialLink)

                    return (
                        <SocialIconLink
                            key={socialLink.name}
                            iconLinkDescription={iconLinkDescription}
                        />
                    );
                })
            }
        </>
    )
}

export default SocialIcons;