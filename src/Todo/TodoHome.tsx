import React, { createContext, useState } from "react";
import TodoHomeStyle from "./TodoHome.style";
import TodoString from "./String.json";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { ITask, PivotKeyEnum } from "./Types";
import TaskList from "./List/TaskList";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TodoProvider from "./TodoProvider";
import TaskForm from "./TaskForm/TaskForm";
import CompletedTaskList from "./List/CompletedTaskList";
initializeIcons();

const TodoHome = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeyEnum.Tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const editTask = (id: string) => {
    setEditTaskId(id);
    setSelectedKey(PivotKeyEnum.TaskForm);
  };
  return (
    <Stack className={TodoHomeStyle.todoContainer}>
      <TodoProvider>
        <header className={TodoHomeStyle.headerStyle}>
          <h2>{TodoString.header}</h2>
        </header>
        <Stack className={TodoHomeStyle.pivotContainer}>
          <Pivot
            selectedKey={String(selectedKey)}
            styles={{ root: TodoHomeStyle.pivotRoot }}
            onLinkClick={(item?: PivotItem) => {
              if (item?.props.itemKey !== PivotKeyEnum.TaskForm) {
                setEditTaskId(null);
              }
              setSelectedKey(item?.props.itemKey || PivotKeyEnum.Tasks);
            }}
          >
            <PivotItem
              headerText={TodoString.pivots.taskTab}
              itemKey={PivotKeyEnum.Tasks}
            >
              <TaskList setEditTask={editTask} />
            </PivotItem>
            <PivotItem
              headerText={TodoString.pivots.taskFormTab}
              itemKey={PivotKeyEnum.TaskForm}
            >
              <TaskForm editTaskId={editTaskId} />
            </PivotItem>
            <PivotItem
              headerText={TodoString.pivots.completedTaskTab}
              itemKey={PivotKeyEnum.Completed}
            >
              <CompletedTaskList />
            </PivotItem>
          </Pivot>
        </Stack>
      </TodoProvider>
    </Stack>
  );
};

export default TodoHome;
