import Layout from 'components/layout';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";
import { useRouter } from 'next/router';

export default function Boleta() {

  const dataContext = useAppContext();
  const [usuarios, setUsuarios] = useState(dataContext.usuarios);
  const usuarioAutenticado = usuarios.find((usuario) => usuario.auth === 'true');
 

  return (
    <Layout title="Boleta">
      <div className="flex h-full rounded-lg w-full bg-white p-5">
        <div className='h-1/3 pl-5'>
          <table className='h-full w-full'>
            <tbody>
              <tr>
                <td className="text-lg font-bold text-black">Boleta de inscripcion</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Registro</td>
                <td className="text-sm font-normal text-black ">{usuarioAutenticado.registro}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Estudiante</td>
                <td className="text-sm font-normal text-black">{usuarioAutenticado.apellido+' '+usuarioAutenticado.nombre}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Carrera</td>
                <td className="text-sm font-normal text-black">{usuarioAutenticado.carrera}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Gestion</td>
                <td className="text-sm font-normal text-black">1/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout >
  )
}
