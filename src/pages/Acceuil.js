
import React,{useState, useEffect} from 'react';
import { listDatas } from '../data';

const Acceuil = () => {

   
    

    return (
        <div className='Acceuil'>
            
            <div className='Acceuil__profile ombre' style={{ backgroundImage: `url(${require('../images/profile.jpg')})`,
            height: 500,
            backgroundSize: 'cover',
            backgroundPosition: 'center',  
            backgroundRepeat: 'no-repeat'
            }}>
                <p className='stage'>
                    <span>Stagiaire: Omgba Bekono</span>
                    <span>Flora</span>
                </p>

                <p className='directeur'>
                    <span>Maître de stage: Enyegue Menyeng</span>
                    <span>Franky</span>
                </p>
            </div>

            <div className='presentation'>

                <h1>Stage de découverte des métiers de l'informatique</h1>
                <p>

                Je m'appelle OMGBA Flora, je suis élève en classe de 3H au collège René Caillé de Saintes. J'ai réaliser ce stage dans l'entreprise FULLBASARD, en vue d'une potentielle insertion dans les métiers de l'high tech. Ma présentation portera donc sur la découverte de ces métiers, c'est-à-dire sur les choses que j'ai apprise durant mon stage.
                </p>
            </div>
           
            
        </div>
    );
};

export default Acceuil;