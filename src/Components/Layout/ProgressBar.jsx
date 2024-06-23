import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyProgressBar({ totalDonations }) {
  const projectQuota = 50000;
  const progress = totalDonations === 0 ? 0 : Math.round((totalDonations / projectQuota) * 100);

  return (
    <div>
      <ProgressBar now={progress} animated striped label={`${progress}%`} />
    </div>
  );
}
