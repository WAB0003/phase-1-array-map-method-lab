const tutorials = [
  'what does the this keyword mean?', //"What Does The This Keyword Mean?"
  'What is the Constructor OO pattern?', //"What Is The Constructor OO Pattern?"
  'implementing Blockchain Web API',  //"Implementing Blockchain Web API"
  'The Test Driven Development Workflow', //"The Test Driven Development Workflow"
  'What is NaN and how Can we Check for it', //"What Is NaN And How Can We Check For It"
  'What is the difference between stopPropagation and preventDefault?', //"What Is The Difference Between StopPropagation And PreventDefault?"
  'Immutable State and Pure Functions', //"Immutable State And Pure Functions"
  'what is the difference between == and ===?',//"What Is The Difference Between == And ===?"
  'what is the difference between event capturing and bubbling?',//"What Is The Difference Between Event Capturing And Bubbling?"
  'what is JSONP?' //What Is JSONP?
];

const titleCased = () => {
  // return 
  return (tutorials.map(tutorial => {
    //capitalize the first word of every sentence
    tutorial = tutorial.charAt(0).toUpperCase() + tutorial.slice(1)
    // capitalize first letter in every word
    for (let i=0;i<tutorial.length;i++) {
      if(tutorial.charAt(i)===" "){
        
        tutorial = tutorial.slice(0,i+1)+tutorial.charAt(i+1).toUpperCase()+tutorial.slice(i+2)
      }
    }
    console.log(tutorial)

    return tutorial
  })
  )
}

titleCased()

