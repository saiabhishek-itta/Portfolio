import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://ittasai.web.app" className="logo">
        <span>Regards,</span>
        <span> Sai Abhishek </span>
        <span>❤️</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
            
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sai-abhishek-itta/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/saiabhishek-itta"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B12019373609&text=Hello+Sai"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        {/*<a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          >
          <img src={telegram} alt="telegram" />
          </a>*/}
        <a
          href="https://www.instagram.com/saiabhishek.i/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
