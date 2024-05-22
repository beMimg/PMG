import React from "react";

interface TwoSidesCardProps {
  title: string;
  image: string;
}

const TwoSidesCard = ({ title, image }: TwoSidesCardProps) => {
  return (
    <div key={title} className="two-sides-card">
      <div className="two-sides-card-inner">
        <div className="two-sides-card-front">
          <img
            src={image}
            alt={title}
            className=" min-w-[50px] max-w-[50px] transition-all hover:scale-110"
          />
        </div>
        <div className="two-sides-card-back">
          <p className="font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoSidesCard;
