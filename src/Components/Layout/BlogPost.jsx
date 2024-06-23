import { Link } from "react-router-dom";

export default function BlogPost(Props) {
  return (
    <div className="container align-content-center">
      <div className="row">
        <div className="card-body p-5">
        <img src={Props.cover} className="card-img-top" alt={Props.alt} />
          <p className="card-title">{Props.date}</p>
          <h2 className="card-title">{Props.title}</h2>
          <h6 className="card-title mb-2">
            {"di "}
            {Props.author}
          </h6>
          
          <p className="card-text pt-3">{Props.content}</p>
                
                
          <div>
          <Link
                to="/Blog"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {"Torna al blog"}
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
