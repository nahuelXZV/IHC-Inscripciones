import Head from "next/head";
import Image from "next/image"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { useState, useEffect, Fragment } from "react";
import { useAppContext } from "../../context/DataContext";
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';


export default function Login() {

    const router = useRouter();
    const dataContext = useAppContext();
    const [usuarios, setUsuarios] = useState(dataContext.usuarios);
    const [registro, setRegistro] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    let auth = false;
    const [alerta, setAlerta] = useState('');

    var styles = {
        width: '1000px',
        height: '500px',
        backgroundColor: 'white',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        justifyContent: 'center',
    }
    var style = {
        backgroundColor: '#0170F2',
        color: 'white',
        width: '150px',
        weight: '150px',
        margin: '10px',
        padding: '10px 0px',
        borderRadius: '10px',
        fontSize: '15px',
        height: '50px'
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function manejarEnvio(evento) {
        if (registro == '' || contraseña == '') {
            setAlerta('Por favor ingrese todos los datos');
            return;
        }
        evento.preventDefault(); // Evita que se envíe el formulario
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].registro == registro && usuarios[i].contraseña == contraseña) {
                usuarios[i].auth = 'true'
                setCookie('auth', 'true', { maxAge: 60 * 60 * 24 * 7 });
                setCookie('registro', registro, { maxAge: 60 * 60 * 24 * 7 });
                localStorage.setItem("registro", registro);
                setUsuarios(usuarios);
                router.push('/');
                auth = true;
                setAlerta('');
            }
        }
        if (!auth) {
            setAlerta('Registro o contraseña incorrectos');
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/icono.png" />
            </Head>

            <div className="flex h-screen overflow-y-auto bg-fondo items-center justify-center">
                <div style={styles} className='container overflow-hidden p-4 border-spacing-1 m-1'>
                    <div className="float-left text-center items-center w-1/2 justify-center h-full my-20">
                        <p className="pb-10 font-bold" style={{ fontSize: '20px' }}>Inscripción WEB</p>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '35ch', height: '7ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="registro"
                                    label="Nro. de registro"
                                    defaultValue=""
                                    name="registro"
                                    value={registro}
                                    onChange={(evento) => setRegistro(evento.target.value)}
                                />
                            </div>
                        </Box>
                        <FormControl sx={{ m: 1, width: '35ch', height: '7ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                id="contraseña"
                                name='contraseña'
                                value={contraseña}
                                onChange={(evento) => setContraseña(evento.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment
                                        position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Contraseña"
                            />
                        </FormControl>{
                            ({ alerta } != '') ? <p className="p-0 font-bold" style={{ fontSize: '10px', color: 'red' }}>{alerta}</p> : <></>}
                        <br></br>
                        <button id='enviar' onClick={manejarEnvio} style={style} className='text-white font-bold py-2 px-4 rounded'>
                            <div className='flex flex-row justify-center items-center'>
                                <span className='ml-1'>Ingresar</span>
                            </div>
                        </button>
                    </div>
                    <div style={{ height: '70%', left: '50%', position: 'absolute', borderLeft: '1px solid #808080', color: 'gray' }}></div>
                    <div className="float-right p-8">
                        <Image src="/logoUAGRM.jpg" width={400} height={150} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}