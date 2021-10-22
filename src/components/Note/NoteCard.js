import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import {FaTrash} from 'react-icons/fa';
import Typography from '@mui/material/Typography';




function NoteCard({note, handleDelete}) {
    return (
        <div>
            <Card>
                <CardHeader
                 action={
                    <IconButton onClick={()=> handleDelete(note.id)}>
                      <FaTrash/>
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.kategoria}
                />
               <CardContent>
                   <Typography>
                       {note.text}
                   </Typography>
               </CardContent>
                  
                
           </Card>
          
        </div>
    )
}

export default NoteCard
