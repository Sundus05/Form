import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioInput = ({onChange, error, helperText}) => {
    return ( 
        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" style={{display:'initial'}} onChange={onChange} error={error} helperText={helperText} >
                                <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
     );
}
 
export default RadioInput;