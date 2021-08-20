import React from 'react'
import './profile.css'
import PropTypes from 'prop-types';

const me = props =>{
    return (
      <h1>
         <img src={me} />
      </h1>
    )
   }
const Profile = props => {
console.log(props)
return <h1>{props.fullname} {props.bio} {props.profession}</h1>

}

Profile.defaultProps={
    Name:"Mayssa choura",
     Bio:"22 yo",
     Profession :"etudiante"
  }

  Profile.propTypes={
   fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
  }
export default Profile 
