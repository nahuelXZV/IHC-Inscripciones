import Layout from 'components/layout';
import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect, Fragment } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Horario from 'components/horario';

export default function Inscripcion() {
    const materias = [
        {
            id: 1,
            nivel: "1",
            sigla: "MAT-101",
            materia: "Matemática I",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
                {
                    id: 2,
                    grupo: "B",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }
            ]
        },
        {
            id: 2,
            nivel: "1",
            sigla: "MAT-102",
            materia: "Matemática II",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }, {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
            ]
        },
        {
            id: 2,
            nivel: "1",
            sigla: "MAT-102",
            materia: "Matemática II",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }, {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
            ]
        },
        {
            id: 2,
            nivel: "1",
            sigla: "MAT-102",
            materia: "Matemática II",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }, {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
            ]
        }, {
            id: 2,
            nivel: "1",
            sigla: "MAT-102",
            materia: "Matemática II",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }, {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
            ]
        }, {
            id: 2,
            nivel: "1",
            sigla: "MAT-102",
            materia: "Matemática II",
            docentes: [
                {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                }, {
                    id: 1,
                    grupo: "A",
                    cupos: 20,
                    docente: "Juan Perez",
                    horario: "Lunes 8:00 - 10:00"
                },
            ]
        },
    ];
    let rows = [];

    materias.map((materia) => {
        rows.push(createData(materia.id, materia.nivel, materia.sigla, materia.materia, materia?.docentes));
    });

    function createData(id, nivel, sigla, materia, docentes = []) {
        let listaMaterias = [];
        docentes.forEach((docente) => {
            let doc = {
                id: docente.id,
                grupo: docente.grupo,
                cupos: docente.cupos,
                docente: docente.docente,
                horario: docente.horario,
            }
            listaMaterias.push(doc);
        })
        return { nivel, sigla, materia, listaMaterias };
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = useState(false);
        return (
            <Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell>{row.nivel}</TableCell>
                    <TableCell>{row.sigla}</TableCell>
                    <TableCell className='font-bold'>{row.materia}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 1 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='w-24' align="left"></TableCell>
                                            <TableCell className='font-bold w-24'>Grupo</TableCell>
                                            <TableCell className='font-bold w-24'>Cupos</TableCell>
                                            <TableCell className='font-bold'>Docente</TableCell>
                                            <TableCell className='font-bold'>Horario</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            row.listaMaterias.map((historyRow) => (
                                                <TableRow key={historyRow.id}>
                                                    <TableCell align="center">
                                                        {/* checkbox sin  */}
                                                        <input type="checkbox" className='bg-white ' />
                                                    </TableCell>
                                                    <TableCell >{historyRow.grupo}</TableCell>
                                                    <TableCell>{historyRow.cupos}</TableCell>
                                                    <TableCell>{historyRow.docente}</TableCell>
                                                    <TableCell>{historyRow.horario}</TableCell>
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

    function openModal() {
        console.log('open modal');
    }

    return (
        <Layout title="Inscripcion">
            <div className="row mb-2 mt-2">
                <h1 className="font-bold text-2xl text-black uppercase">Gestión 1/2023</h1>
            </div>

            <Card className="w-full h-16 mt-8">
                <div className="row">
                </div>
            </Card>

            <Card className="w-full h-auto mt-4">
                <div className="row p-3">
                    <h6 className="font-bold text-lg text-black ">Selecciona tus materias</h6>
                </div>
                <TableContainer component={Paper} className='p-2'>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='w-24' />
                                <TableCell className="font-bold text-base w-36">Nivel</TableCell>
                                <TableCell className="font-bold text-base w-36" >Sigla</TableCell>
                                <TableCell className="font-bold text-base">Materia</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.id} row={row} />
                            ))}
                            <TableRow><TableCell colSpan={10} /></TableRow>
                            <TableRow><TableCell colSpan={10} /></TableRow>
                            <TableRow><TableCell colSpan={10} /></TableRow>
                            <TableRow><TableCell colSpan={10} /></TableRow>
                            <TableRow><TableCell colSpan={10} /></TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <div className='m-4'>
                <br />
            </div>

            <div className="fixed bottom-0 right-0 p-4 cursor-pointer"  >
                <Card className='w-96 h-40 bg-white' onClick={openModal()} >
                    <Horario />
                </Card>
            </div >
        </Layout >
    )
}
