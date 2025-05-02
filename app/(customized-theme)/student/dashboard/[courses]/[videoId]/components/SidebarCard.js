"use client";
import React from "react";
import { Card } from "react-bootstrap";
import SimpleBar from "simplebar-react";
// import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import { CourseIndex } from "data/courses/CourseIndexData";
import GKAccordionDefaultDashboard from "widgets/accordions/GKAccordionDefaultDashboard";

const SidebarCard = ({ sections, slug }) => {
  return (
    <SimpleBar style={{ maxHeight: "93vh" }}>
      <Card>
        <Card.Header>
          <h4 className="mb-0">Table of Content</h4>
        </Card.Header>

        <GKAccordionDefaultDashboard
          slug={slug}
          accordionItems={sections}
          sections={sections}
        />
      </Card>
    </SimpleBar>
  );
};

export default SidebarCard;
