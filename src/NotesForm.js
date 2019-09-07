import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const NotesForm = ({title, description, updateFields, saveNote}) => {
  return(
    <Fragment>
    <form onSubmit = {e => {
      e.preventDefault();
      {/*console.log(e.target);  e.target es el padre que llama el evento */}
      saveNote()
    }}>
      <Grid item xs={12}>
          <TextField
          required
          name='title'
          type='text'
          label='titulo'
          margin='normal'
          // onChange = {props.updateValue}/>
          onChange = {updateFields('title')}
          value={title}
          fullWidth/>
      </Grid>
        <Grid item xs={12}>
          <TextField
          name='description'
          multiline
          rows='4'
           margin='normal'
           fullWidth
           placeholder='anita lava la tina'
           onChange = {updateFields('description')}//  Material UI encapsula la funcion asi: (e) => updateField('description')(e)
           value={description}
           // onChange = {props.updateValue}
           />
        </Grid>
        </form>
      <Fab color='secondary' className='editIcon' onClick={saveNote}>
        <Icon>edit_icon</Icon>
      </Fab>
    </Fragment>
  )
};

export default NotesForm;
