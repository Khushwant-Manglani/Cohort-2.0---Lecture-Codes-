const express=require('express');
// uuid will give any randon id
const uuid=require('uuid');
// it is an object instance of express class 
// calls Router() method and get obj instance
// we use it to define and manage routes, middleware and http req 
const router=express.Router();

// import the require file to use
const members=require('../../Members');

// get http request show the content recive from the server on cleint side
router.get('/', (req, res) =>  {
  res.json(members);
});

// we have to get only single member from id
// we using id as the params in url to get the single member
// params in req comes as a string so we have to convert it in integer
router.get('/:id', (req, res) => { 
  // some also work an iterating array gives true and false acc to present and not present
  const foundId = members.some(member => member.id === parseInt(req.params.id));

  if(foundId) {
    // filter makes an new array which follow the condition 
    // if the member id is equal to params id then it will push in new array 
    // and then after complete all iteration express will send response in json format
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    // if not send status code 400 and json obj of not found msg
    res.status(400).json({ msg: `The member with id : ${req.params.id} is not found!` });
  }
});

// create a new member, means take an new member details from cleint
// post request to take any detail like form submission and all after process all detail send back as a response]
router.post('/', (req, res) => {
  // the JSON data that cleint parse are available in req.body
  
  if(!req.body.name || !req.body.email) {
    res.status(400).json({ msg: "please provide name and email!" });
    return;
  }
  
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  }

  members.push(newMember);
  res.json(members);

});

// change the old member, means the details take from cleint
// if that details is valid them update the member of that details
// put request use to change the property(details) of an obj
router.put('/:id', (req, res) => {
  const updateMember=req.body;
  const foundId=members.some(member => member.id === parseInt(req.params.id));
  
  if(!foundId) {
    res.status(400).json({ msg: `The member with id : ${req.params.id} doesn't exist.`});
  } else {
    // iterate and check if get then update
    members.forEach(member => {
      if(member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;
        res.json({ msg: "Member has been updated", member });
      }
    });
  }
});

router.delete('/:id', (req, res) => {
  const foundId=members.some(member => member.id === parseInt(req.params.id));

  if(!foundId) {
    res.status(400).json({ msg: `The member with id : ${req.params.id} doesn't exist.`});
  } else {
    res.json(members.filter(member => member.id !== parseInt(req.params.id)));
  }
});

// export the router so that other files can use it
module.exports = router;