import * as React from 'react';
import { Input } from 'antd';


interface inputTextProps{
    placeholder:string;
    size?:'large' | 'small'
    }
    const damocoInput: React.FC<inputTextProps>=({placeholder='durga',size})=>{
        return (
            <Input size={size} placeholder={placeholder}/>
        )
    }
    export default damocoInput;