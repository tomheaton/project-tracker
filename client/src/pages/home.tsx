import {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home | Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            home
        </div>
    );
}

export default Home;