import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Note = ({ note }) => {
  //const note = props.notes.filter(note => note.id === parseInt(props.match.params.id))[0]
  return (
    <Fragment>
      <Typography align='center' variant='h4' gutterBottom >
        {note.title}
      </Typography>
      <Typography align='justify' variant='subtitle1' >
        {note.description}
      </Typography>
    </Fragment>
  )
}

export default Note;
