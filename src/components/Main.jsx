
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {

const navigate = useNavigate();
  return (
    <Box
      component={"div"}
      sx={{
        bgcolor: "#efefef",
        display: "flex",
        flexDirection: "column",
        pl: 2,
        alignItems: "center",
      }}
      height={"100dvh"}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={()=>navigate("/task00")}>Task 00</Button>
      </Box>
    </Box>
  );
};

export default Main;
