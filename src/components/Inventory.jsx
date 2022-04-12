import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  })
  
    // Create add and remove functions here that changes the
    // state.

    


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{ setInv({...inv,books:inv.books+1})}}>+</button>
        <button className="circlularButton" onClick={()=>{if(inv.books<=0){return} setInv({...inv,books:inv.books-1})}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{ setInv({...inv,notebooks:inv.notebooks+1})}}>+</button>
        <button className="circlularButton" onClick={()=>{if(inv.notebooks<=0){return} setInv({...inv,notebooks:inv.notebooks-1})}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"  onClick={()=>{ setInv({...inv,pens:inv.pens+1})}}>+</button>
        <button className="circlularButton"  onClick={()=>{if(inv.pens<=0){return} setInv({...inv,pens:inv.pens-1})}}>-</button>
        <span>{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
      
    </div>
  
  );
}
