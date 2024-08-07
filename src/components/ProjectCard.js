import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, languages, frameworks, isLeftCentered }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className={isLeftCentered ? "left-centered" : ""} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>{languages}</span>
          <span>{frameworks}</span>
        </div>
      </div>
    </Col>
  )
}