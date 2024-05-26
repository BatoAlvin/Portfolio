import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,url,url2,paragraph }) => {
  const myStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>
          {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                {title}
              </a>
            ) : (
              title
            )}
          </h4>
          <span>{description}</span><br></br>

          <p style={myStyle}>
          {url2 ? (
              <a href={url2} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                {paragraph}
              </a>
            ) : (
              paragraph
            )}
            
            
            </p>
        </div>
      </div>
    </Col>
  )
}
