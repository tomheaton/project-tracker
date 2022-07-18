import {NextPage} from "next";
import Head from "next/head";

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Projects | Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            projects
        </div>
    );
}

export default Projects;