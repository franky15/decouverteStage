import React, { useState } from 'react';
import { listDatas } from '../data';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {

    console.log(listDatas)
    const navigate = useNavigate()


    const navigateFunction = () =>{

        navigate("")
    }

    const open = (nom, img)=>{

        const premier = document.querySelector("."+img)
       
        const deuxieme = document.querySelector("."+nom)

        deuxieme.style.display= "none";
        premier.style.display= "block";

        
    }

    const lock = (nom, img) =>{

        const premier = document.querySelector("."+img)
       
        const deuxieme = document.querySelector("."+nom)

        premier.style.display= "none";
        deuxieme.style.display= "block";


    }

    return (
        <div className='Portfolio'>
           
         { listDatas.secteurs.map( item => 

            <>
           
           
           <div className={`showUn ${item.nom.replace(/\s/g, "")}`} style={{ display: 'block' }}  onClick={ ()=>open(item.nom.replace(/\s/g, ""), item.img.replace(/\./g, "")) }>
                
            
            <div className={`itemSecteur ${item.id}`} >
                    <h1>{item.nom}</h1>
                    <div className='Acceuil'>
                                    
                        <div className='Acceuil__profile' style={{ backgroundImage: `url(${require(`../images/${item.img}`)})`,
                        height: 500,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',  
                        backgroundRepeat: 'no-repeat',
                        
                        }}>
                        
                        </div>

                    
                        <p className='presentation'>

                            
                            {item.description}
                        </p>

                    </div>
            </div>  

           </div>
            

            <div className={`showDeux ${item.img.replace(/\./g, "")}`} onClick={ ()=>lock(item.nom.replace(/\s/g, ""), item.img.replace(/\./g, ""))} style={{ display: 'none' }}>

                <div className={`conteneur ${"id"+item.id}`} id={`${item.nom}`}  style={{ backgroundImage: `url(${require(`../images/${item.img}`)})`,
                    height: 800,
                   
                    backgroundPosition: 'center',  
                    backgroundRepeat: 'no-repeat',
                    
                    
                }}>

                    <p className='conteneurLock' >Fermer</p>
                
                </div>  

            </div>
              

            

            </>
         ) 
        
        }


        </div>
    );
};

export default Portfolio;