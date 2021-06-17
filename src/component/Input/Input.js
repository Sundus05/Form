import { withStyles } from '@material-ui/styles';
import {styles} from './Input.style';
import TextField from '@material-ui/core/TextField';


const InputField = ({classes, inputtype, inputlabel, value, onChange, name, placeholder, error, helperText }) => {
    return ( 
        
        <TextField id="standard-basic" type={inputtype} name={name} label={inputlabel} placeholder={placeholder} className={classes.input} value={value} onChange={onChange} error={error} helperText={helperText} />

      
        
     );
}
 
export default withStyles(styles)(InputField);