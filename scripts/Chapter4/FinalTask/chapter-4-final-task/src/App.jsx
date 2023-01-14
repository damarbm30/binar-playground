import { Stack } from "@mui/material";
import Pascal from "./components/Pascal";
import TwoSum from "./components/TwoSum";

function App() {
  return (
    <Stack spacing={8} width="50%" display="flex" justifyContent="center" alignItems="center" sx={{ mx: "auto" }}>
      <TwoSum />
      <Pascal />
    </Stack>
  );
}

export default App;
