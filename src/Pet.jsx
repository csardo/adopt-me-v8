import { Link } from 'react-router-dom';
// use Link instead of a tag in SPAs, but note anytime you use a Link tag it has to be within a BrowserRouter component

const Pet = ({ name, animal, breed, images, location, id }) => {
    let hero = "http://pet-images.dev-apis.com/pets/none.jpg";

    if (images.length) {
        hero = images[0];
    }

  return (
      <Link to={`/details/${id}`} className="pet">
          <div className="image-container">
              <img src={hero} alt={name} />
          </div>
          <div className="info">
              <h1>{name}</h1>
              <h2>{animal} - {breed} - {location}</h2>
          </div>
      </Link>
      
  );
};

export default Pet;
