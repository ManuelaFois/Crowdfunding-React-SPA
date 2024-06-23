import "bootstrap/dist/css/bootstrap.min.css";
import "../Layout/Layout.css";

export default function ObjectBar() {
  return (
    <div id="object-list" className="container-fluid">
      <h3 className="text-center mb-4">OBIETTIVI</h3>
      <div className="row gx-4">
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <p className="card-text">
                Contribuire alla creazione di una cultura della sostenibilità e della tutela dell'ambiente, educando bambini e promuovendo comportamenti sostenibili e responsabili.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <p className="card-text">
              Educare i bambini al rispetto dell'ambiente e alla salvaguardia dell'ecosistema per formare cittadini responsabili e consapevoli.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <p className="card-text">
                Promuovere la relazione dei bambini con la natura e gli animali e favorire lo sviluppo di competenze fondamentali per la loro crescita personale.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <p className="card-text">
                Sensibilizzare sull'importanza della salvaguardia dell'ambiente e dell'ecosistema, coinvolgendo attivamente nel progetto e promuovendo comportamenti sostenibili e responsabili.. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
