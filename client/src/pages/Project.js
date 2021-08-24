import { useLocation } from "react-router-dom";

const Project = ({projectId, projectName}) => {

  const { state } = useLocation();

  return (
    <div>
      {state && state.name ? (
        <>
          <h1>Project: {state["project_id"]}</h1>
          <h2>Name: {state.name}</h2>
        </>
      ) : (
        <h1>Could not get state from path</h1>
      )}
    </div>
  )
}

export default Project;