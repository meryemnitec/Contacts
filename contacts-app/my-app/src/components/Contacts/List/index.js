import { useState} from 'react'


function List({Contacts}) {
 const [filterText, setFilterText]=useState('');

 const filtered= Contacts.filter((item)=>{
    return Object.keys(item).some((key)=> 
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
)
 })
 console.log("filtered",filtered)

  return (
    <div> 

        <input placeholder='Filter contact'
         value={filterText} 
         onChange={(e) => setFilterText(e.target.value)} />
        <ul className='List'>
            {
                filtered.map((Contacts,i)=>
                <li key={i}>
                   {Contacts.fullname} 
                </li>)
            }
        </ul>
        <p> Total Contacts({filtered.length}) </p>
    </div>
  );
}

export default List;
