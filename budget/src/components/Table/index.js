import React from "react";

function Table(props) {
    return (
        <div>
            <div>
                {props.itemName.map((item, index) => (
                    <div>
                        <li className="list-group-item">
                            <p>Item: {item} </p>
                            <p>Amount: ${props.itemAmount[index].toFixed(2)}</p>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Table;