import React from 'react'

export default function Alertshow(props) {
const caplatize=(word)=>{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}

  return (
    props.alert&&
    <div className={`alert alert-${props.alert.type} fade show`} role="alert">
    <strong>{caplatize(props.alert.type)} : </strong>{props.alert.msg} 
    
  </div>
)}
