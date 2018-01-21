var recipes = {};

function updateObjectWithKeyAndValue (givenRecipes, newKey, newValue){
  object.assign (recipes, {[key]: value})
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (key, value){
 let newRecipes = Object.assign (recipes + {key: value})
  return recipes
  return newRecipes
}