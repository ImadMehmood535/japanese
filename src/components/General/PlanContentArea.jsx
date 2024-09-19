import React from "react";

const PlanContentArea = ({ content }) => {
  return (
    <div className="PlanContentArea py-10 md:py-16">
      <div
        className="max-w-screen-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PlanContentArea;
