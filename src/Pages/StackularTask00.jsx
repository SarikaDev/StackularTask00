import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button,  Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
const   StackularTask00=()=> {
  const [category, setCategory] = React.useState("");
  const [details, setDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  console.log("category", category);
  const dataList = [
    { label: "All", value: "all" },
    { label: "Business", value: "business" },
    { label: "Sports", value: "sports" },
    { label: "World", value: "world" },
    { label: "Politics", value: "politics" },
    { label: "Technology", value: "technology" },
    { label: "Startup", value: "startup" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Miscellaneous", value: "miscellaneous" },
    { label: "Hatke", value: "hatke" },
    { label: "Science", value: "science" },
    { label: "Automobile", value: "automobile" }
  ];
  const handleChange = React.useCallback((event) => {
    setCategory(event.target.value );
  }, []);


  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://inshorts.deta.dev/news?category=${category}`)
      .then((res) => {
        setLoading(true);
        setDetails(res?.data?.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

  console.log("details", details);

  return (
    <Container
      fixed
      sx={{
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: 2,
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <FormControl fullWidth>
            <InputLabel>Select one</InputLabel>
            <Select value={category} label="dataList" onChange={handleChange}>
              {dataList?.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="felx" sx={{ gap: 2, flexDirection: "column" }}>
            {details.map((details) => (
              <Card
                sx={{
                  minWidth: 275,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                      py: 2,
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 700 }}
                      variant="h4"
                      color="text.secondary"
                    >
                      {details?.title?.substring(1, 24)}...
                    </Typography>
                    <CardMedia
                      component="img"
                      alt="alt..."
                      height={500}
                      image={details?.imageUrl}
                    />
                    <Typography
                      sx={{ fontWeight: 600, fontSize: 20 }}
                      color="text.secondary"
                    >
                      {details?.content}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Stack>
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 17 }}
                        color="text.secondary"
                      >
                        Date : {details?.date}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 17 }}
                        color="text.secondary"
                      >
                        Time: {details?.time}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: 17 }}
                      color="text.secondary"
                    >
                      Author: {details?.author}.
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    href={details?.readMoreUrl}
                    endIcon={<SendIcon />}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}


export default StackularTask00