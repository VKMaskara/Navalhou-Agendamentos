import "dotenv/config";
import cors from "cors";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});