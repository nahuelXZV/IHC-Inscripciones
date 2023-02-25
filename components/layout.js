import Aside from "./aside";
import Nav from "./nav";
import Head from "next/head";
import Boton from "./boton";
import Input from "./input";

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/icono.png" />
            </Head>
            <div className="flex flex-col overflow-hidden h-screen bg-fondo">
                <Nav />
                <div className="px-3 py-2 bg-fondo h-screen overflow-hidden flex flex-row">
                    {children}
                </main>
            </div>
        </>
    );
}