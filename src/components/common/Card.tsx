import { forwardRef } from "react";
import { CardInfoI } from "../../models/Common.model";

interface CardProps {
    cardInfo: CardInfoI,
}

const Card = forwardRef<HTMLElement, CardProps>(
    ({ cardInfo }, ref) => {
        return (
            <article ref={ref} aria-labelledby={`card-header-${cardInfo.header.replace(/\s+/g, '-').toLowerCase()}`} className="flex flex-col gap-3 p-6 bg-light-primary-alt dark:bg-dark-secondary-alt 
                rounded-lg text-light-tertiary dark:text-dark-tertiary"
            >
                <h2 id={`card-header-${cardInfo.header.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl font-semibold text-dark-primary dark:text-light-text">{cardInfo.header}</h2>
                <ul className="list-disc list-inside">
                    {cardInfo.list.map((listInfo) => <li key={listInfo}>{listInfo}</li>)}
                </ul>
            </article>
        )
    }
)

export default Card;