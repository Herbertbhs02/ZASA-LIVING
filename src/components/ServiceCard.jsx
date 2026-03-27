import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({title,text}) => {
  return (
    <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
      
      <div className="p-4">
      
        <h3 className="font-bold text-lg mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;

