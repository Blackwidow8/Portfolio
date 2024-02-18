import Button from '../Button'
import image from '../../assets/woman-working-on-a-laptop.jpg'
import Image from '../../assets/125906521.jpg'
import './header.css'

const Header = () => {
    return (
        <section>


            <div className='hero-info'>
                <h1>Code With Susan Wafula</h1>
                <p>I am professional Software Developer <br /> and a student at Zindua School.<br />
                    I love to code and i'm always open <br /> to learn how to code. </p>
                <div className='styled-break'></div>
                <Button color='bg-blue-500' text='Hire Me' style='border-radius:20px' />
            </div>

            <div className='hero-image'>
                <img src={image} />
            </div>

            <section className='section2'>
                <div className='about-me-image'>
                    <img src={Image} />
                </div>
                <div className='about-me'>

                    <h1>About Me</h1>
                    <p>Born and raised in Kenya.<br /> Discovered my passion for <br />software engineering when I <br />first made my first website with<br /> HTML and CSS.</p>
                </div>
            </section>
        </section>

    )
}
export default Header

