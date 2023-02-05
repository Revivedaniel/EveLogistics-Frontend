import { Button, Typography } from "@mui/material";
import css from "./GenericTasks.module.css";

export default function GenericSelect(props: RegionSelectProps) {

  const handleExtraButton = (e: any) => {
    if (props.setExtraButtonClicked) {
      props.setExtraButtonClicked(true);
    }
  };

  const handleSelection = (e: any) => {
    if (props.selections) {
      props.setSelection(props.selections[e.target.dataset.selection]);
    }
  };

  const handleRegionSelect = (e: any) => {
    if (props.setBackButton) {
      props.setBackButton(undefined);
    } 
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
        <div className={css.additionalButtons}>
          {props.extraButton ? (
            <Button
              variant="contained"
              onClick={handleExtraButton}
              style={{ width: "30%" }}
            >
              {props.extraButton.title}
            </Button>
          ) : null}
          {props.backButtonTitle ? (
            <Button
              variant="contained"
              onClick={handleRegionSelect}
              style={{ width: "30%" }}
            >
              {props.backButtonTitle}
            </Button>
          ) : null}
        </div>

        {props.selections ? (
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
        ) : (
          <h2>Loading...</h2>
        )}
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
  selections?: GenericSelection[];
  extraButton?: ExtraButton;
  setSelection: Function;
  setExtraButtonClicked?: Function;
  backButtonTitle?: string;
  setBackButton?: Function;
}