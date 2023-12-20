export default function SeedPreview({
    image,
    title,
    plot,
    setGameplay,
    setSeed,
  }) {
    return (
      <div className="">
        <div className="">
          <img src={image} className="" />
          <div className="">
            <h1 className="">{title}</h1>
            <p>{plot}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setSeed({ image: image, title: title, plot: plot });
            setGameplay(true);
          }}
          className=""
        >
          Start Adventure
        </button>
      </div>
    );
  }
  