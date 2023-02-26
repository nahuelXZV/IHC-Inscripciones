import { createContext, useContext, useState } from "react";

// datas
var DBmaterias = [
    {
        id: 1,
        nivel: "1",
        sigla: "MAT-101",
        materia: "Matemática I",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "A",
                cupos: 20,
                docente: "Juan Perez",
                horario: "Lunes 07:00 - 08:30, Miercoles 07:00 - 08:30, Viernes 07:00 - 08:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "07:00",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "07:45",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "07:00",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "07:45",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "07:00",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "07:45",
                    },

                ]
            },
            {
                id: 2,
                grupo: "B",
                cupos: 20,
                docente: "Juan Perez",
                horario: "Martes 7:00 - 9:15, Jueves 7:00 - 9:15",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "07:00",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "07:45",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "07:00",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "07:45",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "08:30",
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        nivel: "2",
        sigla: "MAT-102",
        materia: "Matemática II",
        observacion: "Caso Especial",
        docentes: [
            {
                id: 1,
                grupo: "A",
                cupos: 20,
                docente: "Juan Perez",
                horario: "Lunes 08:30 - 10:00, Miercoles 08:30 - 10:00, Viernes 08:30 - 10:00",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 1,
                        dias: "Miercoles",
                        horaInicio: "08:30",
                    },
                    {
                        id: 1,
                        dias: "Miercoles",
                        horaInicio: "09:15",
                    },
                    {
                        id: 1,
                        dias: "Viernes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 1,
                        dias: "Viernes",
                        horaInicio: "09:15",
                    },
                ]
            },
            {
                id: 2,
                grupo: "B",
                cupos: 20,
                docente: "Juan Perez",
                horario: "Martes 07:00 - 09:15, Jueves 07:00 - 09:15",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "07:00",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "07:45",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "07:00",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "07:45",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "08:30",
                    },
                ]
            },
        ]
    },
];
var DBinscripciones = [];
var DBboleta = [];
var DBadicion = [];
var DBHorario = [
    {
        horaInicio: "07:00",
        horaFin: "07:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "07:45",
        horaFin: "08:30",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "08:30",
        horaFin: "09:15",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "09:15",
        horaFin: "10:00",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "10:00",
        horaFin: "10:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "10:45",
        horaFin: "11:30",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "11:30",
        horaFin: "12:15",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "12:15",
        horaFin: "13:00",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "13:00",
        horaFin: "13:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "13:45",
        horaFin: "14:30",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "14:30",
        horaFin: "15:15",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "15:15",
        horaFin: "16:00",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "16:00",
        horaFin: "16:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "16:45",
        horaFin: "17:30",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "17:30",
        horaFin: "18:15",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "18:15",
        horaFin: "19:00",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "19:00",
        horaFin: "19:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "19:45",
        horaFin: "20:30",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "20:30",
        horaFin: "21:15",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "21:15",
        horaFin: "22:00",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
    {
        horaInicio: "22:00",
        horaFin: "22:45",
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
    },
];
var DBuser = [];


const AppContext = createContext({
    materias: DBmaterias,
    boleta: DBboleta,
    inscripciones: DBinscripciones,
    adicion: DBadicion,
    horario: DBHorario,
    usuarios: DBuser,
    listMaterias: [],
    cantIns: 0,
    cantLev: 0,
    isInscripcion: false,
    isAdicion: false,
    setIsInscripcion: () => { },
    setCantIns: () => { },
    setCantLev: () => { },
    setIsAdicion: () => { },
    setListMaterias: () => { },
});

export default function DataContext({ children }) {

    const [materias, setMaterias] = useState(DBmaterias);
    const [boleta, setBoleta] = useState(DBboleta);
    const [inscripciones, setInscripciones] = useState(DBinscripciones);
    const [adicion, setAdicion] = useState(DBadicion);
    const [horario, setHorario] = useState(DBHorario);
    const [usuarios, setUsuarios] = useState(DBuser);
    const [listMaterias, setListMaterias] = useState([]);
    const [cantIns, setCantIns] = useState(0);
    const [cantLev, setCantLev] = useState(0);
    const [isInscripcion, setIsInscripcion] = useState(false);
    const [isAdicion, setIsAdicion] = useState(false);

    return (
        <AppContext.Provider
            value={{
                materias,
                boleta,
                inscripciones,
                adicion,
                horario,
                usuarios,
                listMaterias,
                cantIns,
                cantLev,
                isInscripcion,
                isAdicion,
                setIsInscripcion,
                setCantIns,
                setCantLev,
                setIsAdicion,
                setListMaterias,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}

