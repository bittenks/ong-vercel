import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Pet from '../../components/PetItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import firebase from 'firebase';
import {db} from '../../util/firebase'
import './styles.css';

export default function PetList() {
    const [petList, setPetList] = useState();
  
    useEffect(() => {
      const petRef = db.ref('Pet');
      petRef.on('value', (snapshot) => {
        const pets = snapshot.val();
        const petList = [];
        for (let id in pets) {
          petList.push({ id, ...pets[id] });
        }
        setPetList(petList);
      });
    }, []);

    return (
        <div id="page-pet-list" className="container">
            <PageHeader title="Estes são  os nossos amigos disponíveis..">
            </PageHeader>
            <main>
            {petList
        ? petList.map((pet, entries) => <Pet pet={pet} key={entries}/>)
        : ''}
                </main>
           
        </div>
    );

}
