import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import EditArea from './EditArea';
import './App.css';
import data from './data.json';

const App = () => {
  const [contactsArr, setContactsArr] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [openAddWindow, setOpenAddWindow] = useState(false);

  useEffect(() => {
    setContactsArr(data)
  }, []);

  //sorting by alphabet
  useEffect(() => {
    let sortableItems = [...contactsArr];
    sortableItems.sort((a, b) => a.name > b.name ? 1 : -1);   
    setSortedItems(sortableItems)
  }, [contactsArr]);

  const openAddWindowFoo = () => setOpenAddWindow(true);
  const closeAddWindowFoo = () => setOpenAddWindow(false);

  const addContact = (name, phone) => {
    if (name === '' || phone === '') alert('Name and phone are requred fileds')
    else {
      let arrWithNewContact = [...contactsArr]
  
      arrWithNewContact.unshift({name: name, phone: phone})
      setContactsArr(arrWithNewContact)
  
      setOpenAddWindow(false)
    }
  };

  const deleteContact = i => {
    const arrWithDeletedContact = [...sortedItems]
    arrWithDeletedContact.splice(i, 1)
    setContactsArr(arrWithDeletedContact)
  };

  return (
    <>
      <div className="main-title">Contacts book <span className='addButton' onClick={openAddWindowFoo}>+</span></div>
      {openAddWindow && <EditArea onSave={addContact} onClose={closeAddWindowFoo} />}
      {sortedItems.map((item, i) => <ContactCard key={i} name={item.name} phone={item.phone} itemToDelete={i} onDelete={deleteContact}/>)}
    </>
  );
}

export default App;
