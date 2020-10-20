import React, { FormEvent, useState, useEffect } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [menorLance, setMenorLance] = useState('');

    useEffect(() => {
        api.get('menor-lance').then(response => {
            const menorLance = response.data;
            setMenorLance(menorLance);
        })
    }, []);


    

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este é o menor lance único">
                <form id="search-teachers">
                    
                        <Input 
                        type="label" 
                        name="lance" 
                        label="Lance"
                        value={menorLance}
                        onChange={(e) => { setTime(e.target.value) }} 
                    />

                
                 
                </form>
            </PageHeader>
                <main>
                    {teachers.map((teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher} />;
                    })}
                        
                </main>
        </div>
    )
}

export default TeacherList;