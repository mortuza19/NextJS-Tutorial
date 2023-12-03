import { useRouter } from "next/router"
import { useEffect } from "react";

// a component filed named with square bracket and ... are known as catch all route.
// it basically means it will catch all the paths after 'blog' here
// we can receive all those dynamic path using router.query as an array.
export default function BlogPosts() {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query); 
    }, [router.query]);
    return <h1>The Blog Posts Page</h1>
}