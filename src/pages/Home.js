import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";

// UI
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//custom hook
import useAuthValidator from "../hooks/useAuthValidator";

const Home = () => {
  const [user] = useAuthValidator();
  const [githubUrl, setGithubUrl] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/weather/${city}`);
  };

  useEffect(() => {
    // console.log(user);
    if (user?.nickname) {
      setGithubUrl(`https://github.com/${user.nickname}`);
    }
  }, [user]);

  // useEffect(() => {
  //   console.log("city", city);
  // }, [city]);

  return (
    <>
      <Box
        sx={{
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <p>{user?.name || "John Smith"}</p>
        <div>
          <Link href={githubUrl}>{githubUrl}</Link>
        </div>
        <div>
          <TextField
            // label="With normal TextField"
            // id="filled-start-adornment"
            // sx={{ m: 1, width: "25ch" }}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
        </div>

        <div>
          <Button onClick={() => handleSearch()}>Display Weather</Button>
        </div>
      </Box>
    </>
  );
};

export default Home;
