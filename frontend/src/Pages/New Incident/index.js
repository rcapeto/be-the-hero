import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../img/logo.svg';
import api from '../../Services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        let data ={
            title,
            description,
            value
        }

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');

        } catch(error){
            alert('Erro em cadastrar novo caso, tente novamente.')
        }
    }


    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>
                    Descreve o caso detalhadamente para encontrar um herói para resolver isso.
                </p>
                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}
                />
                <input  type="text "
                    placeholder="Valor em reais"
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                />
                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}