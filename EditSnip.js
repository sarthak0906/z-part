import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "99%",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [Company, setDescription] = React.useState('');
  const [Title, setTitle] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    if (value == '' || Company == '' || Title == ''){
      alert("values cannot be empty");
    }else {
      var body = {
        snip: {
            Title         : Title,
            Content       : value,
            Company       : Company,
            MagicNo       : 7
        }
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
      axios.post('http://159.89.165.229:8000/Z/Snippet/New', body)
        .then(response => {
          return (response.data)
        })
        .then(data => {
          console.log(data)
          alert("Snippet saved");
        })
        .catch(err => {
          alert("An error occured");
          console.log(err);
        })
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-multiline-flexible"
        label="Title"
        multiline
        className={classes.textField}
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        id="standard-multiline-flexible"
        label="Company"
        multiline
        className={classes.textField}
        value={Company}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id="standard-multiline-flexible"
        label="Content"
        multiline
        fullWidth
        value={value}
        onChange={handleChange}
      />
      <Grid container justify="flex-end" direction="row">
          <Grid key={value} item>
            <Button variant="contained" color="primary" onClick={submit} >Submit</Button>
          </Grid>
      </Grid>
    </form>
  );
}
