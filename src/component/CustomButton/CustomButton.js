import { withStyles } from '@material-ui/styles';
import {styles} from './CustomButton.style';
import { Button } from '@material-ui/core';

const CustomButton = ({classes}) => {
    return ( 
        <Button className={classes.button} variant="contained" type="submit">Submit</Button>
     );
}
 
export default withStyles(styles)(CustomButton);