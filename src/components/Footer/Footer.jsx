import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.scss"
import {Link} from"react-router-dom"
import SocialIcon from '../SocialIcons/SocialIcon';
const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className='icons'>
          <Link to="https://github.com/achieve-software" target="_blank"><GitHubIcon className='github-icon' size="40px"/></Link>
          <Link to="https://www.linkedin.com/in/aykut-taş-50bb0b272/" target="_blank"><LinkedInIcon className='linkedin-icon' size="40px"/></Link>
          <Link to="mailto:akivv45@gmail.com.com" target="_blank"><EmailIcon className='mail-icon' size="40px"/></Link>
        </div>
        <div className='copyright'>
            <p> &copy; Copyright {new Date().getFullYear()} </p>
        </div> */}
        <SocialIcon/>
    </div>
  )
}

export default Footer