function Project({ title, date, image, excerpt, url }) {
  return (
    <div className="container">
      <a href={url}>
        <img src={image} type="image/jpeg"></img>
      </a>
      <div className="text">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{excerpt}</p>
      </div>
      <style jsx>
        {`
          .container {
            cursor: pointer;
            height: 453px;
            margin-bottom: 48px;
          }
          a {
            border-bottom: none;
          }
          a:hover {
            border-bottom: none;
          }
          .text {
            margin-top: -160px;
            padding: 24px;
            position: absolute;
          }
          h2 {
            color: white;
            font-size: 24px;
            margin-bottom: 0;
          }
          h4 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            font-weight: 500;
            margin-top: 8px;
          }
        `}
      </style>
    </div>
  );
}

export default Project;
