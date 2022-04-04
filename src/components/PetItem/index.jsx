import React, { useState, useEffect } from 'react';
import { db } from '../../util/firebase';
import './styles.css';

export default function Pet({ pet }) {
    const deletePet = () => {
      const petRef = db.ref('Pet').child(pet.id);
      petRef.remove();
    } 

    return (
      <article className="pet-item" >
      <header className="pet-header">
          <img className="avatar" src={pet.avatar} alt={pet.name} />
          <div>
              <strong>{pet.name}</strong>
              <span>{pet.sex}</span>
          </div>
      </header>
      <p>{pet.bio}</p>
      <footer>
          <p>
              Porte:
              <strong>{pet.port}</strong>
          </p>
          <p>
              Castrado?
              <strong> {pet.title}</strong>
          </p>
          <a          
              href={`https://docs.google.com/forms/d/e/1FAIpQLScqBslwrZRgQ8c_tf_nIEwrVIzH1UPgt17TPZIe6vldEb_zVQ/viewform`}
              target="_blank"
          >
              Quero Adotar!💗🐶😺
          </a>
      </footer>

  </article>
    );
   
  }