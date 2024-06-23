import "bootstrap/dist/css/bootstrap.min.css";
import CardSlider from "./CardSlider";
import Navigationbar from "./Navigationbar";
export default function Header() {
  return (
    <header>
      <Navigationbar/>
      <CardSlider/>
    </header>
  );
}
