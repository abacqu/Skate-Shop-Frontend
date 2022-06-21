import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner">
      <section className="banner-text">
        <Link to="/createboard">
          <section className="banner-text--effect">
            Create your own board
          </section>
        </Link>
      </section>
    </div>
  )
}

export default Banner