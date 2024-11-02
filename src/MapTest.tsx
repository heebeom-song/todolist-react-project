import React from "react";

const MapTest = () => {
    const fruit = ['apple', 'banana', 'orange'];

    return(
        <div>
            <h2>과일</h2>
            <ul>
                {
                    fruit.map((item, i) => {
                        return <li key = {i}>{item}</li>
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default MapTest;