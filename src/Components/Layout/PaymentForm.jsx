import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Layout.css";

export default function PaymentForm({ onAddPayment }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [amount, setAmount] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showCardError, setShowCardError] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const isEmailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isNameValid = (name) => /^[a-zA-Z]+$/.test(name);
  const isSurnameValid = (surname) => /^[a-zA-Z]+$/.test(surname);
  const isCardNumberValid = (cardNumber) => /^\d+$/.test(cardNumber);
  const isAmountValid = (amount) => /^\d+$/.test(amount);
  const isExpiryDateValid = (expiryDate) => /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/.test(expiryDate);
  const isCvvValid = (cvv) => /^[0-9]{3}$/.test(cvv);

  const emailChangeHandler = (event) => setEmail(event.target.value);
  const nameChangeHandler = (event) => setName(event.target.value);
  const surnameChangeHandler = (event) => setSurname(event.target.value);
  const cardNumberChangeHandler = (event) => setCardNumber(event.target.value);
  const cvvChangeHandler = (event) => setCvv(event.target.value);
  const expiryDateChangeHandler = (event) => setExpiryDate(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNameValid(name) && isSurnameValid(surname) && isEmailValid(email) &&
        isCardNumberValid(cardNumber) && isAmountValid(amount) && 
        isExpiryDateValid(expiryDate) && isCvvValid(cvv)) {
      
      onAddPayment({
        name: isAnonymous ? "Anonimo" : name,
        surname: isAnonymous ? "" : surname,
        amount: parseFloat(amount),
        isAnonymous,
      });

      setName("");
      setSurname("");
      setEmail("");
      setCardNumber("");
      setCvv("");
      setExpiryDate("");
      setAmount("");
      setIsAnonymous(false);
      setShowEmailError(false);
      setShowNameError(false);
      setShowCardError(false);
    } else {
      setShowEmailError(!isEmailValid(email));
      setShowNameError(!isNameValid(name) || !isSurnameValid(surname));
      setShowCardError(!isCardNumberValid(cardNumber) || !isAmountValid(amount) ||
                       !isExpiryDateValid(expiryDate) || !isCvvValid(cvv));
    }
  };

  return (
    <form id="form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="exampleInputName" className="form-label">Nome</label>
            <input onChange={nameChangeHandler} value={name} type="text" className="form-control" id="exampleInputNome" />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputSurname" className="form-label">Cognome</label>
            <input value={surname} onChange={surnameChangeHandler} type="text" className="form-control" id="exampleInputSurname" />
          </div>
          {showNameError && <p className="col-md-12 error text-danger">{"* Inserisci Nome e Cognome"}</p>}
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail" className="form-label">Indirizzo e-mail</label>
            <input onChange={emailChangeHandler} value={email} type="text" className="form-control" id="exampleInputEmail" />
            {showEmailError && <p className="col-md-12 error text-danger">{"* Verifica che l'indirizzo e-mail corretto"}</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputCardNumber" className="form-label">Numero della carta</label>
            <input value={cardNumber} onChange={cardNumberChangeHandler} type="text" className="form-control" id="exampleInputCardNumber" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="exampleInputCvv" className="form-label">CVV</label>
            <input onChange={cvvChangeHandler} value={cvv} type="text" className="form-control" id="exampleInputCvv" />
          </div>
          <div className="col-md-4">
            <label htmlFor="exampleInputDate" className="form-label">Scadenza</label>
            <input value={expiryDate} onChange={expiryDateChangeHandler} type="date" className="form-control" id="exampleInputDate" />
          </div>
          <div className="col-md-4">
            <label htmlFor="exampleInputAmount" className="form-label">Cifra</label>
            <input onChange={amountChangeHandler} value={amount} type="number" min="0" className="form-control" id="exampleInputAmount" />
          </div>
          {showCardError && <p className="col-md-12 error text-danger">{"* I dati relativi alla carta di credito sono errati o incompleti. Verifica che il CVV sia composto da 3 cifre"}</p>}
          <div className="col-md-6">
            <label htmlFor="exampleInputAnonymous" className="form-label">Donazione Anonima</label>
            <input type="checkbox" id="exampleInputAnonymous" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} />
          </div>
        </div>
      </div>
      <div className="form-button-container">
        <button type="submit" className="btn btn-dark">{"Dona ora"}</button>
      </div>
    </form>
  );
}
