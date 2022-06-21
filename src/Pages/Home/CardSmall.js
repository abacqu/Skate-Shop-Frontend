import { Link } from 'react-router-dom';

const CardSmall = (props) => {

  const loaded = () => {
    return props?.boards?.map((boards, index) => (
      <div className="card-small-card">
        <section className="card-small-card--name">
          <Link key={boards._id} to={`/boards/${boards?._id}`} >
            {boards?.name}
          </Link>
        </section>
        <section className="card-small-card--img"><img src={boards?.boardId?.bigImg} alt={boards?.board?.name}/></section>
        <section className="card-small-card--price">${boards?.boardId?.price}</section>
      </div>
    ));

  };
  const loading = () => {
    return <h1>loading...</h1>
  };

  return props.boards ? loaded() : loading(); 
  };

export default CardSmall;
