import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "animate.css"

import headImage from './images/anne (3).png'
import aboutImg from "./images/anne (3).png"
import Menu from './components/Menu'

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let the_classes = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
          if (entry.target.classList.contains("image")) {
            console.log("Image!!");
            // console.log(entry.target);
          }
          else if (entry.target.classList.contains("text")) {
            console.log("text!!");
            // console.log(entry.target)
          }

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

      <button className='menu-btn' onClick={() => { setMenu(prevState => !prevState); }}>{menu ? "Close" : "Open"}</button>
      <Menu menu={menu} />
      <div className="quick-nav">
        <a href="#header"></a>
        <a href="#about"></a>
        <a href="#also"></a>
        <a href="#mission"></a>
      </div>
      <header id="header">
        {/* <img src={headImage} height='200px'></img> */}
        <div className='head-overlay'></div>
        <p>Hello, I'm</p>
        <h1>Anne Igah</h1>
        {/* <p>I gat you brr</p> */}
        <a href="#about" className="animate__animated animate__fadeOutDown animate__slow	1s animate__infinite	infinite">
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
        {/* <img src={aboutImg} alt="" width="200px" className="animate image"></img> */}
      </div >

      <div id="also" className="section">
        <img src={aboutImg} alt="" width="300px" className='animate image'></img>

        <div className='animate text'>
          {/* <p>
            Also, Anne is a compassionate minister of God with the passion and
            calling to equip and reintegrate the depressed. She dived into the
            health profession as inspired and directed by God. She wants those
            suffering from depression and anxiety disorder’s to obtain total
            wellness and to find hope again to win.
          </p> */}

          <p>
            She has a book <span className='book-title'>Titled Conquering Depression And Living Happily</span>.
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

      </div >

      <div id="mission" className="section mission">
        <div className="animate text">

          <div className="">
            <p>
              Mission:
              To create proper awareness on the subject of depression, enlightenment for early detention, to effectively overcome these challenges via counseling, coaching, training and mentoring.
            </p>
          </div>
          <div className="core">
            <p>
              Core Values:
              <br />
              {/* <ul> */}
              <li>C. Compassion for persons with mental health challenges</li>
              <li>A. Awareness On Early Detection</li>
              <li>R. Resonate- With Your True Identity</li>
              <li>E. Empathy- Identifying with Persons With Mental Health challenges</li>
              <li>S. Safe Habour- creating the right environment for total wellness.</li>
              {/* </ul> */}
            </p>
          </div>
          <div className="objectives">
            <p>
              Objectives And Goals
              <li>Adequate and appropriate enlightenment and orientation for persons with mental health challenges</li>
              <li>Creating Awareness for early detention of mental illness</li>
              <li>Advocating for accurate Diagnosis</li>
              <li>Advocacy for accurate and efficient treatment</li>
              <li>Providing Emotional Support for persons with mental health challenges</li>
              •Enlightement on the spiritual side of depression
              •To create the right environment for total wellness
            </p>
          </div>

        </div>
        {/* <img src={aboutImg} alt="" width="200px" className="animate image"></img> */}

      </div>

    </>
  )
}

export default App
