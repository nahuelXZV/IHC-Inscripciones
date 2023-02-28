import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import { useAppContext } from "../context/DataContext";
import { useState, useEffect, Fragment } from "react";

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function AlertDialog({ type = 'inscripción' }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const dataContext = useAppContext();
    const [boleta, setBoleta] = useState(dataContext.boleta);
    const [inscripciones, setInscripciones] = useState(dataContext.inscripciones);

    // funciones para manejar el alert
    const [texto1, setTexto] = useState('');
    const [checked, setChecked] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };
    // fin funciones para manejar el alert

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function saveDataA() {
        if (inscripciones.length == 0) {
            //alert('Necesita minimo 1 materia para guardar la adición');
            setTexto('Necesita minimo 1 materia para guardar la adición');
            setShowAlert(true);
            return;
        }
        setBoleta(inscripciones);  // guardamos la lista de inscripciones en la base de datos local
        dataContext.setIsAdicion(true);
        router.push('/boleta'); // redireccionamos a la pagina del perfil
    }

    function saveDataI() {
        if (inscripciones.length == 0) {
            //alert('Necesita minimo 1 materia para guardar la inscripción');
            setTexto('Necesita minimo 1 materia para guardar la inscripción');
            setShowAlert(true);
            return;
        }
        setBoleta(inscripciones);  // guardamos la lista de inscripciones en la base de datos local
        dataContext.setIsInscripcion(true); // indicamos que ya se realizo la inscripcion
        router.push('/boleta'); // redireccionamos a la pagina del perfil
    }

    return (
        <div>
            <button onClick={handleClickOpen} className="w-auto flex py-2 px-4 text-white font-bold rounded bg-azul hover:bg-blue-700 capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
                <span className='ml-1'>Confirmar</span>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Esta seguro de confirmar la " + type + "?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Una vez confirmada la {type} no podrá realizar cambios.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => { handleClose() }} className='bg-rojo text-white hover:bg-red-800 capitalize py-1 px-3'>Volver</button>
                    {
                        type == 'adición' ?
                            <button onClick={() => { saveDataA() }} autoFocus className='bg-azul text-white hover:bg-blue-700 capitalize py-1 px-3'>
                                Confirmar
                            </button> :
                            <button onClick={() => { saveDataI() }} autoFocus className='bg-azul text-white hover:bg-blue-700 capitalize py-1 px-3'>
                                Confirmar
                            </button>
                    }
                </DialogActions>
                <Snackbar open={showAlert} autoHideDuration={4000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} variant='filled' severity="error">
                        {texto1}
                    </Alert>
                </Snackbar>
            </Dialog>
        </div>
    );
}