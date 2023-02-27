import { Luggage } from '@mui/icons-material';
import Layout from 'components/layout';
import Image from 'next/image';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";
import { useRouter } from 'next/router';


export default function Perfil() {
 
  const dataContext = useAppContext();
  const [usuarios, setUsuarios] = useState(dataContext.usuarios);
  const usuarioAutenticado = usuarios.find((usuario) => usuario.auth === 'true');
 

  return (
    <Layout title="Perfil">
      <div className="flex-col h-full rounded-lg w-full">
        <div className="h-1/2 rounded-lg w-full relative pb-2">
          <div className="w-full h-1/2 bg-azul rounded-t-lg"></div>
          <div className="w-full h-1/2 bg-white rounded-b-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full items-center justify-center flex-col text-center pt-20">
            <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width={40} height={40} alt="" className="w-20 h-20 m-auto rounded-full object-cover lg:w-32 lg:h-32" />
            <h1 className="hidden mt-3 text-xl font-semibold text-black lg:block"> {usuarioAutenticado.nombre + " "+usuarioAutenticado.apellido} </h1>
            <h1 className="hidden mt-1 text-lg font-bold text-black lg:block"> {usuarioAutenticado.carrera}</h1>
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
                  <td className="text-sm font-normal text-black ">{usuarioAutenticado.registro}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm ">Cedula de identidad</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.ci}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">Apellidos y nombres</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.apellido +' '+usuarioAutenticado.nombre}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">Fecha de nacimiento</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.fecha}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">Direccion</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.direccion}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">Celular</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.celular}</td>
                </tr>
                <tr>
                  <td className="font-bold text-sm">E-mail</td>
                  <td className="text-sm font-normal text-black">{usuarioAutenticado.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout >
  )
}
