import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/Donation.css";

const PaymentsTable = ({ payments }) => {
  const sortedPayments = payments.sort((a, b) => b.amount - a.amount);

  const totalDonations = payments.reduce((acc, payment) => acc + payment.amount, 0);

  return (
    <>
      <div className="container-fluid text-center pb-1">
        <h2>{"Donazioni: "}{"€"}{totalDonations}</h2>
      </div>
      <div className="table-responsive text-center">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              {sortedPayments.map((payment, index) => (
                <th key={index}>{payment.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {sortedPayments.map((payment, index) => (
                <td key={index}>{"€"}{payment.amount}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentsTable;
