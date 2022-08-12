import React from 'react';
import { useNavigate } from 'react-router-dom';
import './jury.css';
 

export default function Jury() {
    const navigate = useNavigate();
    function handClick(){
       navigate("/pages/fiche note/fiche")

    }
    return (
      <div>
        <div className='espacejury'>
            
       <h3><u>espace jury</u></h3> <br/>
       aprés authentification ,le jury sera dirigé à cette espace <br/>
        <h4><u> jurydate jj/mm/aaaa</u></h4>  
        <table >
         <tr>
         <th>
          N°</th> 
          <th>Opt.</th>
          <th>Eléve-ingenieur</th>
          <th>N1 Encadrant</th>
          <th>N2 Rapporteur</th>
          <th>N3 Superviseur</th>
         <th>N4 Qualité</th> 
         <th>N5 Question</th>
         <th>Moyenne</th>
         <th>Publiable</th>
         </tr> 
         <tr>
          <td><form>
                <input type="text" size ="5"/>
              </form>
            </td><form>
                <input type="text" size ="5"/>
              </form>
            <td><form>
                <input type="text" size ="5"/>
              </form>
            </td>  
            <td><form>
                <input type="text"size ="5"/>
              </form>
            </td>
            <td> 
<form>
  <div id="boutton">
  <button  className='btn btn-success btn-block mt-33' m onClick={handClick}>
                Note
            </button>
            </div></form> </td>
            <td> <form>
                <input type="text" size ="5"   placeholder='*' />
              </form>   </td>
            <td>   <form>
                <input type="text" size ="5" placeholder='*'/>
              </form> </td>
            <td>   <form>
                <input type="text" size ="5" placeholder='*'/>
              </form> </td>
            <td>   <form>
                <input type="text" size ="5"placeholder='*'/>
              </form></td>
            <td>
              <form>
                <input type="text" size ="5"/>
              </form>
            </td>
            <td>
              <form>
                <input type="checkbox"  size ="5"   />
            </form></td> 
            </tr></table> 
            
             <span class="obligatoire">* champs obligatoires </span>
        
            <form>
            <button  className='btn btn-success btn-block mt-3' m >
                Valider
            </button> 
</form> Moyenne =N1+N2+N3+N4+N5/5
        </div>
        </div>
      
    )
  }