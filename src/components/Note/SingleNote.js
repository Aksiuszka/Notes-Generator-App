import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import {useHistory} from 'react-router-dom';

const useStyles=makeStyles({
 field:{
   display:'block',
   marginTop:20,
   marginBottom:20
 }
})

function SingleNote() {
const classes = useStyles();
const history = useHistory;
const [title, setTitle] = useState('');
const [text, setText] = useState('');
const [titleError, setTitleError] = useState(false);
const [textError, setTextError] = useState(false);
const [kategoria, setKategoria] = useState('fizyka');
const handleSubmit = (e)=>{
  e.preventDefault();
  if(title&&text){
    console.log(title,text, kategoria);
    setTitleError(false);
    setTextError(false);
  }
  if(title===''){
    setTitleError(true);
  }
  if(text===''){
    setTextError(true);
  }
  if(title&&text){
    fetch('http://localhost:8000/notes',{
      method:'POST',
      headers:{"Content-type": "application/json"},
      body: JSON.stringify({title,text,kategoria})
  })
    }
  }

  return (
    <Container>
      <Typography
      variant="h5"
      gutterBottom>Wygeneruj notatkę</Typography>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
        onChange={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Tytuł notatki"
        variant="outlined"
        fullWidth
        error={titleError}
        required>

        </TextField>
        <TextField
        onChange={(e)=>setText(e.target.value)}
        className={classes.field}
        label="Twój tekst"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={5}
        error={textError}>

        </TextField>
        <FormControl
        classes={classes.field}>
        <FormLabel>Dodaj kategorię</FormLabel>
        <RadioGroup value={kategoria} onChange={(e)=> setKategoria(e.target.value)}>
        <FormControlLabel value="fizyka"control={<Radio/>} label="Fizyka" />
        <FormControlLabel value="matematyka"control={<Radio/>} label="Matematyka" />
        <FormControlLabel value="io"control={<Radio/>} label="Inżynieria Oprogramowania" />
        <FormControlLabel value="bazydanych"control={<Radio/>} label="Bazy Danych" />
        <FormControlLabel value="angielski"control={<Radio/>} label="Angielski" />
        </RadioGroup>
        </FormControl>

        <Button 
      type="submit"
      color="primary"
      variant="contained">Dodaj
      </Button>
        </form>
     
 </Container>
  );
}

export default SingleNote;
