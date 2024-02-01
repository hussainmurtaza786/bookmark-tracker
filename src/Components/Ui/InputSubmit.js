import React from 'react';
import style from './InputSubmit.module.css'
function InputSubmit({ data }) {

    console.log(data)
    return (
        <div className={style.result}>
            <ul>
                {data.map((res) => (
                    <li key={res.url}>
                        <div className={style.url}>
                         <label >
                            Url:{res.url}
                            </label>  
                          <br/>
                        </div>
                        <div className={style.name}>
                        <label >
                            Name:{res.name}
                            </label>  
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InputSubmit;
