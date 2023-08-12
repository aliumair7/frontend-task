import { Card, Empty, message, Typography } from "antd";
import { useEffect, useState } from "react";
import NetworkCall from "../network/networkCall";

const { Title } = Typography;
const TaskList = () => {
  const [tasksData, setTaskData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { tasks } = await NetworkCall.fetch({
          method: "GET",
          url: "/list-tasks",
          body: {},
          headers: {},
          responseType: "json",
        });
        setTaskData(tasks);
      } catch (error) {
        message.error("Something went wrong");
      }
    })();
  }, []);
  return (
    <div className="w-100">
      <Title className="title-class" level={2}>
        Task List
      </Title>{" "}
      {tasksData?.length ? (
        tasksData.map((task) => {
          return (
            <div key={task.id} className="card-with-checkbox">
              {" "}
              <Card title={task.name}>Task Description</Card>
            </div>
          );
        })
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default TaskList;
