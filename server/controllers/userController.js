const User = require('../models/userModel');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/

const getUsers = 'SELECT username FROM user_info;'; 

userController.getUsers = (req, res, next) => {
  User.query(getUsers, (err, response)=>{
    if (err) {
      return next(err.stack);// maybe check out better error messaging
	} else {
	  res.locals.users = response.rows;
	  return next();
	}
  });
};


/**
* createUser - create and save a new User into the database.
*/


//const submitted_info = docuemnt.addEventListener('submit', 'form').values
const createUseraccount = 'INSERT INTO user_info (username, password, email, nickname) VALUES ($1, $2, $3, $4);';


// const addCharacter = 'INSERT INTO people(name,gender,species_id,birth_year,eye_color,skin_color,hair_color,mass,height,homeworld_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);';
  
//check if the inputted username already exists in the table


userController.createUser = (req, res, next) => {
  	//const { username, password } = req.body;	
	
	User.query(createUseraccount, value, (err, response) => {
		const objChar = req.body;
		const searchUserCount = `SELECT COUNT(*) from user_info WHERE username = ${objChar.username};`
		if(err || User.query(searchUserCount) > 0) return next(err.stack);
		else {
			next();
		}
	})
}


/*
starWarsController.addCharacter = (req, res, next) => {
	// write code here
	const objChar = req.body;
	delete objChar.species;
	delete objChar.homeworld;
	delete objChar.films;
	//const addCharacter = 'INSERT INTO people($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) VALUES($11,$12,$13,$14,$15,$16,$17,$18,$19,$20);';
	const addCharacter = 'INSERT INTO people(name,gender,species_id,birth_year,eye_color,skin_color,hair_color,mass,height,homeworld_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);';
	const values = [];
       
	
	// for (let i = 1; i < Object.keys(objChar).length + 1; i++) {
	//   values.push(Object.keys(objChar)[i - 1]);
	// }
	
	for (let i = 0; i < Object.keys(objChar).length; i++) {
	  values.push(objChar[Object.keys(objChar)[i]]);
	}
	
	// console.log('addCharacter', addCharacter);
	// console.log('values',values);
	db.query(addCharacter, values, (err, response)=>{
	  if (err) {
	    console.log(err);
	    return next(err);// maybe check out better error messaging
	  } else {
	    return next();
	  }
	});
      };

*/

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/

userController.verifyUser = (req, res, next) => {
  // console.log(req.body);
  const objChar = req.body; 

  const findUser = `select username, password from user_info WHERE ${objChar.username} = username;`

  User.query(findUser, (req, res) => {
	  if(err || password != findUser.password) {
		  console.log(err);
		  res.render('./..client/login');
	  } else {
		  return next();
	  }
  })

//   User.findOne({username: username},
//     (err,data) => {
//       //console.log('verify user: ', data);
//       if(err || password !== data.password){
//         console.log(err);
//         res.render('./../client/signup', {error: err}); 
//       }else{
//         return next();
//       }
//     }
//   )
};

module.exports = userController;
