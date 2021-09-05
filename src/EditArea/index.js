import { useState, useEffect } from 'react';
import './EditArea.css';

const EditArea = ({ name, phone, onSave, onClose, onChange }) => {
    const [inputValues, setInputValues] = useState({
        name: name || '',
        phone: phone || ''
    });

    const onInputChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })

    };
    
    useEffect(() => {
        if(onChange) onChange(inputValues)
    }, [inputValues])

    const addFoo = () => onSave(inputValues.name, inputValues.phone);

    return (
        <div className='editWindowWrapper'>
            <input name='name' className='editInput' value={name} onChange={onInputChange} placeholder='Name' />
            <input name='phone' className='editInput' value={phone} onChange={onInputChange} placeholder='Phone number' />
            <div>
                <button className='editButton' onClick={addFoo}>Save</button>
                <button className='editButton' onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default EditArea