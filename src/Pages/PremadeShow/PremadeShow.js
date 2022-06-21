import { useParams } from 'react-router-dom';
import './PremadeShow.scss'

const PremadeShow = (props) => {

  const { id } = useParams();
  const premade = props?.boards?.find((board) => board._id === id);

  const loaded = () => {
    return (
      <div className="premade-show">
        <div className="premade-show--images">
          <section className="premade-show--thumbs">
            <section className="premade-show--thumbs-front">
              Board Front
            </section>
            <section className="premade-show--thumbs-back">
              Board Back
            </section>
          </section>
          <section className="premade-show--large-img">
            <img src={premade.boardId.bigImg} />
          </section>
        </div>
        <div className="premade-show--list">
          <section className="premade-show--name">
            {premade.name}
          </section>
          <section className="premade-show--board">
            {premade.boardId.name}
            $ {premade.boardId.price}
          </section>
          <section className="premade-show--bearing">
            {premade.bearingId.name}
            $ {premade.bearingId.price}
          </section>
          <section className="premade-show--truck">
            {premade.truckId.name}
            $ {premade.truckId.price}
          </section>
          <section className="premade-show--wheel">
            {premade.wheelId.name}
            $ {premade.wheelId.price}
          </section>
        </div>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.boards ? loaded() : loading();
};

export default PremadeShow