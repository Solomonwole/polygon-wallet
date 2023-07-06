import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import theme from "../../mui/theme";
import { BasicModal } from "../../screens/home/HomePage";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            background: theme.palette.textPrimary.main,
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src="https://wallet.polygon.technology/assets/img/polygon.svg"
                alt=""
              />
            </IconButton>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Connect to Wallet
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
