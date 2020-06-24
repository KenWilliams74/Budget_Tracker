import React from "react";

function Table(props) {
    return (
        <div>
            <tbody>
                {props.itemName.map((item, index) => (
                    <div>
                        <li>Item: {item}</li>
                        <li>Amount: ${props.itemAmount[index].toFixed(2)}</li>
                    </div>
                ))}
            </tbody>
        </div>
    );
}

export default Table;