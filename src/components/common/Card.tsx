
const Card = ({ children }: { children: React.ReactElement[] }) => {
    return (
        <article className="flex flex-col gap-3 p-6 bg-light-primary-alt dark:bg-light-background-alt rounded-lg text-dark-secondary dark:text-light-text-alt">
            {children}
        </article>
    )
}

export default Card;