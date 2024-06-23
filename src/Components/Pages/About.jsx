import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Giulia from "../assets/Giulia.jpg";
import Martina from "../assets/Martina.jpg";
import Luca from "../assets/Luca.jpg";
import Marco from "../assets/Marco.jpg";
import Federico from "../assets/Federico.jpg";
import Sara from "../assets/Sara.jpg";
import PreviewBlogBar from "../Layout/PreviewBlogBar";

export default function About() {
  return (
    
    <main className="container-fluid px-0 mx-0">
    
        <div id="description-about-container" className="container-fluid">
          <h3>{"CHI SIAMO"}</h3>
          <div id="about-description-text">
            <div className="row">
              <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xk-6 col-xxl-6 border-0">
                <div className="card-body">
                  <div className="card-text text-start py-4">
                    <h4> {"NATURA IN MOVIMENTO A.P.S."}</h4>
                    <p>
                      {
                        "'Natura in Movimento' è un'organizzazione di promozione sociale che si dedica all'educazione, alla zooantropologia didattica, all'educazione alla relazione con gli animali e la natura, alle attività educative in natura e all'educazione ambientale."
                      }
                    </p>
                    <p>
                      {
                       "Il nostro obiettivo è quello di promuovere la conoscenza e la consapevolezza dell'importanza della natura e degli animali per il benessere dell'individuo e della comunità, attraverso attività educative e di sensibilizzazione rivolte a bambini, giovani e adulti."
                      }
                    </p>
                    <p>
                      {
                      "In particolare, ci rivolgiamo alle scuole per offrire un supporto educativo di qualità, attraverso laboratori didattici, attività in natura, corsi di formazione e  consulenza. Il nostro intento è quello di fornire strumenti e competenze utili per la crescita personale e  per il futuro dei nostri bambini e delle future generazioni."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="card-about-img2"
                className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xk-6 col-xxl-6 border-0 "
              >
                <div className="card-body ">
                  <div className="card-text">
                    <p>
                      {
                        "La nostra missione è quella di creare una cultura della sostenibilità e della tutela dell'ambiente"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                id="card-about-img"
                className="container col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xk-6 col-xxl-6  border-0"
              >
                <div className="card-body "></div>
              </div>

              <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xk-6 col-xxl-6 border-0 ">
                <div className="card-body  ">
                  <div className="card-text text-start  py-4  ">
                    <h4>{"LA NOSTRA MISSIONE"}</h4>
                    <p>
                      {
                        "La nostra missione è quella di creare una cultura della sostenibilità e della tutela dell'ambiente, favorendo la conoscenza e la consapevolezza dell'impatto delle nostre azioni sull'ambiente e sulle altre specie animali e vegetali."
                      }
                    </p>
                    <p>
                      {
                        "Siamo convinti che l'educazione ambientale sia un passo  fondamentale per la costruzione di un futuro sostenibile e per la tutela della natura e degli animali. Unisciti a noi nella nostra missione di promuovere la conoscenza e la  tutela della natura e degli animali, e scopri come puoi sostenere il nostro progetto per le scuole."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <h3>{"IL TEAM DI 'NATURA IN MOVIMENTO'"}</h3>
      <div className="container-fluid m-0 p-0">
        <div id="team-container" className="row justify-content-center m-0 p-0">
          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0 align-items-center">
            <div className="circular-landscape">
              <img
                src={Marco}
                className="card-img-top"
                alt="Foto_Marco_Rossi"
              />
            </div>
            <div>
              <h6>{"Marco Rossi"}</h6>
              <p>{"Responsabile dei laboratori didattici"}</p>
            </div>
          </div>

          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0 align-items-center">
            <div className="circular-landscape">
              <img
                src={Martina}
                className="card-img-top"
                alt="Foto_Martina_Esposito"
              />
            </div>
            <div>
              <h6>{"Martina Esposito"}</h6>
              <p>{"Educatrice zooantropologica"}</p>
            </div>
          </div>

          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0  align-items-center">
            <div className="circular-landscape">
              <img src={Giulia} className="card-img-top" alt="Giulia_foto" />
            </div>
            <div>
              <h6>{"Giulia Rizzo "}</h6>
              <p>
                {
                  "Consulente per la progettazione di interventi educativi personalizzati"
                }
              </p>
            </div>
          </div>

          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0  align-items-center">
            <div className="circular-landscape">
              <img
                src={Federico}
                className="card-img-top"
                alt="Federico_foto"
              />
            </div>
            <div>
              <h6>{"Federico Bianchi"}</h6>
              <p>{"Formatore per l'educazione ambientale"}</p>
            </div>
          </div>

          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0 align-items-center">
            <div className="circular-landscape">
              <img src={Luca} className="card-img-top" alt="Luca_Neri_foto" />
            </div>
            <div>
              <h6>{"Luca Neri"}</h6>
              <p>{"Coordinatore delle attività in natura"}</p>
            </div>
          </div>

          <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0 align-items-center">
            <div className="circular-landscape">
              <img src={Sara} className="card-img-top" alt="Sara_foto" />
            </div>
            <div>
              <h6>{"Sara Moretti"}</h6>
              <p>
                {
                  "Responsabile delle attività di sensibilizzazione e comunicazione"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <PreviewBlogBar />
    </main>
  );
}
