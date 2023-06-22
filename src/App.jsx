import { useEffect, useState } from 'react'
import './App.css'
import "animate.css"

import headImage from './images/anne2.jpg'
import aboutImg from "./images/anne5.jpg"
import footerImg from "./images/anne3.jpg"
import Menu from './components/Menu'
import Book from './components/Book'

function App() {

  function buyBook() {
    setBookModal(prev => !prev);
  }

  const [menu, setMenu] = useState(false);
  const [bookModal, setBookModal] = useState(false);

  useEffect(() => {
    let the_classes = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
          console.log("INtersect!!");
        } else {
          entry.target.classList.remove("scroll-animation");
        }
      })
    })

    for (let i = 0; i < the_classes.length; i++) {
      const elements = the_classes[i];

      observer.observe(elements);
    }
  })

  return (
    <>

      <button className='menu-btn' onClick={() => { setMenu(prevState => !prevState); }}>{menu ? <i className="fa fa-2x fa-times"></i>
        : <i className="fa fa-2x fa-bars"></i>}</button>
      <Menu menu={menu} handleBook={buyBook} handleMenu={setMenu} />
      <div className="quick-nav">
        <a href="#header"></a>
        <a href="#about"></a>
        <a href="#also"></a>
        <a href="#mission"></a>
      </div>
      <header id="header">
        <div className='head-overlay'></div>
        <p className='animate head-right'>Hello, I'm</p>
        <h1 className='animate head-left'>Anne Igah</h1>
        <a href="#about" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>
        <img src={headImage} alt="Anne" />
      </header>
      <div id="about" className="section">
        <div className='animate text'>

          <h2>About Anne</h2>
          <p>
            Anne has a mental Health Diploma and also  furthering her studies in the mental health sector.
            Anne Igah is a Business Administration graduate.  She is an ordained Pastor and she has a Diploma from All Nations For Christ Bible Institute.. She is a graduate from the Institute for National Transformation with the Oakseed Executive leadership course certificate. She is the CEO of Annie Devices and More.
          </p>
          <br />
          <p>
            Also, Anne is a compassionate minister of God with the passion and
            calling to equip and reintegrate the depressed. She dived into the
            health profession as inspired and directed by God. She wants those
            suffering from depression and anxiety disorder’s to obtain total
            wellness and to find hope again to win.
          </p>
        </div>
        <a href="#also" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>
      </div >

      {/* <footer id="contact">
        <div className='contact-img-cont'>
          <img src={footerImg} alt="" />
        </div> */}

      <div id="also" className="section">
        <div className='img-container'>
          {/* <img src={aboutImg} alt="" id="section-img" className='section-img animate image'></img> */}
        </div>

        <div className='animate text'>
          <p>
            She has a book titled <span className='book-title' onClick={() => buyBook()}>Conquering Depression And Living Happily</span>.
            This book is inspired by God, born out of real experiences
            and research. The  book is a story of her life and how
            she overcame Depression.. She desires to channel her energy to
            reaching out to many going through Depression and anxiety disorders
            through her life experiences and to help others to overcome.
            Moreso, the book is written to create public awareness on the
            subject of depression, provide relevant information, to guide
            others and to help them overcome depression.
            The book is designed to build readers mentally, emotionally and
            spiritually against the dreaded mental illness called depression which
            many want to hide.
          </p>
        </div>
        <a href="#mission" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>
      </div >

      <div id="mission" className="section mission ">

        <div className="animate text">
          <h3>Mission:</h3>
          <hr />
          <p>
            To create proper awareness on the subject of depression, enlightenment for early detention, to effectively overcome these challenges via counseling, coaching, training and mentoring.
          </p>
        </div>

        <br />

        <div className="core animate text">
          <h3>Core Values:</h3>
          <hr />
          <p>
            <li><span className='caps'>C</span>ompassion for persons with mental health challenges</li>
            <li><span className='caps'>A</span>wareness On Early Detection</li>
            <li><span className='caps'>R</span>esonate- With Your True Identity</li>
            <li><span className='caps'>E</span>mpathy- Identifying with Persons With Mental Health challenges</li>
            <li><span className='caps'>S</span>afe Habour- creating the right environment for total wellness.</li>
          </p>
        </div>

        <br />

        <div className="objectives animate text">
          <h3>Organaization Goals And Objectives</h3>
          <hr />
          <p>
            <li>1. To create annual enlightenment programme for 100 persons with mental health to access information that is adequate and appropriate for them to begin their healing joining.</li>
            <li>2. To create early detection awareness programme for 200 persons with mental health to enable them reverse a spiral downturn.</li>
            <li>3. To Provide counselling and therapeutic services for persons with mental health challenges.</li>
            <li>4. To provide relevant information, to guide others to prevent depression and those with depression to help them overcome depression.</li>
            <li>5. To equip and reintegrate the depressed. Empower them to obtain total wellness and find hope again to win.</li>
            <li>6. To Create public awareness and enlightenment advocating against stigmatization of persons suffering from mental illness</li>
            <li>7. To provide emotional support and conducive environment for therapeutic services and relaxation for persons with depression.</li>

          </p>
        </div>

      </div>
      <hr />
      <footer id="contact">
        <div className='contact-img-cont'>
          <img src={footerImg} alt="" />
        </div>
        <div>
          <div className='name'>
            <p className='animate head-left'>Anne</p>
            <p className='animate head-right'>Igah</p>
          </div>
          <div className='animate text'>
            <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
            <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
            <a href="#"><i className="fa fa-2x fa-instagram"></i></a>
          </div>
          <p className="email">anneigah@gmail.com</p>
        </div>
      </footer>
      {bookModal && <Book hanldeModal={buyBook} />}
    </>
  )
}



export default App
