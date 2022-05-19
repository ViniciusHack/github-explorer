interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <div className="shadow-xl h-full rounded bg-zinc-300 dark:bg-zinc-800 p-4 m-0 hover:scale-110 transition-all">
            <li>
                <strong className="text-xl">{props.repository.name}</strong>
                <p className="text-sm py-4">{props.repository.description}</p>
                <a className="dark:text-emerald-300 dark:hover:text-emerald-600 text-emerald-600 hover:text-emerald-300" href={props.repository.html_url}>Acessar repositório</a>
            </li>
        </div>
    )
}