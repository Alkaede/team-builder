import React from 'react';

export const TeamMember = ({ member }) => {
  return(
    <div>
      <h2>{member.name}</h2>
      <p>Email: {member.email}</p>
      <p>Age: {member.age}</p>
      <p>Preferred Pronouns: {member.pronouns}</p>
    </div>
  )
}