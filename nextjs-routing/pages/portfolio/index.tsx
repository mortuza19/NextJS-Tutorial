import Link from "next/link";

export default function Portfolio() {
    const clientList = [
        {
            name: "Portfolio List",
            id: "list",
        },
        {
            name: "Sahil",
            id: "sahil",
        },
        {
            name: "Trina",
            id: "trina",
        },
    ];
    return (
        <div>
            <h1>The Portfolio Page</h1>
            <ul>
                {clientList.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/portfolio/[projectId]',
                            query: { projectId: client.id },
                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
