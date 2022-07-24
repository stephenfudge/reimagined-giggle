import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
         <a className='footer-link' href="https://github.com/stephenfudge" target="_blank" rel="noopener noreferrer"> <i class="github icon"> GitHub</i></a>

         <a className='footer-link' href="https://www.linkedin.com/in/stephenfudge/" target="_blank" rel="noopener noreferrer"><i class="linkedin icon">LinkedIn</i></a>

        <a className='footer-link' href="https://twitter.com/stephen_fudge" target="_blank" rel="noopener noreferrer"><i class="twitter icon">Twitter</i></a>
        </div>
    )
};

export default Footer;