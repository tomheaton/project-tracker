import {NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import {useState} from "react";
import {UserType} from "@utils/types";

const Index: NextPage = () => {

    const [user, setUser] = useState<UserType>({username: "tomheaton"});

    return (
        <div className={"w-full min-h-screen"}>
            <Head>
                <title>Project Tracker</title>
                <meta name={"description"} content={"Project Tracker Application"}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>

            <main className={"w-full flex flex-col items-center justify-center"}>
                <h1 className={"font-bold text-5xl"}>
                    Welcome to the Project Tracker
                </h1>

                <div className={"grid grid-cols-1 lg:grid-cols-2"}>
                    <Link href={"/users"}>
                        <div className={""}>
                            <h2>
                                Users &rarr;
                            </h2>
                            <p>
                                View all users.
                            </p>
                        </div>
                    </Link>

                    <Link href={"/projects"}>
                        <div className={""}>
                            <h2>
                                Projects &rarr;
                            </h2>
                            <p>
                                View all projects.
                            </p>
                        </div>
                    </Link>

                    {user && user.username ? (
                        <>
                            <Link href={"/profile"}>
                                <div className={""}>
                                    <h2>
                                        My Profile &rarr;
                                    </h2>
                                    <p>
                                        View profile and manage account settings.
                                    </p>
                                </div>
                            </Link>
                            <Link href={"/api/logout"}>
                                <div className={""}>
                                    <h2>
                                        Logout &rarr;
                                    </h2>
                                    <p>
                                        Logout of the Project Tracker.
                                    </p>
                                </div>
                            </Link>
                        </>
                    ) : (
                        <a href={""} className={""}>
                            <h2>
                                Login &rarr;
                            </h2>
                            <p>
                                Login to the Project Tracker.
                            </p>
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Index;
