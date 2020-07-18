import React, { FunctionComponent } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title }) => {
  return <h3 className="mb-3">{title}</h3>;
};

export default SectionTitle;
