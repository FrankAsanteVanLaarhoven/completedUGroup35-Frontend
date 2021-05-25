import IndexImageStyles from './styles/IndexImageStyles';

export default function IndexImage({ catagory }) {
  return (
    <IndexImageStyles>
      <div className="image">
        <div className="overlay">
          <h1 id={catagory}>{catagory}</h1>
        </div>
      </div>
    </IndexImageStyles>
  );
}
