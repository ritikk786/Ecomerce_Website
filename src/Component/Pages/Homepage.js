import React from 'react'
import classes from './Homepage.module.css'
import { Button } from 'react-bootstrap';
import Homepagedata from './Homepagedata'

const Homepage = () => {
    return (
        <>
            <div className={classes.backgrounddiv}>
                <div>
                    <button className={classes.album}> Get Our Latest Album</button>
                </div>
                <button className={classes.plybtn}>►</button>

            </div>
            <div style={{textAlign:'center'}}>
                <table className={classes.table}>
                    <h1>Tours</h1>
                        <Homepagedata/>
                    {/* <tr> */}
                        
                        {/* <th>JUL16</th>
                        <td>DETROIT, MI</td>
                        <td>DTE ENERGY MUSIC THEATRE</td>
                        <td><Button className='btn-sm'>Book Tickets</Button></td> */}
                    {/* </tr> */}
                    {/* <tr>
                        <th>JUL19</th>
                        <td>TORONTO,ON</td>
                        <td>BUDWEISER STAGE</td>
                        <td><Button className='btn-sm'>Book Tickets</Button></td>
                    </tr>
                    <tr>
                        <th>JUL 22</th>
                        <td>BRISTOW, VA</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td><Button className='btn-sm'>Book Tickets</Button></td>
                    </tr> */}
                </table>
            </div>
        </>
    )
}
export default Homepage;
