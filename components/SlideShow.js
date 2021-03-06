import React from 'react'
import mainTheme from "../styles/katTheme"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import '../styles/slick-theme.css'
import Link from "next/link"

const BelowSlideShow = () => {
  return (
    <div>
      <h2>The Black Hills' Favorite Country Station</h2>
      <a href="http://kout.tunegenie.com/#listenlive" className='listen-online'>Listen Online Now</a>
      <a href="https://thehomeslicegroup.com/" className='homeslice-media'>Homeslice Media Group</a>
      <style jsx>{`
        div{
          background: ${mainTheme.accent};
          color: white;
          display: flex;
          flex-wrap: wrap;
          text-transform: uppercase;
          align-items: center;
          font-weight: bold;
          letter-spacing: 2px;
        }
        a:hover, a:focus{
          background: ${mainTheme.accent};
          border: 1px solid
        }
        h2{
          margin-left: auto;
          margin-right: 3em;
        }
        .listen-online{
          background: black;
          border: 1px solid black;
        }
        .homeslice-media{
          background: #104b7d;
          border: 1px solid #104b7d;
          margin-right: 2em;
        }
        .listen-online, .homeslice-media{
          color: white;
          text-decoration: none;
          padding: .3em .8em;
        }
    `}</style>
    </div>
  )
}

const SlideShow = ({slides}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  }

  return (
    <div className='slide-show'>
      <Slider {...settings}>
        {slides.map(slide => {
          if (slide.externalLink) {
            return (
              <div className='slide-container' key={slide.image}>
                <a  href={slide.externalLink}>
                  <img src={slide.image}/>
                </a>
              </div>
            )
          }
          return (
            <div className='slide-container' key={ slide.image } >
              <Link href={slide.slug}>
                <a>
                  <img src={slide.image}/>
                </a>
              </Link>
            </div>
          )
        })}
      </Slider>
      <BelowSlideShow/>
      <style jsx>{`
        .slide-show img{
          display: block;
          width: 100%;
          height: auto;
        }
        .slide-show{
          opacity: 0;
          transform: translateY(-50%);
          max-width: 2000px;
          margin-left: auto;
          margin-right: auto;
        }
        .slide-container{
          display: block;
        }
      `}</style>
    </div>
  )
}

export default SlideShow