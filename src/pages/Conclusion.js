import React from 'react';
import { listDatas } from '../data';

const Conclusion = () => {

    

    let listObject = listDatas.secteurs;
    

    let listFiltre = listObject.filter( item => item.nom !=="Développement web Frontend" && item.nom !== "Développement web Backend")
    
    
   
   
    return (
        <div className='Conclusion'>

            <h1>Conclusion</h1>   
              
            { listFiltre.map( item => 

            <>

            <div className='forceFaiblessesContainer'>
                
                <h2>{item.nom}</h2>
                <h3>Forces des métiers</h3>
                <p>{item.avantages}</p>

                <h3>Faiblesses des métiers</h3>
                <p>{item.inconvenients}</p>
            </div>

            

            </>
            )}

            
        </div>
    );
};

export default Conclusion;