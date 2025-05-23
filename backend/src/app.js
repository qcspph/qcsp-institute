import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on Port ${PORT}`));

export {app};




