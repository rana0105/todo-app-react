import Axios from "axios";

export const getTaskList = () => {};

/**
 * storeNewTask()
 *
 * @param {object} data
 */
export const storeNewTask = async (data) => {
  data.project_id = parseInt(data.project_id);

  return await Axios.post("/api/tasks", data).then(
    (res) => {
      return res.data;
    }
  );
};

export const updateTask = async (id, data) => {
  return await Axios.put(
    `/api/tasks/${id}`,
    data
  ).then((res) => {
    return res.data;
  });
};

export const deleteTask = async (id) => {
  return await Axios.delete(
    `/api/tasks/${id}`
  ).then((res) => {
    return res.data;
  });
};
