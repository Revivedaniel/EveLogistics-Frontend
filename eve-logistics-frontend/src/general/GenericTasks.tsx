import {Button, ButtonGroup, Typography} from '@mui/material';
import {Box} from '@mui/system';
import {Link} from 'react-router-dom';
import css from './GenericTasks.module.css';

// TODO: Continue to make the special buttons behavior more dynamic

export default function GenericTasks(props: genericTasksProps) {
	const handleSpecialButtonClick = (e: any) => {
		if (props.specialButtonSelected) {
			props.specialButtonSelected(true);
		}
	};

	return (
		<>
			<Typography variant='h2' className={css.h2} style={{marginTop: '25px', marginBottom: '10px'}}>
				{props.heading}
			</Typography>
			{props.buttons ? <Box className={css.solutions}>
				<ButtonGroup
					orientation='vertical'
					aria-label='vertical contained button group'
					variant='contained'
				>
					{props.buttons.map((button, i) => <Button key={i}><Link to={`${button.to}`} className={css.link}>{button.title}</Link></Button>)}
					{!props.specialButtonTitle ? null
						: <Button onClick={handleSpecialButtonClick} >{props.specialButtonTitle}</Button>}
				</ButtonGroup>
			</Box> : null}
		</>
	);
}

type button = {
	to: string;
	title: string;
};

type genericTasksProps = {
	heading: string;
	buttons?: button[];
	specialButtonTitle?: string;
	specialButtonSelected?: Function;
};
