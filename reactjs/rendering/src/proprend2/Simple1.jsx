import React from 'react'

const Simple1 = ({ color, changecolor }) => {

    return (
        <div>
            <div id="box"

                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                }}
            >
            </div>
          
        </div>
    )
}

export default Simple1
