import React from 'react'
import { Button } from 'react-bootstrap';

 const Fetchdata = (props) => {
    console.log('fetch',props.movies)
  return (
    <>
    {props.movies.map((item)=>(
        <tr>
        <th>{item.title}</th>
        <td>{item.director}</td>
        <td>{item.date}</td>
        <td><Button className='btn-sm'>Book Tickets</Button></td>
        </tr>
    ))}
    </>
    
  )
}
export default Fetchdata;
