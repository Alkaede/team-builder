import React, { useState }from 'react';
import { TeamMember } from './components/TeamMem'
import Form from './components/Form'
import './App.css';

function App() {

  const initTeamList = [
    {
      name: 'Andrew',
      email: 'dummyemail@email.com',
      age: '23',
      pronouns: 'He/Him'
    }
  ]
  
  const formVal = {
    name: '',
    email: '',
    age: '',
    pronouns: ''
  }
  
  const [teamList, setTeamList] = useState(initTeamList);
  const [form, setForm] = useState(formVal)
  
  const inputChange = (name, value) => {
    setForm({...form, [name]: value})
  }
  
  const submitForm = () => {
    setTeamList([...teamList, {...form}])
    setForm(formVal)
  }
  

  
  return (
    <div className="App">
      <Form input={inputChange} submit={submitForm} initial={form}/>
      {
        teamList.map(ele => <TeamMember member={ele}/>)
      }
    </div>
  );
}


export default App;
