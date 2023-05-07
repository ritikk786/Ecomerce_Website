import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Fetchdata from './Fetchdata'


const Homepagedata =  () => {
  const [movies, setMovies]=useState([]);
  const [isloading, setIsloading]=useState(false)
  const [error, setError]=useState(null)
  const [stopfetching, setStopfetching]=useState(false)
  
 async function fetchhandler(){
  try{
    
    setIsloading(true)
    const response = await fetch('https://swapi.dev/api/films');
  
    if(!response.ok){
      throw new Error('something went wrong  ....Retrying')

    }
    
    console.log('response',response)

    const data = await response.json()
      console.log('data',data)
        const transformeddata = data.results.map((item)=>{
          return {
            id:item.episode_id,
            title:item.title,
            director:item.director,
            date:item.release_date,
  
          }
  
        })
        console.log('transformed', transformeddata)
        setMovies(transformeddata)
        console.log('nothing')
      }
      catch(error){
        setError(error.message)
      }
      setIsloading(false)
      
  }
  useEffect(()=>{
    let timer;
    if(error){

      setStopfetching(true)
       timer = setTimeout(() => {
        fetchhandler()
        setError(null)
      }, 5000);
    }
    return ()=>{
      clearTimeout(timer)
    }
  },[error])

  const stopfetchinghandler=()=>{
    setStopfetching(false)
    setError(null)
   
  }
  useEffect(()=>{
    fetchhandler()
  },[])
  return (
    <>
 

{/* <Button onClick={fetchhandler}> Show Movies</Button> */}


{console.log('component')}
    {stopfetching && <Button onClick={stopfetchinghandler} className='btn-danger'>Cancel</Button> }
    
    {isloading && <p>Loading...</p>}
    {error && !isloading && <p>{error}</p> }
    {!isloading && <Fetchdata movies={movies}/> }
    
    </>
  )
}
export default Homepagedata;