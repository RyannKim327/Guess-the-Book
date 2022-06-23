const books = [
  [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
    "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclasiastes", "Song of Solomon", "Isiah", "Jeremiah", "Lamentations",
    "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
    "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
    "Zephaniah", "Haggai", "Zechariah", "Melachi"
  ],
  [
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy",
    "2 Timothy", "Titus", "Philemon", "Hebrews", "James",
    "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
    "Jude", "Revelation"
  ]
]

let score = 0
let time = 60
let rumble = ''
let book = ''

let id_answer = document.getElementById('answer')
let id_book = document.getElementById('book')
let id_button = document.getElementById('button')
let id_score = document.getElementById('score')
let id_timer = document.getElementById('timer')

function ongame(){
  let random = Math.floor(Math.random() * books.length)
  book = books[random][Math.floor(Math.random() * books[random].length)]
  
  let i = []
  for(let c = 0; c < book.length; c++){
    let r = Math.floor(Math.random() * book.length)
    if(i.includes(r)){
      c--
    }else{
      i[c] = r
    }
  }
  for(let c = 0; c < i.length; c++){
    rumble += book[i[c]]
  }
  id_book.textContent = 'Rumbled letters: ' + rumble.replace(/\s/g, '').toLowerCase()
  id_answer.style.display = 'inline'
  id_button.textContent = 'Send Answer'
}

id_button.addEventListener('click', () => {
  if(rumble != ''){
    if(id_answer.value == book){
      score++
    }else{
      score--
    }
  }else{
    timer()
  }
  rumble = ''
  id_answer.value = ''
  id_score.textContent = 'Your current score: ' + score
  ongame()
})

function timer(){
  if(time > 0){
    time--
    id_timer.textContent = 'Time: ' + time
    setTimeout(timer, 1000)
  }else{
    id_answer.value = ''
    id_answer.style.display = 'none'
    id_button.style.display = 'none'
    id_book.textContent = "Time's up!"
    setTimeout(() => {
      id_button.style.display = 'inline'
      id_button.textContent = 'Initiate Game'
      book = ''
      rumble = ''
      score = 0
      time = 60
    }, 5000)
  }
}

document.getElementById('hide').addEventListener('click', () => {
  document.getElementById('tutorial').style.display = 'none'
})
