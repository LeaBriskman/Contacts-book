import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import EditArea from '../EditArea'
import './Contact.css';

const ContactCard = ({ name, phone, onDelete, itemToDelete }) => {
    const [edit, setEdit] = useState(false);
    const [contactData, setContactData] = useState({
        name: name,
        phone: phone
    })

    const avatarColor = Math.floor(Math.random()*16777215).toString(16);
    const firstNameLetters = contactData.name.split(' ').map(item => item[0]).join('');

    const deleteContact = () => onDelete(itemToDelete);

    const startEditing = () => setEdit(true);
    const stopEditing = () => setEdit(false);

    const saveNewData = (name, phone) => {
        setContactData({
            name: name,
            phone: phone
        })

        setEdit(false)
    }

    const onChange = (data) => {
        setContactData({
            name: data.name,
            phone: data.phone
        })
    };

    return (
        <div className='contactWrapper'>           
            {edit ? <EditArea name={contactData.name} phone={contactData.phone} onChange={onChange} onClose={stopEditing} onSave={saveNewData} /> : (
                <>
                <div className='avatar' style={{backgroundColor: `#${avatarColor}`}}>{firstNameLetters}</div>
                <div className='innerWrapper'>
                    <div>{contactData.name}</div>
                    <div>{contactData.phone}</div>
                    <AiOutlineDelete className='icon' onClick={deleteContact} />
                    <AiOutlineEdit className='icon' onClick={startEditing} />
                </div>
                </>
            )}
        </div>
    )
}

export default ContactCard