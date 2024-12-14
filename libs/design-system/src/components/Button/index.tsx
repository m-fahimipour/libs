import { Button } from "@mui/material";
import { useState } from "react";

function CustomButton() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount((c) => c + 1)}>button {count}</Button>;
}

export default CustomButton;
