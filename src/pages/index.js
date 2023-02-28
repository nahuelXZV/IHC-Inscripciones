import Image from "next/image"
import * as React from 'react';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";
import { useRouter } from 'next/router';
import Layout from "components/layout";

export default function Home() {
    const dataContext = useAppContext();
    const [usuarios, setUsuarios] = useState(dataContext.usuarios);

    const usuarioAutenticado = usuarios.find((usuario) => usuario.auth === 'true');
    const router = useRouter();

    return (
        <Layout title="Perfil">
            <div className="flex-col h-full rounded-lg w-full">
                <div className="h-1/2 rounded-lg w-full relative pb-2">
                    <div className="w-full h-1/2 bg-azul rounded-t-lg"></div>
                    <div className="w-full h-1/2 bg-white rounded-b-lg"></div>
                    <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex-col text-center pt-20">
                        <Image src="/photo.avif" width={40} height={40} alt="" className="w-20 h-20 m-auto rounded-full object-cover lg:w-32 lg:h-32" />
                        <h1 className="hidden mt-3 text-xl font-semibold text-black lg:block"> {(usuarioAutenticado)? usuarioAutenticado.nombre + " " + usuarioAutenticado.apellido : 'Harry Styles'} </h1>
                        <h1 className="hidden mt-1 text-lg font-bold text-black lg:block"> {(usuarioAutenticado)? usuarioAutenticado.carrera : 'Ing. Informatica'}</h1>
                    </div>
                </div>

                <div className='h-1/2 rounded-lg pt-2 w-full'>
                    <div className="w-full h-full bg-white rounded-lg px-10 py-1">
                        <table className='border-spacing-10 h-full w-full'>
                            <tbody>
                                <tr>
                                    <td className="text-lg font-bold text-black">Datos personales</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">Registro</td>
                                    <td className="text-sm font-normal text-black ">{(usuarioAutenticado)? usuarioAutenticado.registro: '12345678'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm ">Cedula de identidad</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado.ci : '12345678'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">Apellidos y nombres</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado?.apellido + ' ' + usuarioAutenticado.nombre : 'Styles Harry'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">Fecha de nacimiento</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado.fecha : '01 de febrero de 1994'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">Direccion</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado.direccion : 'Avenida Reino Unido calle Londres'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">Celular</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado.celular : '69099517'}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold text-sm">E-mail</td>
                                    <td className="text-sm font-normal text-black">{(usuarioAutenticado)? usuarioAutenticado.email : 'harrystyles@gmail.com'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout >
    )

}
