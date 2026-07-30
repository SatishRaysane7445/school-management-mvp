import "./WelcomeCard.css";

import { getCurrentUser } from "../../../../constants/authStorage";

const WelcomeSection = () => {
  const user = getCurrentUser();

  return (
    <section className="welcome-section">

      <h1>
        Welcome to your dashboard,{" "}
        {user?.schoolName}
      </h1>

      <p>
        {user?.email}
      </p>

    </section>
  );
};

export default WelcomeSection;