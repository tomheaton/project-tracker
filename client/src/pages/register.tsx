import {NextPage} from "next";
import Head from "next/head";

const Register: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Register | Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            register
        </div>
    );
}

export default Register;