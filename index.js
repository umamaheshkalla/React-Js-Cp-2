const element = (
  <div className="bg-container">
    <p className="heading">Congratulations</p>
    <div className="card-container">
      <img
        className="card-images"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="card-content">
        Gandhiji Institute of Science And Technology,
      </p>
      <p className="card-content">Bhimavaram</p>
      <img
        className="card-images"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
