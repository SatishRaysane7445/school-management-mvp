import "./QuickActionCard.css";

import type { ReactNode } from "react";

type QuickActionCardProps = {
  icon: string;
  title: string;
  description: string;
};

const QuickActionCard = ({
  icon,
  title,
  description,
}: QuickActionCardProps) => {
  return (
    <div className="quick-action-card">

      <div className="quick-action-icon">
       <img
          src={icon}
          alt={title}
        />
      </div>

      <div className="quick-action-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </div>
  );
};

export default QuickActionCard;