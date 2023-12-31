import { useEffect, useState } from 'react'
import './App.css'
import "animate.css"

import headImage from './images/AnneIgah.jpg'
import footerImg from "./images/anne3.jpg"
import logoImg from "./images/awhlogo.jpg"


import Menu from './components/Menu'
import GetBook from './components/GetBook'




function App() {

  function buyBook() {
    setBookModal(prev => !prev);
  }

  const [menu, setMenu] = useState(false);
  const [bookModal, setBookModal] = useState(false);
  const [logo, setLogo] = useState(false);


  useEffect(() => {
    let the_classes = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
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
    <div>
      <a href="http://anneswellnesshabour.com" className='site-link'>anneswellnesshabour.com</a>
      <img src={logoImg} alt="logo" className={`logo ${logo && "expand-logo"}`} onClick={() => { setLogo(prev => !prev) }} />

      <button className='menu-btn' onClick={() => { setMenu(prevState => !prevState); }}>{menu ? <i className="fa fa-2x fa-times"></i>
        : <i className="fa fa-2x fa-bars"></i>}</button>
      <Menu menu={menu} handleBook={buyBook} handleMenu={setMenu} />
      <div className="quick-nav">
        <a href="#header"></a>
        <a href="#about"></a>
        <a href="#also"></a>
        <a href="#get-book"></a>
        <a href="#mission"></a>
      </div>
      <header id="header">
        <div className='head-overlay'></div>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <p className='animate head-right'>Hello, I'm</p>
        <h1 className='animate head-left'>Anne Igah</h1>
        <p>CEO: ANNE'S WELLNESS HARBOUR</p>
        <a href="#about" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>
        <img src={headImage} alt="Anne" />
      </header>
      <div id="about" className="section">
        <div className='animate text'>

          <h2>Anne's Wellness Habour</h2>
          <hr />
          <p>A Wellness and safe Habour for the mentally challenged.</p>
          <br />

          <h2>About Anne</h2>
          <hr />
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
            wellness and find hope to win again.
          </p>
        </div>
        <a href="#also" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>
      </div >


      <div id="also" className="section">
        <div className='img-container'>
          {/* <img src={aboutImg} alt="" id="section-img" className='section-img animate image'></img> */}
        </div>

        <div className='animate text'>
          <p>
            She has a Book titled: <a href="https://www.amazon.co.uk/dp/B0C9S5R3TQ?ref_=pe_3052080_397514860" target="_blank" rel="noreferrer" className='book-title' onClick={() => buyBook()}> CONQUERING DEPRESSION & LIVING HAPPILY - MY LIFE EXPERIENCE </a> is a
            book inspired by God, born out of real experiences and research work on the subject matter. This book
            is also a story of the author's life and how she overcame depression. Anne is a compassionate minister of God
            with passion and calling to equip and reintegrate the depressed. She wants them to obtain total wellness and
            find hope again to win. Anne wants to channel her energy to reaching out to many going through Depression.
            She is passionate about the subject and enthusiastic about the outcome. The book is designed for readers mentally,
            emotionally and spiritually against the dreaded mental illness
            called DEPRESSION which many suffer from all over the world and often seek to hide it. This book is needed for such a time
            as this in our troubled world.
          </p>
        </div>

        <a href="#mission" className="go animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
          <span className="fa-stack fa"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-arrow-down fa-stack-1x fa-inverse"></i></span>
        </a>

        <br />

        {/* <Book hanldeModal={buyBook} /> */}

      </div >

      <GetBook />

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
            <li>1. To create annual enlightenment programme for 100 persons with mental health to access information that is adequate and appropriate for them to begin their healing journey.</li>
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
          {/* <img src={footerImg} alt="" className='footer-img' /> */}
        </div>
        <div className='footer-two'>
          <div className='name'>
            <p className='animate head-left'>Anne</p>
            <p className='animate head-right'>Igah</p>
          </div>
          <br />
          <div className='animate text icons'>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100009209071735" target="_blank" rel="noreferrer"><i className="fa fa-2x fa-facebook-square"></i></a>
              <br />
              <span>Anne Igah</span>
            </div>

            <div>
              <a href="https://www.instagram.com/anne_igah/?fbclid=IwAR2nuHz7fJbhKlt2Rv6BEBeOpYx7P5N7IZa4Ht185qq5pjV110LWn9FKbTE" target="_blank" rel="noreferrer">
                <i className="fa fa-2x fa-instagram"></i>
              </a>
              <br />
              <span>anne_igah</span>

            </div>
            <div>
              <a href="https://www.youtube.com/@anneIgah353" target="_blank" rel="noreferrer"><i className="fa fa-2x fa-youtube-square"></i></a>
              <br />
              <span>anneIgah353</span>
            </div>
            <div>
              <i className="fa fa-2x fa-envelope-square"></i>
              <span className="email">oamen.ehinome@gmail.com</span>
            </div>
          </div>
          <br />
          <p>For Counselling and Enquiries call: <span id="phone">08061726535</span></p>
        </div>
      </footer>
      {/* {bookModal && <Book hanldeModal={buyBook} />} */}
    </div>
  )
}



export default App
