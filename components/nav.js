import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useAppContext } from "../context/DataContext";
import { useState, useEffect, Fragment } from "react";

export default function Nav() {
    const router = useRouter();
    const path = router.pathname;
    var active = "md:px-4 md:py-2 text-azul";
    var inactive = "md:px-4 md:py-2 hover:text-blue-400";

    const dataContext = useAppContext();
    const [usuarios, setUsuarios] = useState(dataContext.usuarios);

    function cerrarSesion() {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].auth == 'true') {
                console.log('Cerrando sesion');
                usuarios[i].auth = 'false'
                setUsuarios(usuarios);
                console.log(usuarios[i]);
            }
        }
    }

    return (
        <div className="px-3 mt-2 2xl:container 2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-3 px-7">
                <nav className="flex justify-between">
                    <div className="-mx-6 px-6 mt-2">
                        <Link href='/' >
                            <Image src="/logoI.png" width={220} height={32} alt="logo" />
                        </Link>
                    </div>
                    <div className="text-gray-500 order-3 md:w-auto md:order-2 md:flex space-x-2">
                        <ul className="flex font-semibold justify-between">
                            {/* <Active Link = text-indigo-500 Inactive Link = hover:text-indigo-500*/}
                            <li className={path == '/perfil' ? active : inactive}><Link href="/perfil">Perfil</Link></li>
                            <li className={path == '/boleta' ? active : inactive}><Link href="/boleta">Boleta</Link></li>
                            <li className={path == '/inscripcion' ? active : inactive}><Link href="/inscripcion">Inscripción</Link></li>
                            <li className={path == '/adicion' ? active : inactive}><Link href="/adicion">Adición</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link href="/" onClick={cerrarSesion}>Cerrar Sesión</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}