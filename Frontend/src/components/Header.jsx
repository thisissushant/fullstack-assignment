import {} from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#4C5FD5" }}
        >
          Abstract
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#333" }}
        >
          Help Center
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#4C5FD5",
            "&:hover": {
              bgcolor: "#3A4AA0",
            },
          }}
        >
          Submit Request
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
