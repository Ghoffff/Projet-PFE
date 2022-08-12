import React from 'react'


import './fiche.css'
export default function Fiche()
  {
    return (
      <div>
        <div className='container'>
        <h3><u>fiche note encadrant de l entreprise</u></h3>
        <table>
            <tr>
                <th>critére
                </th>
                <th>TM
                </th><th>M
                </th><th>M
                </th><th>AB
                </th><th>B
                </th><th>TB
                </th><th>NOTE
                </th></tr>

<tr>
    <td>Assiduité</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
    <form>
            <input type="text" />
        </form>
    </td>


</tr>
<tr>
<td>Integration</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td >
    <form>
            <input type="text" />
        </form>
    </td>

</tr>
<tr>
<td>Facilité</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
    <form>
            <input type="text"/>
        </form>
    </td>
</tr>
<tr>
<td>Niveau</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
    <form>
            <input type="text"/>
        </form>
    </td>
</tr>
<tr>
<td>Compétences</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="text"/>
        </form>
    </td>
</tr>
<tr>
<td>Conception</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="text"/>
        </form>
    </td>
</tr>
<tr>
<td>Réalisation</td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/>
        </form>
    </td> <td>
        <form>
            <input type="checkbox"/></form>
    </td> <td> <form> <input type="checkbox"/>
        </form>
    </td><td> <form>
            <input type="checkbox"/>
        </form>
    </td>
    <td><form>
            <input type="text"/>
        </form>
    </td>
</tr>

<tr>
    <td colSpan={7}><h3>note finale</h3></td>
    <td><form>
            <input type="text"/>
        </form>
    </td>
</tr>
        </table>
        
        <button  className='btn btn-success btn-block mt-3' m>
                Valider
            </button>
        <pre>
             En cochant sur TM  --la note est de<span class="obligatoire"/></pre>
      </div>
      </div>
    )
  }