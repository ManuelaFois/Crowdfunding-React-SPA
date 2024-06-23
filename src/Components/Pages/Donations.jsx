import { useState } from "react";
import PaymentForm from "../Layout/PaymentForm";
import PaymentsTable from "../Layout/PaymentsTable";
import PreviewBlogBar from "../Layout/PreviewBlogBar";
import MyProgressBar from "../Layout/ProgressBar";
import { initialPayments } from "../Layout/DonationsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/Donation.css";
import "../Layout/Layout.css";

export default function Donations() {
  const [payments, setPayments] = useState(initialPayments);

  const totalDonations = payments.reduce((acc, curr) => acc + curr.amount, 0);

  const addPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  return (
    <main>
      <div id="progressbar-container" className="container-fluid justify-content-center pb-3">
        <div className="container col-4 text-center py-3">
          <MyProgressBar totalDonations={totalDonations} />
        </div>
        <div className="table-responsive">
        <PaymentsTable payments={payments} />
      </div>
      </div>
      <h3>{"DONA ORA PER CONTRIBUIRE ALLA REALIZZAZIONE DEL PROGETTO"}</h3>
      <div id="donation-container" className="container-fluid justify-content-center">
        <div className="col-12 col-sm-6 col-lg-6 col-md-6 col-xl-5 col-xxl-5 py-4">
          <PaymentForm onAddPayment={addPayment} />
        </div>
      </div>
     
      <PreviewBlogBar />
    </main>
  );
}
