import Link from "next/link";

export default function Clients() {
    return (
        <div>
            <h1>The Clients Home Page</h1>
            <ul>
                <li>
                    <Link href="clients/tcs">TCS</Link>
                </li>
                <li>
                    <Link href="clients/cts">CTS</Link>
                </li>
            </ul>
        </div>
    );
}
