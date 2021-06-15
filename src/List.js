// import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function List({items, removeItem, editItem}) {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const {id, title} = item;
                return (
                    <article className="grocery-item" key={id}>
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button onClick={() => editItem(id)} type="button" className="edit-btn">
                                <FaEdit/>
                            </button>
                            <button onClick={() => removeItem(id)} type="button" className="edit-btn">
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                 )
            })}
        </div>
    )
}
