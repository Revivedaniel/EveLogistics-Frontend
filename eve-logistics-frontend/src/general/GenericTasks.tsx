import { Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import css from './GenericTasks.module.css';

// TODO: Continue to make the special buttons behavior more dynamic

export default function GenericTasks(props: genericTasksProps) {
  return (
    <>
      <Typography variant="h2" className={css.h2} style={{marginTop: "25px", marginBottom: "10px"}}>
        {props.heading}
      </Typography>
      {props.buttons ? <Box className={css.solutions}>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {props.buttons.map((button, i) => <Button key={i}><Link to={`${button.to}`} className={css.link}>{button.title}</Link></Button>)}
        {!props.specialButtons ? null : 
        props.specialButtons.map((button, i) => <Button key={i}>{button.title}</Button>)}
      </ButtonGroup>
    </Box>: null}
    </>
  );
}

interface button {
  to: string;
  title: string;
}

interface genericTasksProps {
  heading: string;
  buttons?: button[];
  specialButtons?: button[];
}