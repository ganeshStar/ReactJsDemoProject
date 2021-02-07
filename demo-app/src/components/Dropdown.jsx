import React from "react";
function Dropdown(props) {
    return <>
        <select {...props} onChange={props.onChangehandler}>
            {props.options &&
                props.options.map(o =>
                    <option key={o.name} value={o.id}>
                        {o.name}</option>)
            }
        </select>
    </>;
}
export default Dropdown;