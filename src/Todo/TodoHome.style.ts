import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITodoHomeStyle {
  todoContainer: IStyle;
  headerStyle: IStyle;
  pivotRoot: IStyle;
  pivotContainer: IStyle;
}

const TodoHomeStyle: IProcessedStyleSet<ITodoHomeStyle> = mergeStyleSets({
  todoContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  headerStyle: {
    height: 80,
    backgroundColor: "cadetblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  pivotRoot: {
    display: "flex",
    justifyContent: "center",
  },
  pivotContainer: {
    margin: 20,
  },
});

export default TodoHomeStyle;
