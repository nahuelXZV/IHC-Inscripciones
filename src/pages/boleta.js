import Layout from 'components/layout';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";
import { useRouter } from 'next/router';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

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
                <td className="text-sm font-normal text-black ">{usuarioAutenticado?.registro}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Estudiante</td>
                <td className="text-sm font-normal text-black">{usuarioAutenticado?.apellido + ' ' + usuarioAutenticado?.nombre}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Carrera</td>
                <td className="text-sm font-normal text-black">{usuarioAutenticado?.carrera}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Gestion</td>
                <td className="text-sm font-normal text-black">1/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
        {
          inscripciones.length > 0 ? <Table size="small" aria-label="teachers">
            <TableHead className='bg-gray-200'>
              <TableRow>
                <TableCell className='font-bold w-30'>Sigla</TableCell>
                <TableCell className='font-bold w-10' >Grupo</TableCell>
                <TableCell className='font-bold w-30' >Materia</TableCell>
                <TableCell className='font-bold w-30'>Docente</TableCell>
                <TableCell className='font-bold w-10'>Nivel</TableCell>
                <TableCell className='font-bold w-50'>Horario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                inscripciones.map((historyRow) => (
                  <TableRow key={historyRow.id}>
                    <TableCell >{historyRow.sigla}</TableCell>
                    <TableCell>{historyRow.docente.grupo}</TableCell>
                    <TableCell>{historyRow.materia}</TableCell>
                    <TableCell>{historyRow.docente.docente}</TableCell>
                    <TableCell>{historyRow.nivel}</TableCell>
                    <TableCell>{historyRow.docente.horario}</TableCell>
                  </TableRow>
                ))}
              <br />
            </TableBody>
          </Table>
            :
            <div className=''>
              <Table size="small" aria-label="teachers">
                <TableHead className='bg-gray-200'>
                  <TableRow>
                    <TableCell className='font-bold w-30' align='center'>Sigla</TableCell>
                    <TableCell className='font-bold w-10' align='center'>Grupo</TableCell>
                    <TableCell className='font-bold w-30' align='center'>Materia</TableCell>
                    <TableCell className='font-bold w-30' align='center'>Docente</TableCell>
                    <TableCell className='font-bold w-10' align='center'>Nivel</TableCell>
                    <TableCell className='font-bold w-50' align='center'>Horario</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <p >No hay materias inscritas...</p>
            </div>
        }
      </div>
    </Layout >
  )
}
