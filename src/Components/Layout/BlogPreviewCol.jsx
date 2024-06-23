import PreviewPost from "./PreviewPost";
import bambini from "../assets/bambiniprato.jpg";
import Laboratori from "../assets/Laboratori.jpg";
import bambinaAnimali from "../assets/bambina_animali.jpg";
import Inquinamento from "../assets/Inquinamento.jpg";
import bambinaSmartphone from "../assets/bambinaSmartphone.jpg";


import "../Pages/Blog.css";
import "../Layout/Layout.css";
export default function BlogPreviewCol() {
  return (
    <div id="Blog-preview-col" className="col">
      <div className="text-center">
        <div>
          <PreviewPost
            title="Ristabilire il legame tra uomo, animali e natura: l'importanza di ritrovare l'armonia perduta"
            date="Giugno 05, 2024"
            author="Mario Verdi"
            cover={bambinaAnimali}
            alt="children and animals"
            previewContent="
         Le relazioni tra persone, animali e natura sono state da sempre parte integrante della vita dell'uomo. Tuttavia, negli ultimi anni, sembra che questa connessione si stia deteriorando sempre di più. Una volta, le persone vivevano in armonia con gli animali e la natura, rispettando il loro ambiente e costruendo legami profondi con le creature che li circondavano. I contadini lavoravano la terra a stretto contatto con gli animali da fattoria, i cacciatori rispettavano le prede e ne utilizzavano ogni parte per il proprio sostentamento, e le tribù indigene vivevano in simbiosi con la natura, prendendo solo ciò di cui avevano bisogno."
         linkPost= "/Post4"

          />
        </div>

      </div>
      <div className="text-center">
        <div>
          <PreviewPost
            title="L'importanza della natura per i bambini"
            date="February 1, 2024"
            author="Jane Smith"
            cover={Laboratori}
            alt="foto_bambini_in_ambiente_naturale"
            previewContent="
            La natura è un ambiente prezioso e delicato che va rispettato e protetto. Gli spazi verdi offrono l'opportunità di insegnare ai bambini l'importanza del rispetto per l'ambiente e della conservazione della natura. I bambini possono imparare a raccogliere la spazzatura, a rispettare le piante e gli animali e a prendersi cura dell'ambiente circostante."
            linkPost= "/Post1"
          />
        </div>
      </div>

      <div className="text-center">
        <div>
          <PreviewPost
            title="La carenza di relazione con la natura e gli animali nei bambini"
            date="February 4, 2024"
            author="Jane Smith"
            alt=""
            cover={bambinaSmartphone}
            previewContent="Negli ultimi decenni, sempre più bambini trascorrono il loro tempo libero al chiuso, davanti alla televisione o agli smartphon. Questo stile di vita sedentario e isolato dalla natura può avere conseguenze negative sulla salute e sul benessere dei bambini. In questo articolo, esploreremo la carenza di relazione con la natura e gli animali nei bambini e i rischi che possono essere associati a questa mancanza di contatto con il mondo naturale."
            linkPost= "/Post2"

          />
        </div>
      </div>

      <div className="text-center">
        <div>
          <PreviewPost
            title="Il nostro evento ha riscosso un gran successo, la raccolta fondi prosegue"
            date="January 10, 2024"
            author="John Doe"
            cover={bambini}
            alt="bambini_in_ambiente_naturale"
            link="#simple-list-item-3"
            previewContent="
          L'Associazione Natura in  movimento ha organizzato un evento di laboratori didattici che si è tenuto presso il parco zoologico della città. L'evento ha visto la partecipazione di numerosi bambini e famiglie, che hanno avuto l'opportunità di imparare e divertirsi insieme."
          linkPost= "/Post3"

          />
        </div>
      </div>

      <div className="text-center">
        <div>
          <PreviewPost
            title="Inquinamento: l'urgenza di agire per il futuro del nostro pianeta"
            date="January 10, 2024"
            author="John Doe"
            cover={Inquinamento}
            alt="foto_ambiente_inquinato"
            link="#simple-list-item-5"
            previewContent="L'inquinamento ambientale rappresenta una delle sfide più pressanti che l'umanità deve affrontare in questo secolo. Le nostre azioni quotidiane stanno avendo un impatto devastante sul nostro pianeta, compromettendo non solo il nostro ambiente, ma anche il futuro delle prossime generazioni."
            linkPost= "/Post5"

          />
        </div>
      </div>
    </div>
  );
}
