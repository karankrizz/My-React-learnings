import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "./counter.slice";

export default function CounterPage() {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const items = useSelector(
        (state) => state.todo.items
    );

    return (
        <div>

            <h2>Todo App</h2>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter something"
            />

            <button
                onClick={() => {
                    dispatch(addItem(text));
                    setText("");
                }}
            >
                Add
            </button>

            <hr />

            {
                items.map((item, index) => (
                    <div key={index}>

                        <span>{item}</span>

                        <button
                            onClick={() =>
                                dispatch(removeItem(index))
                            }
                        >
                            Remove
                        </button>

                    </div>
                ))
            }

        </div>
    );
}