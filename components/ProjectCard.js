import styled from "styled-components";

const StyledCard = styled.div`
  height: 50%;
  width: 33%;
  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    border: solid 3px #4b4b4b;
    border-radius: 5px;
    padding: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }

  img {
    width: 150px;
    height: 150px;
    border: solid 3px #4b4b4b;
    border-radius: 5px;
  }
`;

function ProjectCard({ title, image, url }) {
  return (
    <StyledCard>
      <div>
        <a href={url}>
          <img src={image} />
        </a>
        <h2>{title}</h2>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
