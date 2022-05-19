import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";


interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [searchValue, setSearchValue] = useState('');
    const filteredRepositories = repositories.filter(repository => repository.name.includes(searchValue));

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
    }, [])

    return (
        <main className="text-zinc-900 bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 min-h-screen">
            <section className='mx-auto my-0 max-w-7xl '>
                <div className="flex py-8 justify-between ">
                    <h1 className="text-4xl" >Lista de repositórios</h1>
                    <input className="rounded focus:ring-offset-2 focus:ring-offset-zinc-900 border-transparent border-1 focus:ring-2 focus:ring-zinc-200 dark:focus:ring-emerald-300 px-4 py-2 outline-none text-zinc-700 bg-zinc-300 dark:text-zinc-100 dark:bg-zinc-700" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Buscar..."/>
                </div>
                <ul className="grid grid-cols-3 gap-8 pb-16">
                    {filteredRepositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository}/>
                    })}
                </ul>
            </section>
        </main>
    )
}