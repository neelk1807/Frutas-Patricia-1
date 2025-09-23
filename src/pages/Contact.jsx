import ContactStrip from "../components/Contact/contactmodel.jsx";
import AuctionContactSection from "../components/Contact/Contactform.jsx";
import JoinTeam from "../components/Contact/Joinform.jsx";


export default function Home() {
  return (
    <div className="max-w-auto mx-auto">
      <div className="hero">
        <ContactStrip />
        <AuctionContactSection />
        <JoinTeam />
      </div>
    </div>
  );
}
