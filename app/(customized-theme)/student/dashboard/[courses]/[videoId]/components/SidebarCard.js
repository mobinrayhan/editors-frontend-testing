"use client";
import { Card } from "react-bootstrap";
import SimpleBar from "simplebar-react";
// import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import GKAccordionDefaultDashboard from "widgets/accordions/GKAccordionDefaultDashboard";

const SidebarCard = async ({ sections, slug, params }) => {
  const videoIdParams = params["videoId"];
  const videoId = videoIdParams?.split("-").slice(-1)[0];

  return (
    <SimpleBar style={{ maxHeight: "93vh" }}>
      <Card>
        <Card.Header>
          <h4 className="mb-0">Table of Content</h4>
        </Card.Header>

        <GKAccordionDefaultDashboard
          slug={slug}
          videoId={videoId}
          accordionItems={sections}
          sections={sections}
        />
      </Card>
    </SimpleBar>
  );
};

export default SidebarCard;
