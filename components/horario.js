import { useAppContext } from "../context/DataContext";
import { useState, useEffect, Fragment } from "react";

export default function Horario() {
    const dataContext = useAppContext();
    var data = dataContext.horario;

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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
                                        return <td className="text-center font-normal text-pq bg-[#F3F6FF] border-b border-l border-[#E8E8E8]" key={materia.horaInicio + dia.sigla + dia.grupo}>
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
        </div>
    );
}