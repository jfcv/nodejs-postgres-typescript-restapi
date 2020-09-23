import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

import indexRoutes from './routes/index'

app.use(indexRoutes);

app.listen(port, ()=>{
    console.log('Server on port !', port);
    
})