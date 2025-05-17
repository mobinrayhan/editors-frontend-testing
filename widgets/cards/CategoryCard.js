// import node module libraries
import Link from "next/link";
import { Card } from "react-bootstrap";

const CategoryCard = ({ category }) => {
  return (
    <Link href={category.link} className="card card-border-primary rounded-4">
      <Card.Body className="d-flex flex-column gap-4 text-center">
        <div>
          <div
            className={`icon-shape icon-xxl bg-light-${category.bgColor} rounded-circle`}
            dangerouslySetInnerHTML={{ __html: category.icon }}
          />
        </div>
        <div>
          <h3 className="mb-0">{category.name}</h3>
          <span>{category.totalMentors} Mentors</span>
        </div>
      </Card.Body>
    </Link>
  );
};

export default CategoryCard;
