'strict mode'
//Create the variables for the list 
let coders = []
let elForm = document.getElementById('entryform')
// Create a constructor function and its parameters
let StudentProfile = function(name, language, school) {
    this.name = name 
    this.language = language
    this.school = school
}

StudentProfile.prototype.showStudentDetails = function() {
    let coders = []
    let studentDiv = document.createElement('div')
    let ulElement = document.createElement('ul')
    studentDiv.appendChild(ulElement)
    document.body.appendChild(studentDiv)
    coders.push(this.name, this.language, this.school)
    for (let coder of coders){
        let liElement = document.createElement('li')
        ulElement.appendChild(liElement)
        liElement.innerText = coder
    }
}

// let getData = localStorage.getItem('coderStudentStorage')
// coders = JSON.parse(getData)

let pythonCoder = new StudentProfile('Mary', 'Python', 'General Assembly')
let javaCoder = new StudentProfile('Luis', 'Java', 'FlatIron')
let rubyCoder = new StudentProfile('Antonella','Ruby','Springboard')

let developers = []
developers.push(pythonCoder, javaCoder, rubyCoder)

function displayStudentDetails(array){
    for(let element of array){
        element.showStudentDetails()
    }
}

displayStudentDetails(developers)

let name = elForm.name
let language = elForm.language
let school = elForm.school

elForm.addEventListener('submit', function(event) {
    event.preventDefault()
    newCoder = new StudentProfile(name.value, language.value, school.value)
    developers.push(newCoder)
    function addDataToLocalStorage(data){
        localStorage.setItem('CoderFile', JSON.stringify(data))
      }
console.log(newCoder)
newCoder.showStudentDetails()
})

// // function renderNewCoder(event){
    
//     console.log(newCoder)
//     displayCoderDetails(newCoder)
//     localStorage.setItem('coderStudentStorage', JSON.stringify(developers))
// }
// elForm.addEventListener('enter', renderNewCoder)