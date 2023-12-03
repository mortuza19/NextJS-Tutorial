import { useRouter } from "next/router"
import { useEffect } from "react";

export default function ProjectDetails() {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query);
    }, [ router.query ]);
    return <h1>The Project Details Page for {router.query.projectId}</h1>
}