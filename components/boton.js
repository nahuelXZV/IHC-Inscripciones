import { display } from '@mui/system';
import React from 'react';


function Boton(props) {

    var { tipo, ancho, letra, alto } = props;
    var styles = {
        backgroundColor: '#0170F2',
        color: 'white',
        width: ancho,
        weight: '150px',
        margin: '10px',
        padding: '10px 0px',
        borderRadius: '10px',
        fontSize: letra,
        height: alto
    }
    if (tipo == 'Confirmar') {
        styles = {
            backgroundColor: '#3BFF1C',
            color: 'white',
            width: ancho,
            margin: '10px',
            padding: '10px 0px',
            borderRadius: '10px',
            fontSize: letra,
            height: alto
        }
    } else if (tipo == 'Cancelar') {
        styles = {
            backgroundColor: '#C6241E',
            color: 'white',
            width: ancho,
            margin: '10px',
            padding: '10px 0px',
            borderRadius: '10px',
            fontSize: letra,
            height: alto
        }
    }
    return (
        <button style={styles} className='text-white font-bold py-2 px-4 rounded'>
            <div className='flex flex-row justify-center items-center'>
                {tipo == 'Confirmar' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                </svg> : null}
                {tipo == 'Cancelar' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg> : null}
                {tipo == 'Filtrar' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                </svg> : null}
                <span className='ml-2'>{tipo}</span>
            </div>
        </button>
    );
}

export default Boton;