import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
        <div className="footer">
         {/* <a className='footer-link' href="https://github.com/stephenfudge" target="_blank"><GitHubIcon fontSize='large' />GitHub</a> */}
         <a className='footer-link' href="https://github.com/stephenfudge" target="_blank"> <i class="github icon"> GitHub</i></a>

         {/* <a className='footer-link' href="https://www.linkedin.com/in/stephenfudge/" target="_blank"><LinkedInIcon fontSize='large' />LinkedIn</a> */}
         <a className='footer-link' href="https://www.linkedin.com/in/stephenfudge/" target="_blank"><i class="linkedin icon">LinkedIn</i></a>

        <a className='footer-link' href="https://twitter.com/stephen_fudge" target="_blank"><i class="twitter icon">Twitter</i></a>
        </div>
    )
};

export default Footer;