import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={`/`} className={css.jumbotron}>Eve Logistics</Link>
          <Link to={`warehouse`} className={css.link}>Warehouse</Link>
          <Link to={`market`} className={css.link}>Market</Link>
          <Link to={`industry`} className={css.link}>Industry</Link>
          <Link to={`hauling`} className={css.link}>Hauling</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}