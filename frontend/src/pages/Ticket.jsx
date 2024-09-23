// // import { useEffect } from 'react'
// // import {toast} from 'react-toastify'
// // import React from 'react'
// // import { useSelector,useDispatch} from 'react-redux'
// // import {getTicket} from '../features/tickets/ticketSlice'
// // import BackButton from '../components/BackButton'
// // import Spinner from '../components/Spinner'
// // import { useParams } from 'react-router-dom'
// // function Ticket() {
// //    console.log("hi ticket'");
// //   const {ticket,isLoading,isSuccess,isError,message}=useSelector((state)=>state.tickets)

// //   const params=useParams()
// //     const dispatch = useDispatch();
// //     const {ticketId}=useParams()  
// //   useEffect(()=>{
// //     if(isError){
// //         toast.error(message)
// //     }
// //     dispatch(getTicket(ticketId))
// //   },[isError,message,ticketId])


// //   if(isLoading){
// //     return <Spinner/>
// //   }
// //   if(isError){
// //     return <h3>SomeThing Went Wrong</h3>
// //   }
// //   return (
// //     <div className='ticket-page'>
// //       <header className='ticket-header'>
// //         <BackButton url='/tickets/'/>
// //         <h2>
// //           Ticket ID :{ticket._id}
// //           <span className={`status status-${ticket.status}`}>
// //             {ticket.status}
// //           </span>
// //         </h2>
// //         <h3>
// //           Date Submitted:{new Date(ticket.createdAt).toLocaleString('en-US')}
// //         </h3>
// //         <hr/>
// //         <div className="ticket-desc">
// //           <h3>
// //            Description of Issues
// //           </h3>
// //           <p>{ticket.description}</p>
// //         </div>
// //       </header>
    
// //     </div>
// //   )
// // }

// // export default Ticket
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTicket,closeTicket } from '../features/tickets/ticketSlice';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import {getNotes ,reset as notesReset} from '../features/notes/noteSlice'
// import { useParams,useNavigate} from 'react-router-dom';
// import NoteItem from '../components/NoteItem';

// function Ticket() {
//   const { ticket, isLoading, isError, message } = useSelector((state) => state.tickets);
//   const { notes, isLoading:notesIsLoading } = useSelector((state) => state.notes);
//   const { ticketId } = useParams();
//   const dispatch = useDispatch();
//   const navigate=useNavigate();

//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }
//     dispatch(getTicket(ticketId));
//     dispatch(getNotes())
//   }, [dispatch, isError, message, ticketId]);

//   const onTicketClose=()=>{
//       dispatch(closeTicket(ticketId))
//       toast.success('Ticked Closed');
//       navigate('/tickets')
//   }

//   if (isLoading || notesIsLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h3>Something Went Wrong</h3>;
//   }

//   // Check if ticket is available before accessing its properties
//   if (!ticket) {
//     return <h3>No Ticket Found</h3>;
//   }

//   return (
//     <div className='ticket-page'>
//       <header className='ticket-header'>
//         <BackButton url='/tickets/' />
//         <h2>
//           Ticket ID: {ticket._id}
//           <span className={`status status-${ticket.status}`}>
//             {ticket.status}
//           </span>
//         </h2>
//         <h3>
//           Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
//         </h3>
//         <h3>
//           Product:{ticket.product}
//         </h3>
//         <hr />
//         <div className="ticket-desc">
//           <h3>Description of Issues</h3>
//           <p>{ticket.description}</p>
//         </div>
//         <h2>Notes</h2>
//       </header>
//       {notes.map((note)=>(
//         <NoteItem key={note._id} note={note}/>
//       ))}
//       {ticket.status !=='closed' &&(
//         <button onClick={onTicketClose} className="btn btn-block btn-danger">CloseTicket</button>
//       )}
//     </div>
//   );
// }

// export default Ticket;
// import { useEffect,useState} from 'react';
// import Modal from 'react-modal'
// import { FaPlus } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import { getNotes, reset as notesReset } from '../features/notes/noteSlice';
// import { useParams, useNavigate } from 'react-router-dom';
// import NoteItem from '../components/NoteItem';

// const customStyles = {
//   content: {
//       width: '600px',
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       position: 'relative',
//   },
// };
// Modal.setAppElement('#root')

// function Ticket() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [noteText, setNoteText] = useState('');
//   const { ticket, isLoading, isError, message } = useSelector((state) => state.tickets);
//   const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes);
//   const { ticketId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }
//     dispatch(getTicket(ticketId));
//     dispatch(getNotes(ticketId)); // Pass the ticketId to get the notes
//   }, [dispatch, isError, message, ticketId]);

//   const onTicketClose = () => {
//     dispatch(closeTicket(ticketId));
//     toast.success('Ticket Closed');
//     navigate('/tickets');
//   };

//   if (isLoading || notesIsLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h3>Something Went Wrong</h3>;
//   }
//   const openModal = () => setModalIsOpen(true);
//     const closeModal = () => setModalIsOpen(false);

//   // Check if ticket is available before accessing its properties
//   if (!ticket) {
//     return <h3>No Ticket Found</h3>;
//   }

//   return (
//     <div className='ticket-page'>
//       <header className='ticket-header'>
//         <BackButton url='/tickets/' />
//         <h2>
//           Ticket ID: {ticket._id}
//           <span className={`status status-${ticket.status}`}>
//             {ticket.status}
//           </span>
//         </h2>
//         <h3>
//           Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
//         </h3>
//         <h3>
//           Product: {ticket.product}
//         </h3>
//         <hr />
//         <div className="ticket-desc">
//           <h3>Description of Issues</h3>
//           <p>{ticket.description}</p>
//         </div>
//         <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Add Note"
//             >
//         <h2>Notes</h2>
//       </header>
//       {ticket.status !== 'closed' && (
//                 <button onClick={openModal} className="btn">
//                     <FaPlus /> Add Note
//                 </button>
//             )}

//       {Array.isArray(notes) && notes.length > 0 ? (
//         notes.map((note) => (
//           <NoteItem key={note._id} note={note} />
//         ))
//       ) : (
//         <p>No notes available</p>
//       )}
//       {ticket.status !== 'closed' && (
//         <button onClick={onTicketClose} className="btn btn-block btn-danger">
//           Close Ticket
//         </button>
//       )}
//     </div>
//   );
// }


// export default Ticket;
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { createNote,getNotes, reset as notesReset } from '../features/notes/noteSlice';
import { useParams, useNavigate } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};
Modal.setAppElement('#root');

function Ticket() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const { ticket, isLoading, isError, message } = useSelector((state) => state.tickets);
  const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes);
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));

    return () => {
      dispatch(notesReset()); // Reset notes state when the component unmounts
    };
  }, [dispatch, isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };
    const onNoteSubmit=(e)=>{
      e.preventDefault()
      dispatch(createNote({noteText,ticketId}))
      closeModal()
    }
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  if (!ticket) {
    return <h3>No Ticket Found</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets/" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issues</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      
      <h2>Notes</h2>
      {ticket.status !== 'closed' && (
        <button onClick={openModal} className="btn">
          <FaPlus /> Add Note
        </button>
      )}
    
      {Array.isArray(notes) && notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))
      ) : (
        <p>No notes available</p>
      )}

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Close Ticket
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add a Note</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Ticket;
