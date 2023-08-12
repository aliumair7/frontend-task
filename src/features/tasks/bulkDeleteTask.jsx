import {
  Button,
  Checkbox,
  Result,
  Card,
  message,
  Popconfirm,
  Tooltip,
  Typography,
  Empty,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { useEffect, useState } from "react";
import NetworkCall from "../network/networkCall";

const { Title } = Typography;
const BulkDelete = () => {
  const [tasksData, setTaskData] = useState([]);
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);
  const [dataToggleFlag, setDataToggleFlag] = useState(false);

  const handleDeleteBulk = async () => {
    try {
      await NetworkCall.fetch({
        method: "DELETE",
        url: "/bulk-delete-task",
        body: { taskIds: selectedTaskIds },
        headers: {},
        responseType: "json",
      });

      message.success("Selectd tasks deleted successfully");
      setSelectedTaskIds([]);
      setDataToggleFlag(!dataToggleFlag);
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelectedTaskIds([...selectedTaskIds, id]);
    } else {
      setSelectedTaskIds(selectedTaskIds.filter((taskId) => taskId != id));
    }
  };
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
  }, [dataToggleFlag]);

  console.log("selectidsssssss", selectedTaskIds);
  return (
    <div className="w-100">
      <Title className="title-class" level={2}>
        Bulk Delete Tasks{" "}
      </Title>{" "}
      <Popconfirm
        title="Are you sure you want to delete?"
        okText="Yes"
        cancelText="No"
        onConfirm={handleDeleteBulk}
        icon={<DeleteOutlined />}
        disabled={!selectedTaskIds.length}
      >
        <Tooltip
          placement="topLeft"
          title={!selectedTaskIds.length ? "Please select tasks to delete" : ""}
        >
          <Button
            size="large"
            className="delete-button"
            danger
            disabled={!selectedTaskIds.length}
          >
            Delete
          </Button>
        </Tooltip>
      </Popconfirm>
      {tasksData?.length ? (
        tasksData.map(({ id, name }) => {
          return (
            <div key={id} className="card-with-checkbox">
              <Checkbox
                checked={selectedTaskIds.some((taskId) => taskId === id)}
                onChange={(e) => handleChange(e, id)}
              />
              <Card title={name}>Task Description</Card>
            </div>
          );
        })
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default BulkDelete;
