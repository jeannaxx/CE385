import 'dotenv/config' ;
import express, {Request,Response} from 'express';
import {GoogleGenAI} from '@google/genai';

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
    apiKey :process.env['GEMINI_API_KEY'],
});

//Post /chat -ถามai เเบบrequsest ทั่วไป
// app.post('/chat', async (req :Request,res : Response) => {
//     const {message} = req.body as {message? : string};

//     if(!message || message.trim() === ''){
//         res.status(400).json({error:'message is required'});
//         return;
//     }

//     const response =await ai.models.generateContent({
//         model:'gemini-2.5-flash-lite',
//         contents:[{role:'user',parts:[{text:message}]}],
//     });

//     res.json({replay : response.text});
// });
//POST /chat/stream -ถาม AI แบบstreming (sever Events)
app.post('/chat/strem' ,async (req : Request,res :Response)=> {
    const {message }

})
app.listen(3000,() => {
    console.log('Sever running on http://localhost:3000');
});