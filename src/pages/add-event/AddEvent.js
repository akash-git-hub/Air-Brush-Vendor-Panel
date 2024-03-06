import React, {useState}  from 'react';
import MainCard from 'components/MainCard';
import EventForm from './EventForm';
import AddProduct from './AddProduct';


const AddEvent = () => {
  const [select, setSelect] = useState('');

  const handleChanges = (event) => {
      setSelect(event.target.value);
  };

  return (
    <MainCard>
        <EventForm/>
        <AddProduct select={select} handleChanges={handleChanges} />
    </MainCard>
  );
};

export default AddEvent;
