import Layout from 'components/layout';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Horario from 'components/horario';

export default function Boleta() {

  const dataContext = useAppContext();
  const [usuarios, setUsuarios] = useState(dataContext.usuarios);
  const usuarioAutenticado = usuarios.find((usuario) => usuario.auth === 'true');

  // obtenemos los datos de la base de datos local
  const [inscripciones, setInscripciones] = useState(dataContext.inscripciones);

  return (
    <Layout title="Boleta">
      <div className="flex-row h-full rounded-lg w-full bg-white p-5">
        <div className='h-1/3 pl-5'>
          <table className='h-full w-1/2'>
            <tbody>
              <tr>
                <td className="text-lg font-bold text-black">Boleta de inscripcion</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Registro</td>
                <td className="text-sm font-normal text-black ">{(usuarioAutenticado) ? usuarioAutenticado.registro : '12345678'}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Estudiante</td>
                <td className="text-sm font-normal text-black">{(usuarioAutenticado) ? usuarioAutenticado.apellido + ' ' + usuarioAutenticado.nombre : 'Harry Styles'}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Carrera</td>
                <td className="text-sm font-normal text-black">{(usuarioAutenticado) ? usuarioAutenticado.carrera : 'Ing. Informatica'}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Gestion</td>
                <td className="text-sm font-normal text-black">1/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='px-6 mt-4'>
          <Horario />
        </div>
      </div>
    </Layout >
  )
}
