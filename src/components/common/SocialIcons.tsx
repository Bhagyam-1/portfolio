import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../../utility/constants";
import SocialIconLink from "./SocialIconLink";
import { SiLeetcode } from "react-icons/si";
import { MdMail } from "react-icons/md";
import { SocialIconInfoI, SocialIconLinkI } from "../../models/Common.model";
import CopyToClipboardIcons from "./CopyToClipboardIcon";
import { Fragment } from "react/jsx-runtime";
import { FaSquarePhone } from "react-icons/fa6";

const getIcon = (socialMedia: SocialIconInfoI) => {
    const clipboardClasses = `text-2xl hover:bg-light-text dark:hover:bg-dark-text dark:hover:text-dark-background hover:text-light-background rounded-sm p-1 h-fit`;
    const linkClasses = `inline-flex text-2xl hover:bg-light-text dark:hover:bg-dark-text dark:hover:text-dark-background hover:text-light-background rounded-sm p-1 h-fit`;

    switch (socialMedia.name) {
        case 'Github':
            return { icon: <FaGithub className="text-[1.35rem]" />, className: linkClasses }

        case 'Linkedin':
            return { icon: <FaLinkedin className="text-[1.35rem]" />, className: linkClasses }

        case 'Phone Number':
            return { icon: <CopyToClipboardIcons icon={<FaSquarePhone className="text-2xl" />} iconInfo={{ link: socialMedia, className: clipboardClasses }} /> }

        case 'E-Mail':
            return { icon: <CopyToClipboardIcons icon={<MdMail className="text-2xl" />} iconInfo={{ link: socialMedia, className: clipboardClasses }} /> }

        case 'Leetcode':
            return { icon: <SiLeetcode className="text-xl" />, className: linkClasses }

        default:
            return { icon: socialMedia.name, className: '' };
    }
}

const getIconLinkDescription = (socialLink: SocialIconInfoI) => {
    const { icon, className } = getIcon(socialLink);

    const iconLinkDescription: SocialIconLinkI = {
        href: socialLink.href,
        name: socialLink.name,
        icon: icon,
        className,
    };

    return iconLinkDescription;
}

const SocialIcons = () => {
    const copyToClipboardIcons = ['E-Mail', 'Phone Number'];

    return (
        <ul className="flex gap-4 h-fit">
            {
                socialLinks.map((socialLink: SocialIconInfoI) => {
                    const iconLinkDescription = getIconLinkDescription(socialLink);

                    return (
                        <Fragment key={socialLink.name}>
                            {
                                !copyToClipboardIcons.includes(socialLink?.name) ? (
                                    <li key={socialLink.name}>
                                        <SocialIconLink
                                            iconLinkDescription={iconLinkDescription}
                                        />
                                    </li>
                                ) : iconLinkDescription?.icon
                            }
                        </Fragment>
                    );
                })
            }
        </ul>
    )
}

export default SocialIcons;