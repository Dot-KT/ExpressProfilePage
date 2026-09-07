import express from 'express';
import {Student}  from "./Student.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))

const student = new Student("James Chad", "Dotkt", 12, "male", "Ogun", "Yola", "OAU", "English", "300Level", ["Flying kite", "gaming", "writing"], ["butchering", "gaming"], "Yam", "Gray", "Just be Chairman", "From the street", "click link to view profile photo=> localhost:3000/images/image.png", "x.com/profile/Dot__kt", "08063211050");

app.get('/api/home/profilePage', (req, res)=> {
    res.status(200).send("Welcome to Personal profile");
});

app.get('/api/profile', (req, res)=>{
    res.status(200).send(student);
    });
app.get('/api/skills', (req, res)=>{
    res.status(200).send(student.getSkills());
});
app.get('/api/hobbies', (req, res) =>{
    res.status(200).send(student.getHobbies());
});

app.listen(PORT, ()=> {console.log(`running on port ${PORT}`)});