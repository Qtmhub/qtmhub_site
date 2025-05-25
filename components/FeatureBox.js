import React from "react";

export default function FeatureBox({ icon, title, bgColor }) {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center text-center h-full min-h-[140px]`}>
  <div className="mb-3">{icon}</div>
  <h3 className="font-medium text-lg">{title}</h3>
</div>
  );
}
