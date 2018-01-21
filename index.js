var recipes = {};

function updateObjectWithKeyAndValue (object, key, value){
  object.assign (object, {[key]: value})
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue (key, value){
 let newRecipes = Object.assign (recipes + {key: value})
  return recipes
  return newRecipes
}