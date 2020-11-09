import Axios from "axios";

export const getProjectList = async () => {
  return await Axios.get("/api/projects").then(
    (res) => {
      return res.data;
    }
  );
};

/**
 * storeNewProject()
 *
 * @param {object} data
 */
export const storeNewProject = async (data) => {
  data.user_id = 1;
  return await Axios.post(
    "/api/projects",
    data
  ).then((res) => {
    return res.data;
  });
};

export const updateProject = async (id, data) => {
  data.user_id = 1;
  return await Axios.put(
    `/api/projects/${id}`,
    data
  ).then((res) => {
    return res.data;
  });
};

export const deleteProject = async (id) => {
  console.log("id", id);
  return await Axios.delete(
    `/api/projects/${id}`
  ).then((res) => {
    return res.data;
  });
};
