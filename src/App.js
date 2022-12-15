import ProfilePhoto from "./businesscard/ProfilePhoto";
import Title from "./businesscard/Title";
import SocialMedia from "./businesscard/SocialMedia";

function App() {
  return (
    <div className="business-card">
      <div className="bcard-content">
        <ProfilePhoto />
        <Title />
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
