var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

  var officersId =  officers.map(function(idofofficer){
    console.log(idofofficer.id );  

  });




  return this.props.todos.map((todo) => (
      
    <Todoitem key={todo.id}   todo = {todo}/>
));


const mytests = todos.map(function(todo){
  
    <Todoitem key={todo.id}   todo = {todo}/>

});