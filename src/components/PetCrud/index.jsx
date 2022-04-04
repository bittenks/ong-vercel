import React from 'react';
import { db } from '../../util/firebase';
import api from '../../services/api';
import './styles.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PetCrud({ pet }) {
    const deletePet = () => {
      const petRef = db.ref('Pet').child(pet.id);
      petRef.remove();
      
    };

  function createNewConnection() {
    api.post('connections', {
        user_id: pet.id
    });
};

const sucess = () => toast("Pet Adotado com Sucesso!🐶💗😺");

function detelepet_notify(){
  sucess();
  deletePet();
}


    return (
       
            
      <article className="pet-item-crud" >
      <header>
          <img src={pet.avatar} alt={pet.name} />
          <div>
              <strong>{pet.name}</strong>
          </div>
      </header>
      <footer className="delete-btn">
          <button onClick={detelepet_notify}> Pet Adotado! 🐶</button>
      </footer>

  </article>
  
    );
  }