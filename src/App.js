import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState({
    imgArr: [],
  })

  const callAPI = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_DEMO_KEY}&count=10`
      )
      .then((response) => {
        setState({
          imgArr: response.data,
        })
      })
  }

  useEffect(() => {
    callAPI()
  }, [])

  // Update Slider Data through conditional rendering
  let sliderToggle
  if (state.imgArr !== undefined || state.imgArr.length !== 0) {
    sliderToggle = state.imgArr.map((image) => {
      return (
        <>
          <div style={{ display: 'flex' }}>
            <img
              src={image.hdurl}
              style={{
                alignSelf: 'center',
                maxHeight: '75vh',
                width: '100%',
              }}
            />
          </div>
          <Typography variant='subtitle1'>{image.title}</Typography>
        </>
      )
    })
  } else {
    sliderToggle = ''
  }

  // Slick Slider Settings

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  }

  return (
    <Grid container className='App' direction='column' xs={12}>
      <Grid item xs={12}>
        <Typography
          variant='h1'
          style={{ fontSize: '48px', margin: '15px 0px 5px 0px' }}
        >
          A Quick Jaunt Through Our Universe...
        </Typography>
        <Typography
          variant='h2'
          style={{ fontSize: '24px', marginBottom: '15px' }}
        >
          courtesy of NASA's Image of the Day API
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          width: '50vw',
          height: '200px',
        }}
      >
        <Slider {...settings}>{sliderToggle}</Slider>
      </Grid>
    </Grid>
  )
}

export default App
