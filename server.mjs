import express from 'express';
import { search } from './search.mjs';

const app = express();
app.use(express.json());
app.post("/scrape", async (req, res)=>{
    try {
        const result = await search(req.body.url, req.body.page, req.body.size);
        res.json({result});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
})