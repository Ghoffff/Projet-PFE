import React from 'react'
import './administration.css';


const onSubmit = (data) => console.log(data);
export default function About() {
  return(
    <div>
          <div className='form'>
            <form formId="user-profile" onSubmit={onSubmit} action="" method="post">
                <p>Après authentification, l'administrateur sera dirigé à cette espace.</p>
                <h1>Affectation des sujets</h1>
                <div>
                    <label htmlFor=''>* Nom de l'étudiant en autsuggestion</label><br/>
                    <input type="text"  placeholder='Nom' required/>
                </div>
                <div>
                    <label htmlFor=''>* Numéro de sujet</label><br/>
                    <input type="text"  placeholder="Numéro" required/>
                </div>
                <div>
                    <label htmlFor=''>* Titre de sujet</label><br/>
                    <input type="text"  placeholder='Titre' required/>
                </div>
                <div>
                    <label htmlFor=''>*Organisme d'accueil</label><br/>
                    <input type="text"  placeholder="L'entreprise" required/>
                </div>
                <br/>
                <br/><button type='submit'> Valider </button>
            </form>
          </div>
        </div>
  )
}
