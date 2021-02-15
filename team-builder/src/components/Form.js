import React from 'react';

  const Form = ({input, submit, initial}) =>{

    const inputHandler = (event) => {
      input(event.target.name, event.target.value)
    };


    const prevRefresh = (event) => {
      event.preventDefault()
      submit()
    };



    return(
      <form>
        <label onSubmit={prevRefresh}>
          Name:
          <input 
            type='text'
            name='name'
            value={initial.name}
            onChange={inputHandler}
          />
        </label>
        <label>
          Email: 
          <input 
            type='text'
            name='email'
            value={initial.email}
            onChange={inputHandler}
          />
        </label>
        <label>
          Age:
          <input 
            type='number'
            name='age'
            min='1'
            max='999'
            value={initial.age}
            onChange={inputHandler}
          />
        </label>
        <label>
          Preferred Pronouns:
          <input 
            type='text'
            name='pronouns'
            value={initial.pronouns}
            onChange={inputHandler}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }

export default Form