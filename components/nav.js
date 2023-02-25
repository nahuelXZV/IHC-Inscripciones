import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
export default function Nav() {
    const router = useRouter();
    const path = router.pathname;
    var active = "md:px-4 md:py-2 text-azul";
    var inactive = "md:px-4 md:py-2 hover:text-blue-400";

    return (
        <div class="px-3 mt-2 2xl:container 2xl:mx-auto">
            <div class="bg-white rounded shadow-lg py-3 px-7">
                <nav class="flex justify-between">
                    <div className="-mx-6 px-6 mt-2">
                        <Link href='/' >
                            <Image src="/logoI.png" width={220} height={32} alt="logo" />
                        </Link>
                    </div>
                    <div class="text-gray-500 order-3 md:w-auto md:order-2 md:flex space-x-2">
                        <ul class="flex font-semibold justify-between">
                            {/* <Active Link = text-indigo-500 Inactive Link = hover:text-indigo-500*/}
                            <li className={path == '/' ? active : inactive}><Link href="/">Perfil</Link></li>
                            <li className={path == '/boleta' ? active : inactive}><Link href="/boleta">Boleta</Link></li>
                            <li className={path == '/inscripcion' ? active : inactive}><Link href="/inscripcion">Inscripcion</Link></li>
                            <li className={path == '/adicion' ? active : inactive}><Link href="/adicion">Adicion</Link></li>
                            <li class="md:px-4 md:py-2 hover:text-indigo-400"><Link href="#">Cerrar Sesión</Link></li>
                        </ul>
                    </div>
                    {/* <ul class="hidden md:flex flex-auto space-x-2">
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Collections</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Arts</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Space</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Game</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Utility</li>
                        <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Cards</li>
                    </ul> */}
                    {/* <div class="flex items-center pl-2">
                        <svg class="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div> */}
                </nav>
            </div>
        </div>
    )
}