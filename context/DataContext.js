import { createContext, useContext, useState } from "react";

// datas
var DBmaterias = [
    {
        id: 1,
        nivel: "5",
        sigla: "MAT-302",
        materia: "Probabilidades y Estadísticas II",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Caceres Chacon Braulio",
                horario: "Lunes 10:00 - 11:30, Miercoles 10:00 - 11:30, Viernes 10:00 - 11:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "10:00",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "10:45",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "10:00",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "10:45",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "10:00",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "10:45",
                    },

                ]
            },
            {
                id: 2,
                grupo: "SB",
                cupos: 20,
                docente: "Cano Cespedes Jorge",
                horario: "Lunes 9:15 - 11:30, Miercoles 9:15 - 11:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "10:00",
                    },
                    {
                        id: 3,
                        dias: "Lunes",
                        horaInicio: "10:45",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "09:15",
                    },
                    {
                        id: 5,
                        dias: "Miercoles",
                        horaInicio: "10:00",
                    },
                    {
                        id: 6,
                        dias: "Miercoles",
                        horaInicio: "10:45",
                    },

                ]
            }
        ]
    },
    {
        id: 2,
        nivel: "5",
        sigla: "INF-318",
        materia: "Programacion Logica y Funcional",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Vargas Yapura Edwin",
                horario: "Martes 20:30 - 22:45, Jueves 20:30 - 22:45",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "20:30",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "21:15",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "22:00",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "20:30",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "21:15",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "22:00",
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        nivel: "5",
        sigla: "INF-310",
        materia: "Estructuras de Datos II",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Peinado Pereira Juan Carlos",
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
            {
                id: 2,
                grupo: "SB",
                cupos: 20,
                docente: "Vaca Pinto Cespedes Roberto",
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
            {
                id: 3,
                grupo: "SX",
                cupos: 20,
                docente: "Barroso Viruez Gino",
                horario: "Lunes 11:30 - 13:00, Miercoles 11:30 - 13:00, Viernes 11:30 - 13:00",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "11:30",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "12:15",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "11:30",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "12:15",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "11:30",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "12:15",
                    },
                ]
            },
        ]
    },
    {
        id: 4,
        nivel: "5",
        sigla: "INF-312",
        materia: "Bases de Datos I",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Veizaga Gonzales Josue Obed",
                horario: "Lunes 08:30 - 10:00, Miercoles 08:30 - 10:00, Viernes 08:30 - 10:00",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "08:30",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "09:15",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "09:15",
                    },
                ]
            },
            {
                id: 2,
                grupo: "SC",
                cupos: 20,
                docente: "Veizaga Gonzales Josue Obed",
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
    {
        id: 5,
        nivel: "5",
        sigla: "INF-319",
        materia: "Lenguajes Formales",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Miranda Carrasco Carlos",
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
        ]
    },
    {
        id: 6,
        nivel: "6",
        sigla: "ELC-103",
        materia: "Topicos Avanzados de Programacion",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Peinado Pereira Miguel Jesus",
                horario: "Martes 16:45 - 18:15, Jueves 16:45 - 18:15",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "16:45",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "17:30",
                    },
                    {
                        id: 3,
                        dias: "Jueves",
                        horaInicio: "16:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "17:30",
                    },
                ]
            },
        ]
    },
    {
        id: 7,
        nivel: "7",
        sigla: "ELC-105",
        materia: "Sistemas Distribuidos",
        observacion: "Ninguna",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Peinado Pereira Miguel Jesus",
                horario: "Martes 18:15 - 20:30, Jueves 18:15 - 20:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "18:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "18:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "19:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "19:45",
                    },
                ]
            },
        ]
    },
    {
        id: 8,
        nivel: "6",
        sigla: "INF-329",
        materia: "Compiladores",
        observacion: "Levantamiento",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Barroso Viruez Gino",
                horario: "Martes 18:15 - 20:30, Jueves 18:15 - 20:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "18:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "18:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "19:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "19:45",
                    },
                ]
            },
        ]
    },
    {
        id: 9,
        nivel: "6",
        sigla: "INF-322",
        materia: "Bases de datos II",
        observacion: "Levantamiento",
        docentes: [
            {
                id: 1,
                grupo: "SD",
                cupos: 20,
                docente: "Perez Ferreira Ubaldo",
                horario: "Martes 18:15 - 20:30, Jueves 18:15 - 20:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "18:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "18:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "19:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "19:45",
                    },
                ]
            },
            {
                id: 2,
                grupo: "SB",
                cupos: 20,
                docente: "Perez Ferreira Ubaldo",
                horario: "Miercoles 10:45 - 13:00, Viernes 10:45 - 13:00",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Miercoles",
                        horaInicio: "10:45",
                    },
                    {
                        id: 2,
                        dias: "Miercoles",
                        horaInicio: "11:30",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "12:15",
                    },
                    {
                        id: 4,
                        dias: "Viernes",
                        horaInicio: "10:45",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "11:30",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "12:15",
                    },
                ]
            },
        ]
    },
    {
        id: 10,
        nivel: "6",
        sigla: "INF-323",
        materia: "Sistemas Operativos I",
        observacion: "Levantamiento",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Barroso Viruez Gino",
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
                grupo: "SC",
                cupos: 20,
                docente: "Barroso Viruez Gino",
                horario: "Lunes 08:30 - 10:00, Miercoles 08:30 - 10:00, Viernes 08:30 - 10:00",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "08:30",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "09:15",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "08:30",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "09:15",
                    },
                ]
            },
        ]
    },
    {
        id: 11,
        nivel: "6",
        sigla: "INF-323",
        materia: "Sistemas de Informacion I",
        observacion: "Caso Especial",
        docentes: [
            {
                id: 1,
                grupo: "SC",
                cupos: 20,
                docente: "Garzon Cuellar Angelica",
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
                grupo: "SC",
                cupos: 20,
                docente: "Garzon Cuellar Angelica",
                horario: "Martes 9:15 - 11:30, Jueves 9:15 - 11:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "10:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "10:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "09:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "10:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "10:45",
                    },

                ]
            },
        ]
    },
    {
        id: 12,
        nivel: "6",
        sigla: "MAT-329",
        materia: "Investigacion Operativa I",
        observacion: "Caso Especial",
        docentes: [
            {
                id: 1,
                grupo: "SB",
                cupos: 20,
                docente: "Sanchez Herbas Jose Gabriel",
                horario: "Lunes 19:45 - 21:15, Miercoles 19:45 - 21:15, Viernes 19:45 - 21:15",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "20:30",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "20:30",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "20:30",
                    },

                ]
            },
            {
                id: 2,
                grupo: "SZ",
                cupos: 20,
                docente: "Suareza Cespedes Melby",
                horario: "Martes 21:15 - 22:45, Jueves 21:15 - 22:45",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "21:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "22:00",
                    },
                    {
                        id: 3,
                        dias: "Jueves",
                        horaInicio: "21:15",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "22:00",
                    },
                ]
            },
        ]
    },
    {
        id: 13,
        nivel: "7",
        sigla: "INF-418",
        materia: "Inteligencia Artificial",
        observacion: "Caso Especial",
        docentes: [
            {
                id: 1,
                grupo: "SA",
                cupos: 20,
                docente: "Vargas Yapura Edwin",
                horario: "Martes 18:15 - 20:30, Jueves 18:15 - 20:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "18:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "18:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "19:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "19:45",
                    },
                ]
            },
        ]
    },
    {
        id: 14,
        nivel: "7",
        sigla: "INF-433",
        materia: "Redes I",
        observacion: "Caso Especial",
        docentes: [
            {
                id: 1,
                grupo: "SB",
                cupos: 20,
                docente: "Monrroy Dipp Victor Fernando",
                horario: "Martes 9:15 - 11:30, Jueves 9:15 - 11:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Martes",
                        horaInicio: "09:15",
                    },
                    {
                        id: 2,
                        dias: "Martes",
                        horaInicio: "10:00",
                    },
                    {
                        id: 3,
                        dias: "Martes",
                        horaInicio: "10:45",
                    },
                    {
                        id: 4,
                        dias: "Jueves",
                        horaInicio: "09:15",
                    },
                    {
                        id: 5,
                        dias: "Jueves",
                        horaInicio: "10:00",
                    },
                    {
                        id: 6,
                        dias: "Jueves",
                        horaInicio: "10:45",
                    },

                ]
            },
            {
                id: 2,
                grupo: "SA",
                cupos: 20,
                docente: "Gonzales Sandoval Jorge Antonio",
                horario: "Lunes 19:45 - 21:15, Miercoles 19:45 - 21:15, Viernes 19:45 - 21:15",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "20:30",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "19:45",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "20:30",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "20:30",
                    },

                ]
            },
            {
                id: 3,
                grupo: "SC",
                cupos: 20,
                docente: "Villagomez Melgar Jose Junior",
                horario: "Lunes 19:00 - 20:30, Miercoles 19:00 - 20:30, Viernes 19:00 - 20:30",
                check: false,
                dias: [
                    {
                        id: 1,
                        dias: "Lunes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 2,
                        dias: "Lunes",
                        horaInicio: "19:45",
                    },
                    {
                        id: 3,
                        dias: "Miercoles",
                        horaInicio: "19:00",
                    },
                    {
                        id: 4,
                        dias: "Miercoles",
                        horaInicio: "19:45",
                    },
                    {
                        id: 5,
                        dias: "Viernes",
                        horaInicio: "19:00",
                    },
                    {
                        id: 6,
                        dias: "Viernes",
                        horaInicio: "19:45",
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
var DBuser = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        registro: '219010641',
        contraseña: '12345678',
        carrera: 'Ing. Informática',
        ci: '12890698',
        fecha: '22 de agosto de 1999',
        direccion: 'Av. 6 de agosto',
        celular: '78945612',
        email: 'juanperez@gmail.com',
        auth: 'false',
        ppa: '51',
        cantidadLev: 1,

    },
    {
        id: 2,
        nombre: "Karen",
        apellido: "Mendoza Rios",
        registro: '219010789',
        contraseña: '12345678',
        carrera: 'Ing. Informática',
        ci: '12890698',
        fecha: '22 de agosto de 2000',
        direccion: 'Av. 6 de agosto calle Buenos Aires',
        celular: '78945612',
        email: 'karenmendoza@gmail.com',
        auth: 'false',
        ppa: '70',
        cantidadLev: 2,
    }
];


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

