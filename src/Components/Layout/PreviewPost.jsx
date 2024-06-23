import { Link } from "react-router-dom";

export default function PreviewPost(Props) {
  return (
    <div id="preview-post-container" className="card h-100">
      <div className="card-body text-start pt-0 d-flex flex-column h-100">
        <img src={Props.cover} className="card-img-top" alt={Props.alt} />
        <p className="date-text">{Props.date}</p>
        <h2>{Props.title}</h2>
        <h4>{"di "}{Props.author}</h4>
        <p className="card-text mb-0">{Props.previewContent}</p>
        <div className="button-preview-card mt-auto">
          <div className="btn btn-light">
            <Link
              to={Props.linkPost}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              continua a leggere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
