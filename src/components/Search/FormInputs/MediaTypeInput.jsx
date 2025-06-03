const MediaTypeInput = ({ onChange, value, name }) => {
  return (
    <div className="accent-black">
      <input
        id="sf-mediaType-movie"
        className="mr-1"
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
      />
      <label htmlFor="sf-mediaType-movie">Movie</label>
      <br />
      <input
        id="sf-mediaType-tv"
        className="mr-1"
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
      />
      <label htmlFor="sf-mediaType-tv">Tv Show</label>
    </div>
  );
};
export default MediaTypeInput;
