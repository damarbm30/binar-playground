import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Pascal = () => {
  const [rowCount, setRowCount] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const pascalTriangle = (numRows) => {
    let arr = [];

    for (let i = 1; i <= numRows - 1; i++) {
      arr[i] = [];
      arr[0] = [1];
      arr[i][0] = 1;

      for (let j = 1; j < i; j++) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }

      arr[i][i] = 1;
    }

    return arr;
  };

  console.log(isSubmit);

  return (
    <section>
      <Typography variant="h1" gutterBottom>
        Pascal's Triangle
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={4}>
            <Input placeholder="Input number of rows" value={rowCount} onChange={(e) => setRowCount(e.target.value)} />
            <Button variant="contained" type="submit" onClick={() => setIsSubmit((prevState) => !prevState)}>
              Show Triangle
            </Button>
          </Stack>
        </Box>
      </form>
      <Box sx={{ marginY: 2 }}>{isSubmit ? pascalTriangle(rowCount) : ""}</Box>
    </section>
  );
};
export default Pascal;
