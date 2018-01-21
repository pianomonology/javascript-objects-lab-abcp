var recipes = {};

function updateObjectWithKeyAndValue (object, key, value){
  return object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (key, value){
 let newRecipes = Object.assign (recipes + {key: value})
  return recipes
  return newRecipes
}