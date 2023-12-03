import { useRouter } from "next/router"
import { useEffect } from "react";

export default function SelectedClientProject() {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query); 
    }, [router.query]);
    return <h1>The Selected Client Project Page {router.query.clientProjectId} for {router.query.id}</h1>
}