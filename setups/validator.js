this.Ninja.setup([
  
  '$mask',
  '$regexp',
  '$required',
  '$stub',
  '$validator'

], function ($mask, $regexp, $required, $stub, $validator) {
  
  $validator.push($required);
  $validator.push($mask);
  $validator.push($regexp);
  $validator.push($stub);
  
});