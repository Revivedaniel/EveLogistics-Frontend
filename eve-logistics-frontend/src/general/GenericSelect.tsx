import { Button, Typography } from "@mui/material";
import css from "./GenericTasks.module.css";

export default function GenericSelect(props: RegionSelectProps) {
  const handleSelection = (e: any) => {
    props.setSelection(props.selections[e.target.dataset.selection]);
  }
  return (
    <>
      <Typography
        variant="h2"
        className={css.h2}
        style={{ marginTop: "25px", marginBottom: "10px" }}
      >
        Select a {props.title}
      </Typography>

      <div className={css.selectionList}>
      {props.extraButton ? (
        <Button variant="contained" className={css.extraButton}>
          {props.extraButton.title}
        </Button>
      ) : null}

        <div>
          {props.selections.map((selection, i) => (
            <Button
              key={selection.id}
              onClick={handleSelection}
              data-selection={i}
              variant="contained"
            >
              {selection.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

interface GenericSelection {
  id: number;
  name: string;
}

interface ExtraButton {
  title: string;
}

interface RegionSelectProps {
  title: string;
  selections: GenericSelection[];
  extraButton?: ExtraButton;
  setSelection: Function;
}