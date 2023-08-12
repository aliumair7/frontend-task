import { Button, Input, message, Typography } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import NetworkCall from "../network/networkCall";
const { Title } = Typography;
const CreateTask = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleAddTask = async () => {
    if (!name) return inputRef.current.focus();
    try {
      await NetworkCall.fetch({
        method: "POST",
        url: "/create-task",
        body: { name },
        headers: {},
        responseType: "json",
      });

      console.log("new .........");

      message.success("Task added successfully");
      setName("");
      navigate("/list-tasks");
    } catch (error) {
      console.log("erroro....", error);
      message.error("Something went wrong");
    }
  };
  console.log("nameee", name);
  return (
    <div className="w-100">
      <Title className="title-class" level={2}>
        Create Task
      </Title>
      <div className="create-task">
        <Input
          className="input-class"
          size="small"
          placeholder="task name"
          value={name}
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;
