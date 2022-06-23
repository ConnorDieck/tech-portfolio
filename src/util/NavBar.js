import React from "react";
import { Link } from "react-router-dom";
import { AppBar, useMediaQuery, useTheme, Toolbar, Typography } from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import styled from "@emotion/styled";

const NavLinks = styled('div')(({theme}) => ({
    marginLeft: theme.spacing(20),
    display: "flex"
}))

const StyledLink = styled(Link)(({theme}) => ({
    textDecoration : "none",
    color          : "white",
    fontSize       : "20px",
    marginLeft     : theme.spacing(20),
    "&:hover"      : {
        color        : "yellow"
    }
}))

const NavBar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                        Connor Dieck
                    </Typography>
                    {isMobile ? (
                        <DrawerComponent />
                    ) : (
                        <NavLinks >
                            <StyledLink to="/">
                                Home
                            </StyledLink>
                            <StyledLink to="/portfolio">
                                Portfolio
                            </StyledLink>
                            <StyledLink to="/contact">
                                Contact
                            </StyledLink>
                        </ NavLinks>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
};

export default NavBar;
