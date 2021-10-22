import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import NoteCard from '../Note/NoteCard';

function Notes() {
    const [notes, setNotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    },[])

    const handleDelete = async (id)=>{
            await fetch('http://localhost:8000/notes' + id,{
                method:'DELETE'
            })
            const newNotes = notes.filter(note=> note.id!==id)
            setNotes(newNotes)
    }
    return (
        <Container>
        
            <Grid container spacing={4}>
            {notes.map(note =>(
                    <Grid item key={note.id} xs={12} sm={9} md={4} lg={3}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
            ))}
                </Grid>
       
        </Container>
    )
}

export default Notes
