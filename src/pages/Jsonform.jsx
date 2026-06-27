import React,{ useRef } from "react";

export default function Jsonform() {
    const formref = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            email: formref?.current[0]?.value,
            password: passwordField?.current[1]?.value,
        };
        console.log(formData);
    };
    const starStyle = {
        color: "red",
    };

    return (
        <div>
            <h1>Form Registration</h1>
            <div>
                <form onSubmit={handleSubmit} ref={formref}>
                    <div>
                        <label htmlFor="username">
                            UserName <span style={starStyle}>*</span>
                        </label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
