import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableContainer from '@mui/material/TableContainer';
import { useAppContext } from "../../context/DataContext";
import { useState, useEffect, Fragment } from "react";
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import AlertDialog from 'components/confirm';
import Message from 'components/message';
import Horario from 'components/horario';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import Layout from 'components/layout';
import Card from '@mui/material/Card';
import Input from 'components/input';
import Box from '@mui/material/Box';
import * as React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Adicion() {
  // obtenemos los datos de la base de datos local
  const dataContext = useAppContext();
  const [materias, setMaterias] = useState(dataContext.materias);
  const [boleta, setBoleta] = useState(dataContext.boleta);
  const [inscripciones, setInscripciones] = useState(dataContext.inscripciones);
  const [horario, setHorario] = useState(dataContext.horario);
  const [cantIns, setCantIns] = useState(dataContext.cantIns);
  const [cantLev, setCantLev] = useState(dataContext.cantLev);
  const [isInscripcion, setIsInscripcion] = useState(dataContext.isInscripcion);
  const [busqueda, setBusqueda] = useState('');

  // styles the table
  var normal = 'cursor-pointer select-none';
  var levantamiento = 'cursor-pointer select-none bg-rose-100';
  var casoEspecial = 'cursor-pointer select-none bg-blue-200';

  // verificamos si ya inscribimos
  if (isInscripcion) {
    return (<Layout title="Adicion">
      <Message />
    </Layout>)
  }

  // verificamos si hay datos en la base de datos local
  if (!materias) return (<Layout title="Adicion">
    <div className="flex flex-row items-center mb-2 mt-2">
      <h1 className="text-2xl font-bold ml-4">Gestion 2/2023</h1>
    </div>
    <div className="flex flex-row items-center mb-2 mt-2">
      <h2 className="text-xl font-bold ml-4">Cargando...</h2>
      <div className="ml-4 text-black">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      </div>
    </div>
  </Layout>)

  // funciones para mostrar la tabla 
  let rows = [];
  materias.map((materia) => {
    rows.push(createData(materia.id, materia.nivel, materia.sigla, materia.materia, materia.observacion, materia?.docentes));
  });

  function createData(id, nivel, sigla, materia, observacion, docentes = []) {
    let listaMaterias = [];
    docentes.forEach((docente) => {
      let doc = {
        id: docente.id,
        grupo: docente.grupo,
        cupos: docente.cupos,
        docente: docente.docente,
        horario: docente.horario,
        dias: docente.dias,
        check: false
      }
      listaMaterias.push(doc);
    })
    return { id, nivel, sigla, materia, observacion, listaMaterias };
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    return (
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)} className={styleMessage(row.observacion)}>
          <TableCell>{row.nivel}</TableCell>
          <TableCell>{row.sigla}</TableCell>
          <TableCell className='font-bold'>
            {row.materia}
            {row.observacion == 'Levantamiento' ? <span className="bg-blue-400 text-white font-bold rounded-full px-2 py-1 ml-2">Levantamiento</span> : ''}
            {row.observacion == 'Caso Especial' ? <span className="bg-blue-400 text-white font-bold rounded-full px-2 py-1 ml-2">Caso Especial</span> : ''}
          </TableCell>
          <TableCell>
            <IconButton aria-label="expand row" size="small" >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 1 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 0 }}>
                <Table size="small" aria-label="teachers">
                  <TableHead>
                    <TableRow>
                      <TableCell className='font-bold w-10' align='center'>Grupo</TableCell>
                      <TableCell className='font-bold w-10' align='center'>Cupos</TableCell>
                      <TableCell className='font-bold w-52'>Docente</TableCell>
                      <TableCell className='font-bold'>Horario</TableCell>
                      <TableCell className='w-12' align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      row.listaMaterias.map((historyRow) => (
                        <TableRow key={historyRow.id}>
                          <TableCell align='center'>{historyRow.grupo}</TableCell>
                          <TableCell align='center'>{historyRow.cupos}</TableCell>
                          <TableCell>{historyRow.docente}</TableCell>
                          <TableCell>{historyRow.horario}</TableCell>
                          <TableCell align="center">
                            {
                              historyRow.check ?
                                <CheckBoxIcon onClick={(value) => addMateria(row, historyRow)} fontSize="small" color="primary" /> :
                                <CheckBoxOutlineBlankIcon onClick={(value) => addMateria(row, historyRow)} fontSize="small" color="primary" />
                            }

                          </TableCell>
                        </TableRow>
                      ))}
                    <br />
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment >
    );
  }
  const [listMaterias, setListMaterias] = useState(rows);

  // funciones para manejar el horario
  function validate(materia, docente) {
    // validamos la cantidad de inscripciones
    if (cantIns >= 7) {
      alert("Limite maximo de materias seleccionadas alcanzado");
      return false;
    }

    // validamos la cantidad de levantamientos
    if (materia.observacion == 'Levantamiento') {
      if (cantLev >= 2) {
        alert("Limite maximo de levantamientos alcanzado");
        return false;
      }
    }
    // validamos la cantidad de casos especiales

    return true;
  }

  function addMateria(materia, docente) {
    let existe = false;
    let mismoDocente = false;
    let choque = false;

    // hacemos todas las validaciones
    if (!validate(materia, docente)) {
      return;
    }

    // varificamos si la materia ya esta en la lista de inscripciones y si el docente es el mismo
    inscripciones.forEach((inscripcion) => {
      if (inscripcion.id == materia.id) {
        existe = true;
        if (inscripcion.docente.id == docente.id) {
          mismoDocente = true;
        }
        return;
      }
    })

    // si la materia ya esta en la lista de inscripciones, la eliminamos de la lista
    if (existe) {
      if (mismoDocente) {
        let inscripcionesTemp = [];
        inscripciones.forEach((inscripcion) => {
          if (inscripcion.id != materia.id) {
            inscripcionesTemp.push(inscripcion);
          }
        })
        setInscripciones(inscripcionesTemp);    // actualizamos la lista de inscripciones
        setCantIns(cantIns - 1);            // actualizamos la cantidad de inscripciones
        materia.observacion == 'Levantamiento' ? setCantLev(cantLev - 1) : null;    // actualizamos la cantidad de levantamientos

        // eliminamos la materia del horario
        let horarioTemp = horario;
        horarioTemp.forEach((slot, index) => {
          if (slot.lunes.length > 0 && slot.lunes[0].id == materia.id) {
            slot.lunes.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.lunes.splice(index, 1);
              }
            })
          }
          if (slot.martes.length > 0) {
            slot.martes.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.martes.splice(index, 1);
              }
            })
          }
          if (slot.miercoles.length > 0 && slot.miercoles[0].id == materia.id) {
            slot.miercoles.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.miercoles.splice(index, 1);
              }
            })
          }
          if (slot.jueves.length > 0 && slot.jueves[0].id == materia.id) {
            slot.jueves.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.jueves.splice(index, 1);
              }
            })
          }
          if (slot.viernes.length > 0 && slot.viernes[0].id == materia.id) {
            slot.viernes.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.viernes.splice(index, 1);
              }
            })
          }
          if (slot.sabado.length > 0 && slot.sabado[0].id == materia.id) {
            slot.sabado.forEach((materia, index) => {
              if (materia.id == materia.id) {
                slot.sabado.splice(index, 1);
              }
            })
          }
        })
        setHorario(horarioTemp);    // actualizamos el horario
        handlerCheck(false, materia, docente); // actualizamos el check de la materia
      } else {
        handlerCheck(false, materia, docente); // actualizamos el check de la materia
        alert('La materia ' + materia.materia + ' ya esta registrada con otro docente, desmarque la otra opcion.');
      }
    } else {
      var dataHorario = { // creamos la data para agregar al horario
        id: materia.id,
        nivel: materia.nivel,
        sigla: materia.sigla,
        grupo: docente.grupo,
      };
      // recorremos la data del docente para agregarla al horario
      var tempHorario = horario;
      docente.dias.forEach((dia) => {
        if (choque) {
          return;
        }
        tempHorario.forEach((slot, index) => {
          if (slot.horaInicio == dia.horaInicio) {
            if (dia.dias == 'Lunes') {
              if (slot.lunes.length == 0) {
                tempHorario[index].lunes.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Lunes a las ' + slot.horaInicio + ' con la materia ' + slot.lunes[0].sigla + '-' + slot.lunes[0].grupo);
                choque = true;
                return;
              }
            }
            if (dia.dias == 'Martes') {
              if (slot.martes.length == 0) {
                tempHorario[index].martes.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Martes a las ' + slot.horaInicio + ' con la materia ' + slot.martes[0].sigla + '-' + slot.martes[0].grupo);
                choque = true;
                return;
              }
            }
            if (dia.dias == 'Miercoles') {
              if (slot.miercoles.length == 0) {
                tempHorario[index].miercoles.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Miercoles a las ' + slot.horaInicio + ' con la materia ' + slot.miercoles[0].sigla + '-' + slot.miercoles[0].grupo);
                choque = true;
                return;
              }
            }
            if (dia.dias == 'Jueves') {
              if (slot.jueves.length == 0) {
                tempHorario[index].jueves.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Jueves a las ' + slot.horaInicio + ' con la materia ' + slot.jueves[0].sigla + '-' + slot.jueves[0].grupo);
                choque = true;
                return;
              }
            }
            if (dia.dias == 'Viernes') {
              if (slot.viernes.length == 0) {
                tempHorario[index].viernes.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Viernes a las ' + slot.horaInicio + ' con la materia ' + slot.viernes[0].sigla + '-' + slot.viernes[0].grupo);
                choque = true;
                return;
              }
            }
            if (dia.dias == 'Sabado') {
              if (slot.sabado.length == 0) {
                tempHorario[index].sabado.push(dataHorario);
              } else {  // si el slot ya tiene una materia, es un choque de horario
                alert('Choque de horario en el dia Sabado a las ' + slot.horaInicio + ' con la materia ' + slot.sabado[0].sigla + '-' + slot.sabado[0].grupo);
                choque = true;
                return;
              }
            }
          }
        });
      });
      if (choque) {
        return;
      }
      var data = {    // creamos la data para agregar a la lista de inscripciones
        id: materia.id,
        nivel: materia.nivel,
        sigla: materia.sigla,
        materia: materia.materia,
        observacion: materia.observacion,
        docente: docente,
      }
      var temp = inscripciones;
      temp.push(data);    // agregamos la materia a la lista de inscripciones
      setInscripciones(temp); // actualizamos la lista de inscripciones


      setHorario(tempHorario);    // actualizamos el horario
      setCantIns(cantIns + 1);    // actualizamos la cantidad de inscripciones
      materia.observacion == 'Levantamiento' ? setCantLev(cantLev + 1) : null;    // actualizamos la cantidad de levantamientos

      handlerCheck(true, materia, docente); // actualizamos el check de la materia
    }
  }

  function handlerCheck(value, materia, docente) {
    var temp2 = listMaterias;
    temp2.forEach((materia2, index) => {
      if (materia2.id == materia.id) {
        console.log('entro' + JSON.stringify(materia2));
        materia2.listaMaterias.forEach((docente2, index2) => {
          if (docente2.id == docente.id) {
            temp2[index].listaMaterias[index2].check = value;
          }
        })
      }
    });
    setListMaterias(temp2);
  }

  // funciones adicionales
  function styleMessage(observacion) {
    switch (observacion) {
      case 'Levantamiento':
        return levantamiento;
      case 'Caso Especial':
        return casoEspecial;
      default:
        return normal;
    }
  }

  function search() {
    if (busqueda == '') {
      setListMaterias(rows);
    } else {
      var temp = rows;
      var temp2 = temp.filter((materia) => {
        return materia.sigla.toLowerCase().includes(busqueda.toLowerCase()) || materia.materia.toLowerCase().includes(busqueda.toLowerCase())
      });
      setListMaterias(temp2);
    }
  }

  function obtenerTexto() {
    var texto = document.getElementById('search').value;
    setBusqueda(texto);
  }


  return (
    <Layout title="Adición">
      <div className='basis-[60%] h-auto overflow-y-auto bg-white'>
        <div className="basis-[65%] w-full h-auto">
          <Card className="w-full h-14 mb-1">
            <div className="flex justify-between">
              <div className='p-2'>
                <div className="xl:w-96">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="search" id="search" name="search"
                      className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-gray"
                      placeholder="Buscar..." aria-label="Search" aria-describedby="button-addon1"
                      onBlur={() => { obtenerTexto() }} />
                    <button
                      className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white border border-solid border-primary outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow-te-primary"
                      type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light" onClick={() => { search() }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="bg-black" className="h-5 w-5">
                        <path
                          fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <AlertDialog type='adición' />
              </div>
            </div>
          </Card>
          <div className="px-3 py-2">
            <h6 className="font-bold text-lg text-black ">Selecciona tus materias</h6>
          </div>
          <div className='mb-4'>
            <TableContainer component={Paper} className='p-2'>
              <Table aria-label="collapsible table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-bold text-base w-36">Nivel</TableCell>
                    <TableCell className="font-bold text-base w-36" >Sigla</TableCell>
                    <TableCell className="font-bold text-base">Materia</TableCell>
                    <TableCell className='w-24' />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listMaterias.map((row) => (
                    <Row key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div >
      <div className='basis-[40%] ml-2 bg-white px-2'>
        <div className='py-3'>
          <h6 className="font-bold text-lg text-black text-center">HORARIO</h6>
          <div className='flex justify-start'>
            <p className='text-sm mr-2'>Materias Seleccionadas:</p>
            <p className='text-sm'>{cantIns}</p>
          </div>
        </div>
        <Horario />
      </div>
    </Layout >
  )
}
