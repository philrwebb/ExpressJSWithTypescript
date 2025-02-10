import express from 'express';
import cors from 'cors';

import { setupRoutes } from './routes/setuproutes';

const app = express();
app.use(cors());
app.use(express.json());

setupRoutes(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
