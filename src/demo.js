import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	center: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		width: "700px",
		height: "466px"
	},
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	divImage: {
		height: "50vh"
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="default">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						PROTEKTAXI WORLD
					</Typography>
				</Toolbar>
			</AppBar>
			<img scr="china.jpg" alt="aaaaaaaaaa"></img>
		</div>
	);
}
