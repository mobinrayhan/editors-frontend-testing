// import widget/custom components
import { HeroFormCenter } from "widgets";

export const Hero6 = () => {
  return (
    <HeroFormCenter
      badgeText='<span className="fw-bold">Beta-v2.0.0 </span> - Just shipped version'
      title="Request Access for Product"
      description="Geeks is a customizable, Bootstrap based UI Kits and Templates for Developers."
      promotionalText='Rated 5 Stars <span className="text-muted">by over</span> <span className="text-primary"> 100+ Users</span>'
    />
  );
};

export const Hero6Code = `
// import widget/custom components
import { HeroFormCenter } from 'widgets';

export const Hero6Example = () => {
    return <HeroFormCenter
        badgeText='<span className="fw-bold">Beta-v2.0.0 </span> - Just shipped version'
        title='Request Access for Product'
        description='Geeks is a customizable, Bootstrap based UI Kits and Templates for Developers.'
        promotionalText='Rated 5 Stars <span className="text-muted">by over</span> <span className="text-primary"> 100+ Users</span>'
    />
}`.trim();
