import { useAppContext } from "../context/DataContext";
import { useState, useEffect, Fragment } from "react";

export default function Horario() {
    const dataContext = useAppContext();
    var data = dataContext.horario;

    function setColor(color) {
        switch (color) {
            case '#AFEEEE':
                return `text-center font-normal text-pq bg-[#9ACD32] border-b border-l border-[#E8E8E8]`;
            case '#87CEEB':
                return `text-center font-normal text-pq bg-[#87CEEB] border-b border-l border-[#E8E8E8]`;
            case '#00CED1':
                return `text-center font-normal text-pq bg-[#00CED1] border-b border-l border-[#E8E8E8]`;
            case "#98FB98": // Verde pálido
                return `text-center font-normal text-pq bg-[#98FB98] border-b border-l border-[#E8E8E8]`;
            case "#9ACD32": // Verde claro
                return `text-center font-normal text-pq bg-[#9ACD32] border-b border-l border-[#E8E8E8]`;
            case "#FFDAB9": // Melocotón claro
                return `text-center font-normal text-pq bg-[#FFDAB9] border-b border-l border-[#E8E8E8]`;
            case "#FFE4E1": // Rosa claro
                return `text-center font-normal text-pq bg-[#FFE4E1] border-b border-l border-[#E8E8E8]`;
            case "#FAEBD7": // Blanco antiguo
                return `text-center font-normal text-pq bg-[#FAEBD7] border-b border-l border-[#E8E8E8]`;
            case "#FFEBCD": // Miel claro
                return `text-center font-normal text-pq bg-[#FFEBCD] border-b border-l border-[#E8E8E8]`;
            case "#FFE4B5": // Miel
                return `text-center font-normal text-pq bg-[#FFE4B5] border-b border-l border-[#E8E8E8]`;
            case "#F0E68C": // Amarillo khaki
                return `text-center font-normal text-pq bg-[#F0E68C] border-b border-l border-[#E8E8E8]`;
            case "#EEE8AA": // Amarillo pálido
                return `text-center font-normal text-pq bg-[#EEE8AA] border-b border-l border-[#E8E8E8]`;
            case "#FFFACD": // Amarillo claro
                return `text-center font-normal text-pq bg-[#FFFACD] border-b border-l border-[#E8E8E8]`;
            case "#F5DEB3": // Trigo
                return `text-center font-normal text-pq bg-[#F5DEB3] border-b border-l border-[#E8E8E8]`;
            case "#D2B48C": // Marrón claro
                return `text-center font-normal text-pq bg-[#D2B48C] border-b border-l border-[#E8E8E8]`;
            case "#E6E6FA": // Lavanda
                return `text-center font-normal text-pq bg-[#E6E6FA] border-b border-l border-[#E8E8E8]`;
            case "#F0F8FF": // Azul alice
                return `text-center font-normal text-pq bg-[#F0F8FF] border-b border-l border-[#E8E8E8]`;
            case "#87CEFA": // Azul claro cielo
                return `text-center font-normal text-pq bg-[#87CEFA] border-b border-l border-[#E8E8E8]`;
            case "#B0E0E6": // Azul polvo
                return `text-center font-normal text-pq bg-[#B0E0E6] border-b border-l border-[#E8E8E8]`;
            case "#AFEEEE": // Turquesa claro
                return `text-center font-normal text-pq bg-[#AFEEEE] border-b border-l border-[#E8E8E8]`;
            case "#F5F5DC": // Beige antiguo
                return `text-center font-normal text-pq bg-[#F5F5DC] border-b border-l border-[#E8E8E8]`;
            default:
                return `text-center font-normal text-pq bg-[#F5F5DC] border-b border-l border-[#E8E8E8]`;
        }
    }

    return (
        <div className="w-full h-full">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-azul text-center">
                        <th className="text-pq font-semibold text-white border-l border-transparent py-3">
                            Horario
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Lunes
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Martes
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Miercoles
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Jueves
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Viernes
                        </th>
                        <th className="text-pq font-semibold text-white border-l border-transparent">
                            Sabado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((materia, index) => {
                            if (materia.lunes.length == 0 && materia.martes.length == 0 && materia.miercoles.length == 0 && materia.jueves.length == 0 && materia.viernes.length == 0 && materia.sabado.length == 0) {
                                return null;
                            }

                            return <tr key={index}>
                                <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                                    {materia.horaInicio + '-' + materia.horaFin}
                                </td>
                                {/* ------------------------------------------------- */}

                                {
                                    materia.lunes.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })
                                }
                                {
                                    materia.lunes.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" ></td> : null
                                }
                                {/* ------------------------------------------------- */}

                                {
                                    materia.martes.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })

                                }
                                {
                                    materia.martes.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"></td> : null
                                }
                                {/* ------------------------------------------------- */}

                                {
                                    materia.miercoles.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })

                                }
                                {
                                    materia.miercoles.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" ></td> : null
                                }
                                {/* ------------------------------------------------- */}

                                {
                                    materia.jueves.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })

                                }
                                {
                                    materia.jueves.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"></td> : null
                                }
                                {/* ------------------------------------------------- */}
                                {
                                    materia.viernes.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })

                                }
                                {
                                    materia.viernes.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"></td> : null
                                }
                                {/* ------------------------------------------------- */}

                                {
                                    materia.sabado.map((dia, index) => {
                                        return <td className={setColor(dia.color)} key={materia.horaInicio + dia.sigla + dia.grupo}>
                                            {dia.sigla + ' - ' + dia.grupo}
                                        </td>
                                    })

                                }
                                {
                                    materia.sabado.length == 0 ? <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" ></td> : null
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}