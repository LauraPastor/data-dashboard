import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return <>
            Signed in as {session?.user?.email} <br />
            <p>Signed in as {session?.user?.name}</p>
            <img src={session?.user?.image ?? ''} alt="user-img" />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Login