
import { db } from '../../util/firebase';
import React, { useState, FormEvent, useEffect } from 'react';
import PetCrud from '../../components/PetCrud';
import PageHeader from '../../components/PageHeader';
import './styles.css';

export default function Pet({ pet }) {

    const deletePet = () => {
      const petRef = db.ref('Pet').child(pet.id);
      petRef.remove();
    };
    const completePet = () => {
      const petRef = db.ref('Pet').child(pet.id);
      petRef.update({
        complete: !pet.complete,
      });
    };

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
      <div>
         <div id="page-pet-list" className="container">
            <PageHeader title="Aqui você  poderá definir se o nosso amigo foi adotado.."></PageHeader>
          {petList
        ? petList.map((pet, entries) => <PetCrud pet={pet} key={entries}/>)
        : ''}
     </div>
      </div>
    );
  }