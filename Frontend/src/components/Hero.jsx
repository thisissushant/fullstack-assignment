/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Box sx={{ bgcolor: "#4C5FD5", color: "white", py: 12 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          How can we help?
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for help..."
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default Hero;
