import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NotesForm from './NotesForm';
import NotesList from './NotesList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description:'',
      notes: []
    };
  };
  updateFields = field => event =>{
    //console.log(event.target.value); //{/* e.target es el padre que llama el evento, en este caso es imput */}
    this.setState({
      [field]: event.target.value
    })
  // updateValue = event =>{
  //   //console.log(event.target.value); //{/* e.target es el padre que llama el evento, en este caso es imput */}
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })


    //console.log(this.state.value);
  };
  saveNote = (e) => {
    if(this.state.title.trim() && this.state.description.trim()){
      this.setState({
        title:'',
        description: '',
        notes: [
          ...this.state.notes,
          {
          id: Date.now(),
          title: this.state.title,
          description: this.state.description
          }
        ],
        errors: {}
      });
    }
  }
  render(){
    console.log(this.state)
    return (
      <Fragment>
        <Typography align='center' variant='h2' gutterBottom>
          Hello World
        </Typography>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes}/>
          </Grid>
          <Grid item xs={8}>
            <NotesForm
            title={this.state.title}
            description={this.state.description}
            //updateValue={this.updateValue}
            updateFields = {this.updateFields}
            saveNote = {this.saveNote}
            />
          </Grid>
        </Grid>
        <Fab color='primary' className='addIcon'>
          <AddIcon/>
        </Fab>
      </Fragment>
    )
  }
}

export default App;
