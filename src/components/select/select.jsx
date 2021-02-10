import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {ReactComponent as DownArrow} from '../../assets/images/select/Arrow.svg';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'100%',
  },
  selectEmpty: {
    color: '#E7C68E',
    margin:'0 1rem',
  }
}));

const Select = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.Category}
          IconComponent={()=><DownArrow/>}
          onChange={handleChange}
        >
          <option value="" disabled>
            All Category
          </option>
          <option value={10}>Free Shipping</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>

    </div>
  );
};

export {Select};