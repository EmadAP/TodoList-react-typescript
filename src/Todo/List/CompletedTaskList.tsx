import {
  Checkbox,
  FontIcon,
  mergeStyles,
  MessageBar,
  Stack,
} from "@fluentui/react";
import React, { useContext } from "react";
import TaskDescription from "./TaskDescription";
import { TodoContext } from "../TodoProvider";
import { ActionTypeEnum, ITask } from "../Types";
import TaskListStyle from "./TaskList.style";
import TodoString from "../String.json";
const CompletedTaskList = () => {
  const { completedTasks, dispatch } = useContext(TodoContext);
  const onTaskDelete = (id: string) => {
    if (window.confirm(TodoString.deleteConfirm)) {
      dispatch({ type: ActionTypeEnum.DeleteCompletedTask, data: { id } });
    }
  };
  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack
          horizontal
          style={{ width: "85%" }}
          className={TaskListStyle.disabled}
        >
          <Checkbox disabled />
          <span>{task.title}</span>
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <TaskDescription task={task} />
          <FontIcon
            iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"}
            className={mergeStyles(
              TaskListStyle.iconStyle,
              TaskListStyle.disabled
            )}
          />

          <FontIcon
            iconName="Delete"
            className={TaskListStyle.iconStyle}
            onClick={() => onTaskDelete(task.id)}
          />
        </Stack>
      </Stack>
    );
  };
  return (
    <div>
      {completedTasks.length ? (
        completedTasks.map(onRenderCell)
      ) : (
        <MessageBar>No records to show</MessageBar>
      )}
    </div>
  );
};

export default CompletedTaskList;
