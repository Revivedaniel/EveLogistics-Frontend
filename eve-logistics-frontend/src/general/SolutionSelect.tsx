import { Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import css from './SolutionSelect.module.css';

const buttons = [
    <Button key="one"><Link to={`warehouse`} className={css.link}>Warehouse</Link></Button>,
    <Button key="two"><Link to={`market`} className={css.link}>Market</Link></Button>,
    <Button key="three"><Link to={`industry`} className={css.link}>Industry</Link></Button>,
    <Button key="four"><Link to={`hauling`} className={css.link}>Hauling</Link></Button>,
  ];

export default function SolutionSelect() {
  return (
    <>
      <Typography variant="h2" className={css.h2}>
        Solution Select
      </Typography>
      <Box className={css.solutions}>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
    </>
  );
}
