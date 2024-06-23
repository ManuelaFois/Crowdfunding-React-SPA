import "bootstrap/dist/css/bootstrap.min.css";

import DescriptionProgect from "../Layout/DescriptionProgect";
import PreviewBlogBar from "../Layout/PreviewBlogBar";
import ObjectBar from "../Layout/ObjectBar";
import "../Layout/Layout.css";
import MyProgressBar from "../Layout/ProgressBar";
import { initialPayments } from "../Layout/DonationsData";

export default function Home() {
  const totalDonations = initialPayments.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <>      


      <main>
      <div id="progressbar-container" className="container-fluid justify-content-center text-center pb-1">
<div className="container col-4 text-center py-3">
  <MyProgressBar totalDonations={totalDonations} />
</div>
<h2>{"Donazioni: "}{"€"}{totalDonations}</h2>
</div>
     
        <ObjectBar />
        <PreviewBlogBar />
        <DescriptionProgect />
      </main>
    </>
  );
}
