type PropsCardHorizontal = {
  src: string;
  title: string;
  description: string;
};

const CardHorizontal = ({ src, title, description }: PropsCardHorizontal) => {
  return (
    <div className="inline-flex rounded-md border-2 border-sky-500">
      <img src={src} className="m-auto h-18 p-2" alt="React logo" />
      <div className="border-l-2 border-sky-500 p-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardHorizontal;
