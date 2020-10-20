import React, { FormEvent, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


function LanceForm() {

    
    const history = useHistory();

    const [nome, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [lance, setLance] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);
    
    useEffect(() => {
        setName('');
        setCpf('');
        setWhatsapp('');
        setLance('');
    }, []);
    
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from: '', to: '' }
        ]);
    }
    
    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value};
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        if(nome != '' && cpf != '' && whatsapp != '' && lance != '') {
            api.post('lance', {
                nome, 
                cpf,
                whatsapp,
                lance
            }).then(() => {
                alert('Lance realizado com sucesso!');
    
                history.push('/');
            }).catch(() => {
                alert('Erro no lance!');
            })    
        } else {
            alert('Insira todos os dados para poder efetuar o lance!');
        }
        
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Faça seu lance"
                description="Quanto mais lances fizer, maior a chance de ganhar. Boa sorte!"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <Input 
                                name="name" 
                                label="Nome completo"
                                value={nome} 
                                onChange={(e) => { setName(e.target.value) }}
                            />

                            <Input 
                                name="cpf" 
                                label="CPF" 
                                value={cpf} 
                                onChange={(e) => { setCpf(e.target.value) }}
                            />

                            <Input 
                                name="whatsapp" 
                                label="WhatsApp" 
                                value={whatsapp} 
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />

                            <Input 
                                name="lance" 
                                label="Seu lance" 
                                value={lance} 
                                onChange={(e) => { setLance(e.target.value) }}
                            />

                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Enviar lance
                        </button>
                    </footer>
                </form>    
            </main>
        </div>
    )
}

export default LanceForm;