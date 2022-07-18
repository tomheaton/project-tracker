import {NextPage} from "next";
import Head from "next/head";

const Users: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Users | Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            users
        </div>
    );
}

export default Users;