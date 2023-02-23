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
        }
    ];
    let rows = [];

    materias.map((materia) => {
        rows.push(createData(materia.id, materia.nivel, materia.sigla, materia.materia, materia.docentes));
    });

    function createData(id, nivel, sigla, materia, docentes) {
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
    console.log(rows);

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
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h7" gutterBottom component="div">
                                    Docentes disponibles
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left"></TableCell>
                                            <TableCell className='font-bold'>Grupo</TableCell>
                                            <TableCell className='font-bold'>Cupos</TableCell>
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
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </Fragment >
        );
    }

    return (
        <Layout title="Inscripcion">
            <div className="row mb-2">
                <h1 className="font-bold text-2xl text-black uppercase">Gestión 1/2023</h1>
            </div>
            {/* card w-full */}
            <Card className="w-full h-16 mt-8">
                <div className="row">
                </div>
            </Card>
            <Card className="w-full h-auto mt-4">
                <div className="row p-3">
                    <h6 className="font-bold text-lg text-black ">Selecciona tus materias</h6>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell className="font-bold">Nivel</TableCell>
                                <TableCell className="font-bold">Sigla</TableCell>
                                <TableCell className="font-bold">Materia</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

        </Layout >
    )
}
