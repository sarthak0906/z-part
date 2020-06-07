import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  const [Description, setDescription] = React.useState('');
  const [Title, setTitle] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        label="Description"
        multiline
        className={classes.textField}
        value={Description}
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
    </form>
  );
}
