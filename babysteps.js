require('util');

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(Number(process.argv[2]));
console.log(Number(process.argv[3]));
console.log(Number(process.argv[4]));
console.log(util.format('%d:%d',process.argv[2],process.argv[3]));

process.argv.forEach(function(val, index, array) {
  console.log(index+':'+val+',');
  if(index>=2)
	console.log(Number(val));
});
