import React from 'react'
import Formmain from './formmian'

const Form1 = ({integer, setnumbers,handlecange }) => {
    return (
        <div>
            <button onClick={setnumbers(integer)}>
                <div >
                    <form >
                        <label>enter the value</label>
                        <input type="number" value={integer} onChange={handlecange} />
                       
                    </form>
                   <h2>click</h2>
                  

                </div>
                
                
            </button>
            <h2> {integer} table is {integer}</h2>
            <h2>click</h2>
            

        </div>
    )
}

export default Formmain(Form1)
