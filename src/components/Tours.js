import locations from '../locationInfo'
import TourCard from './TourCard'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {locations.map((location) => {
          return (
            <TourCard
              img={location.img}
              date={location.date}
              title={location.title}
              info={location.info}
              country={location.country}
              duration={location.duration}
              price={location.price}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Tours
