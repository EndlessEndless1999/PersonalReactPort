import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';



const HeroParagraph = () => {
    return (
        <div className="para-wrapper">
        <p className="heroparagraph">I specialise in building eye-catching websites with React.</p>
        <div className='button-wrapper'><Button variant="outlined" size="large" sx={{borderColor: 'white'}}><mark>Check out my CV!</mark></Button></div> 
        </div>
    )
} 

export default HeroParagraph;