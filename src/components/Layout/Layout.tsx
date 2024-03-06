import React from 'react'
import { useSession } from 'next-auth/react'
import scss from './Layout.module.scss'
import SideMenu from '../SideMenu'
import Head from 'next/head'

const Layout = (props: any) => {
    const { data: session } = useSession()
    return (
        <>
            <Head>
                <title>Data Dashboard</title>
                <meta name="description" content="Data Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={scss.Layout}>
                {session && <SideMenu />}
                {props.children}
            </main>
        </>
    )
}

export default Layout