import { useRouter } from "next/router"
import { useEffect } from "react";

export default function SelectedClient() {
    const router = useRouter();
    const navigateToDetails = () => {
        // router.push('/clients/tcs/1');
        router.push({
            pathname: '/clients/[id]/[clientProjectId]',
            query: { id: 'tcs', clientProjectId: '1' }
        });
    }
    useEffect(() => {
        console.log(router.query); 
    }, [router.query]);
    return (
        <div>
            <h1>The Selected Client Page for  {router.query.id}</h1>
            <button onClick={navigateToDetails}>Navigate to details</button>
        </div>
    )
}