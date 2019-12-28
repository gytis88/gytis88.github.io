import React from 'react';
import {
  Paper,
  InputBase,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Web as WebIcon,
} from '@material-ui/icons';
import cc from 'classcat';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    padding: `${spacing(1)}px ${spacing(2)}px`,
    alignItems: 'center',
  },
  input: {
    marginLeft: `${spacing(1)}px`,
    fontSize: 24,
  },
  error: {
    '& > *': {
      color: 'red',
    },
    '& > $container': {
      border: '1px solid red',
    }
  },
  errorMessage: {
    marginTop: `${spacing(1)}px`,
  }
}));

function URLField(props) {
  const { error } = props;
  const classes = useStyles();
  const rootClasses = cc([{
    [classes.error]: error,
  }, classes.root]);

  return (
    <div className={rootClasses}>
      <Paper className={classes.container}>
        <WebIcon />
        <InputBase
          className={classes.input}
          {...props}
          fullWidth
        />
      </Paper>
      <Typography className={classes.errorMessage}>{error}</Typography>
    </div>
  );
}

export default URLField;
