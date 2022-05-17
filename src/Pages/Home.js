import { getDocs, getFirestore, collection } from 'firebase/firestore'
import React, {useState} from 'react'
import './home.css'

function Home() {
    const db = getFirestore()
    let [resources, setResources] = useState([]);
    const colRef = collection(db, 'resources')
    getDocs(colRef)
    .then((snapshot) => {
       let tempResource =[]
        snapshot.docs.forEach((doc) => {
            tempResource.push({ ...doc.data(), id: doc.id})
            // console.log(resources)
    })
    setResources(tempResource)
})
    .catch(err => console.log(err.message))
  return (
      <>
     
      {resources.length> 0 ? resources.map(function(resource, i){
       return (
       <>
       <div className="card">
       <h4 className='title'>{resource.title}</h4>
        <p className='description'>{resource.description}</p>
        <a className = 'resource' href={resource.link}>{resource.link}</a>
        <div className="info">
        <p className = 'email'>Uploaded by: {resource.email}</p>
        <p className = 'standard'>Stream: {resource.standard}</p>
        <p className = 'subject'>Subject: {resource.subject}</p>
        </div> 
        </div>
        </>
        )
        
      }): 
      <h5>Please wait...</h5>}
      </>
  )
}

export default Home