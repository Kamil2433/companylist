import React from 'react'
import bootstrap from "react-bootstrap"
import { Card,CardBody,Modal,ModalHeader } from 'react-bootstrap'
// import Updatenodemodal from './Updatenotemodal'
import { useState } from 'react'
import { useComp } from '../Context/CompContext'
import Updatecompmodal from './Updatecompmodal'

export default function Company({title,desc,id}) {

    const {deletecomp}=useComp()


      const [showupdate,setupdate]=useState(false)
    // const {updatenote,deletenote}=useNotes()

    const update=()=>{

      // updatenote(id,title,desc)
      console.log("clicked")

    }

    const closethemodal=()=>{

      setupdate(false)
    }

  // const datetoadded=new Date(date);

  return (



<>




<Modal show={showupdate} onHide={closethemodal}>
        {/* <Addnotemodal onHide={closethemodal} /> */}
    <Updatecompmodal  onHide={closethemodal} givenid={id} giventitle={title} givendesc={desc}/>
      </Modal>

    
    <div className="" >
    <Card className="card" style={{margin:"5px",width:"300px"}}>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
      
        <Card.Text>
         {desc}
        </Card.Text>

       
        <div className='float-right'>
        <i class="fa-regular fa-pen-to-square" style={{color: "#3170dd",marginRight:"15px"}} onClick={()=>setupdate(true)}></i>
        <i class="fa-solid fa-trash" style={{color: "#4070c4",}}   onClick={()=>{deletecomp(id)}}></i></div>
      </Card.Body>
    </Card>
      </div>

      </>

  )
}
