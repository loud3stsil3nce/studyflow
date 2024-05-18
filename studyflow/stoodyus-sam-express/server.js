const express = require('express')
const collection=require("./mongo")
const cors = require("cors")
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())


app.get("/auth", cors(),(req,res) => {

})

app.post("/auth",async(req,res)=> {
  const{email,password}=req.body

  try{
    const check=await collection.findOne({email:email})
    if(check){
      res.json("exist")
    } else {
      res.json("doesnotexist")
    }
  } catch(e) {
    res.json("notexist")
}
})



app.post("/RegisterPage",async(req,res)=> {
  const{email,password}=req.body
  const datta={
    email:email,
    password:password
  }

  try{
    const check=await collection.findOne({email:email})
    if(check){
      res.json("exist")
    } else {
      res.json("doesnotexist")
      await collection.insertMany({data})
    }
  } catch(e) {
    res.json("notexist")
}
})





const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})


app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})




app.listen(3000, ()=>{
  console.log("port connected");
})
