import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';


const Navigation = () => {
	return (
		<div>
			<AppBar position='static'>
				<h1>Dante's Test</h1>
			</AppBar>
			<Outlet />
		</div>
	)
}

export default Navigation;