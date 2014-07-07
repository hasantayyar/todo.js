#!/usr/bin/env node
var program = require('commander');
var nStore = require('nstore');

function list(val) {
  return val.split(',').map(Number);
}

program
  .version('0.0.1')
  .option('-c, --clear', 'delete all todo items')

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ custom-help --help');
  console.log('    $ custom-help -h');
  console.log('');
});

program.parse(process.argv);

var todoItems = nStore.new('data/todo.db', function () {
	console.log("loaded");
});
todoItems.save(null, {title: "Demo", "deadline":"demo"}, function (err, key) {
    if (err) { throw err; }
    console.log("created new todo item with key "+key);
});

console.log('todo.js');
