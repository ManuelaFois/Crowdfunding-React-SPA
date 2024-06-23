import PreviewPost from "./PreviewPost";
import bambinaAnimali from "../assets/bambina_animali.jpg";
import Inquinamento from "../assets/Inquinamento.jpg";
import bambinaSmartphone from "../assets/bambinaSmartphone.jpg";
import bambini from "../assets/bambiniprato.jpg";

export default function PreviewBlogBar() {
  return (
    <div id="PreviewBlogBar-container" className="container-fluid px-4">
      <div className="row">
        <div className="PreviewBlogBar-card col-xs-12 col-sm-6 col-md-3 mx-0 text-center">
          <PreviewPost
            title="L'importanza di ristabilire il legame perduto tra uomo, animali e natura"
            date="Giugno 05, 2024"
            author="Mario Verdi"
            cover={bambinaAnimali}
            alt="foto_bambina_con_animali"
            linkPost="/Post4"
          />
        </div>

        <div className="PreviewBlogBar-card col-xs-12 col-sm-6 col-md-3 mx-0 text-center">
          <PreviewPost
            title="Inquinamento: l'urgenza di agire per il futuro del nostro pianeta"
            date="January 10, 2024"
            author="John Doe"
            cover={Inquinamento}
            alt="foto_inquinamento"
            linkPost="/Post5"
          />
        </div>

        <div className="PreviewBlogBar-card col-xs-12 col-sm-6 col-md-3 mx-0 text-center">
          <PreviewPost
            title="La carenza di relazione con la natura e gli animali nei bambini"
            date="February 4, 2024"
            author="Jane Smith"
            alt="bambina con smartphone"
            cover={bambinaSmartphone}
            linkPost="/Post2"
          />
        </div>

        <div className="PreviewBlogBar-card col-xs-12 col-sm-6 col-md-3 mx-0 text-center">
          <PreviewPost
            title="Il nostro evento ha riscosso un gran successo, la raccolta fondi prosegue"
            date="January 10, 2024"
            author="John Doe"
            cover={bambini}
            alt="foto_laboratorio_didattico"
            linkPost="/Post3"
          />
        </div>
      </div>
    </div>
  );
}
