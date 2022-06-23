import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(Link)(({theme}) => ({
    textDecoration : "none",
    color          : "black",
    fontSize       : "20px",
    marginLeft     : theme.spacing(20),
    "&:hover"      : {
        color        : "yellow"
    }
}))

const DrawerComponent = () => {
	const [ openDrawer, setOpenDrawer ] = useState(false);

	return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/">
                                Home
                            </StyledLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/portfolio">
                                Portfolio
                            </StyledLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/contact">
                                Contact
                            </StyledLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color: "white"}}>
                <MenuIcon />
            </IconButton>
        </>
    )
};

export default DrawerComponent;
