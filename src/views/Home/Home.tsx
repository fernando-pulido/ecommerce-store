import './Home.css'
import Img1 from './../../assets/image/img1.jpg'
import Img2 from './../../assets/image/img2.jpg'
import Img3 from './../../assets/image/img3.jpg'

function Home() {
  const data = [
    { src: Img1, alt: 'image of a gym' },
    { src: Img2, alt: '' },
    { src: Img3, alt: '' },
  ]
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={item.src}
            className={`carousel-item carousel-image ${
              index === 0 && 'active'
            }`}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Home
