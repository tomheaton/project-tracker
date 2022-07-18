import {NextPage} from "next";
import Head from "next/head";

const Bugs: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Bugs | Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            bugs
        </div>
    );
}

export default Bugs;