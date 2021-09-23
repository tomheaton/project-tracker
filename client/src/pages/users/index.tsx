import {useRouter} from "next/router";

const User = () => {

    const router = useRouter()
    const { userId } = router.query

    return (
        <>
            <h1>Users: {userId}</h1>
        </>
    );
}

export default User;