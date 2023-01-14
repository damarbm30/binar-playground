import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";

const TwoSum = () => {
  const [input, setInput] = useState({ elements: [], targetVal: null });
  const [isSubmit, setIsSubmit] = useState(false);

  const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (parseInt(arr[i]) + parseInt(arr[j]) === parseInt(target)) {
          return [i, j];
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setIsSubmit(false);
  };

  const handleSubmit = () => {
    let arr = input.elements;
    if (typeof input.elements === "string") {
      arr = input.elements ? input.elements.split(",").map(Number) : input.elements;
    }
    setIsSubmit(true);
    setInput({ ...input, elements: arr });
  };

  return (
    <section>
      <Typography variant="h1" gutterBottom>
        Two Sum
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={4}>
            <Input placeholder="Elements" value={input.elements} name="elements" onChange={handleInputChange} />
            <Input placeholder="Target" value={input.targetVal} name="targetVal" onChange={handleInputChange} />
            <Button variant="contained" type="submit" onClick={() => handleSubmit()}>
              Show Index
            </Button>
          </Stack>
        </Box>
      </form>
      <Box sx={{ marginY: 2 }}>{isSubmit ? twoSum(input.elements, input.targetVal) : ""}</Box>
    </section>
  );
};
export default TwoSum;
