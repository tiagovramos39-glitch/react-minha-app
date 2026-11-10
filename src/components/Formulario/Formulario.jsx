import React, { useState } from 'react';
import Botao from '../Botao/Botao';
import './formulario.css';

export default function Formulario() {
    return (
        <form className="form">
            <h1>Login</h1>
            <input 
            type="email" 
            placeholder="Digite seu e-mail"
            required 
            />
            <input 
            type="password" 
            placeholder="Digite sua senha"
            required
            />
            <Botao />
            </form>
    );
}