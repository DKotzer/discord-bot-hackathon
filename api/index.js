const ICE_BREAKERS = [
  "60s, 70s, 80s, 90s: Which decade do you love the most and why?",
  "What's the best piece of advice you've ever gotten in your personal life?",
  "Are you a cat person or a dog person? Why?",
  "Are you a good dancer?",
  "Are you a traveler or a homebody?",
  "Are you an early bird or night owl?",
  "Are you more productive in the morning or at night?",
  "Are you wearing socks?",
  "As a child, what did you want to be when you grew up?",
  "Bacon or avocado?",
  "Best book you've ever read?",
  "Best professional development book you've ever read?",
  "Can you dance?",
  "Can you sing?",
  "Choose two famous people from history you'd want on your team during a zombie apocalypse.",
  "Coffee or tea?",
  "What is one thing on your bucket list?",
  "Do you have a favorite news site?",
  "Do you have a favorite plant?",
  "Do you have a pet?",
  "Do you have any remote work productivity hacks?",
  "Do you know how to speak more than one language?",
  "Do you love working from home or would you rather be in the office? Is there a balance of both that you like best?",  
  "Do you prefer classic Disney movies (think The Little Mermaid, Cinderella, and Beauty and the Beast) or more current favorites (Frozen, Tangled, Brave)?",  
  "Do you read, watch TV, or do something else to fall asleep?",
  "Do you think you could live without your smartphone for 24 hours?",
  "Does your car have a name? What is it?",
  "Favorite movie hero or heroine?",
  "Have you ever been to a comedy show?",
  "Have you ever been told you look like someone famous, who was it?",
  "Have you ever gone viral online?",
  "Have you ever left a 1 star review online?",
  "Have you ever met your idol or someone you revere greatly?",
  "What's the best piece of advice you've ever gotten at work?",
  "What is your favorite movie genre to watch?",
  "How do you stay productive and motivated working virtually?",
  "How many cups of coffee, tea, or beverage-of-choice do you have each morning?",
  "How much money would it take for you to give up your smartphone for a month?",
  "How would you rate your laugh out of 10?",
  "How'd you get your worst scar?",
  "If a movie was made of your life what genre would it be, who would play you?",
  "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
  "If you could add anyone to Mount Rushmore who would it be; why?",
  "If you could be any animal in the world, what animal would you choose to be?",
  "If you could be any supernatural creature, what would you be and why?",
  "If you could be guaranteed one thing in life (besides money), what would it be?",
  "If you could be immortal, what age would you choose to stop aging at and why?",
  "If you could bring back any fashion trend what would it be?",
  "If you could change places with anyone in the world, who would it be and why?",
  "If you could choose any person from history to be your imaginary friend, who would it be and why?",
  "If you could choose any two famous people to have dinner with who would they be?",
  "If you could commit any crime and get away with it what would you choose and why?",
  "If you could do anything in the world as your career, what would you do?",
  "If you could eliminate one thing from your daily routine, what would it be and why?",
  "If you could go to Mars, would you? Why or why not?",
  "If you could hang out with any cartoon character, who would you choose and why?",
  "If you could have any unlimited supply of one thing for the rest of your life, what would you pick?",
  "If you could have someone follow you around all the time, like a personal assistant, what would you have them do?",
  "If you could have the power of teleportation right now, where would you go and why?",
  "If you could instantly become an expert in something, what would it be?",
  "If you could learn one new personal skill, what would it be?",
  "If you could learn one new professional skill, what would it be?",
  "If you could live anywhere in the world for a year, where would it be?",
  "If you could live in any country, where would you live and why?",
  "If you could magically become fluent in any language, what would it be?",
  "If you could play any Olympic sport, which would it be?",
  "If you could rename yourself, what name would you pick?",
  "If you could read a book again for the first time, what would it be and why?",
  "If you could see one movie again for the first time, what would it be and why?",
  "If you could try any food, what would it be?",
  "If you could write a book that was guaranteed to be a best seller, what would you write?",
  "If you could write a book, what genre would you write it in? Mystery? Thriller? Romance? Historical fiction? Non-fiction?",  
  "If you had a time machine, would you go back in time or into the future?",
  "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
  "If you had to eat one meal everyday for the rest of your life what would it be?",
  "If you had to teach a class on one thing, what would you teach?",
  "If you were a wrestler what would be your entrance theme song?",
  "If you were famous, what would you be famous for?",
  "If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?",
  "Imagine you can instantly learn any language. Which would you choose?",
  "Imagine you could teleport anywhere. Where would you go right now?",
  "Imagine you no longer have to work. How would you spend a Tuesday?",
  "Let's play two truths and a lie. Tell two truths and one lie about yourself and everyone else will try to guess which one is the lie.",  
  "What's your favorite candy/junk food?",
  "Pull out your phone; what's your top 3 most used emojis?",
  "Say you're independently wealthy and don't have to work, what would you do with your time?",
  "Show us the weirdest thing you have in the room with you right now.",
  "Show us your phone wallpaper. Is there a story behind it?",
  "Show us your office space!",
  "Tea or coffee (or something else)?",
  "Teleportation or flying?",
  "Tell us about your worst haircut ever.",
  "Tell us one thing we don't know about you.",
  "The zombie apocalypse is coming, who are 3 people you want on your team?",
  "There's a lot of bad advice out there. What's the worst piece of advice you've ever been given?",
  "There's a round-trip free shuttle to Mars. The catch: it'll take one year of your life to go, visit, and come back. Are you in?",  
  "What actor or actress would you want to play you in the movie about your life?",
  "What book, movie, TV show have you read/seen recently that you would recommend and why?",
  "What breed of dog would you be?",
  "What bucket list item do you most want to check off in the next six months?",
  "What did you have for breakfast today?",
  "What do you like most about remote work?",
  "What does your favorite shirt look like?",
  "What does your morning routine look like when working from home?",
  "What does your typical work from home uniform look like?",
  "What emoji best describes how you're feeling right now?",
  "What fashion trend would you bring back?",
  "What fictional family would you be a member of?",
  "What fictional world or place would you like to visit?",
  "What food will you never eat?",
  "What fruit or vegetable would you most want to be?",
  "What is a best practice when working from home?",
  "What is the best romantic comedy?",
  "What is the best thing about the internet?",
  "What is the first website you remember visiting?",
  "What is the last YouTube video you watched?",
  "What is the last book you read?",
  "What is the last website you visited?",
  "What is the most challenging part of working from home?",
  "What is the most interesting online article you've read lately?",
  "What is the most obscure superpower you would want?",
  "What is the most unique thing you have within reach of your desk?",
  "What is the story behind the background on your phone?",
  "What is your WiFi name?",
  "What is your absolute dream job?",
  "What is your earliest memory of the internet?",
  "What is your favorite TV show?",
  "What is your favorite book genre to read?",
  "What is your favorite breakfast food?",
  "What is your favorite dessert?",
  "What is your favorite item you've bought this year?",
  "What is your favorite magical or mythological animal?",
  "What is your favorite meal to cook and why?",
  "What is your favorite musical instrument and why?",
  "What is your favorite television network?",
  "What is your favorite time of the day and why?",
  "What is your favorite website?",
  "What is your favorite “work from home” exercise?",
  "What is your go-to excuse for being late to virtual meetings?",
  "What languages do you know how to speak?",
  "What season would you be?",
  "What sport would you compete in if you were in the Olympics?",
  "What superpower would you most want?",
  "What vegetable would you want to be?",
  "What was the country you last visited outside of United States?",
  "What was the worst job you ever had?",
  "What was the worst style choice you ever made?",
  "What was the worst style or fashion trend you ever embraced?",
  "What was your favorite game to play as a child?",
  "What was your first online username?",
  "What was your least favorite food as a child? Do you still hate it or do you love it now?",
  "What would be the most surprising scientific discovery imaginable?",
  "What would the title of your autobiography be?",
  "What would your dream house be like?",
  "What would your superpower be and why?",
  "What is a hidden talent you have?",
  "What is one thing we don't know about you?",
  "What's one career you wish you could have?",
  "What's one skill you have that helps you be successful working remotely?",
  "What's one skill you want to learn to help you be successful working remotely?",
  "What's the best thing you've bought so far this year?",
  "What's the hardest part about working virtually for you? The easiest?",
  "What's the last great TV show or movie you wanted?",
  "What's the most embarrassing fashion trend you used to rock?",
  "What's the most out-of-character thing you've ever done?",
  "What's the strangest food you ever tried?",
  "What's your best scar story?",
  "What's your caffeinated beverage of choice? Coffee? Cola? Tea?",
  "What's your favorite dessert?",
  "What's your favorite flower or plant?",
  "What's your favorite holiday tradition?",
  "What's your favorite holiday?",
  "What's your favorite mythical creature?",
  "What's your favorite part of working from home?",
  "What's your favorite place of all the places you've travelled?",
  "What's your favorite sandwich and why?",
  "What's your favorite scent?",
  "What's your favorite thing to eat for breakfast?",
  "What's your favorite way to get in some exercise?",
  "What's your go-to TV show to watch at night?",
  "What's your go-to karaoke anthem?",
  "What's your least favorite part of working from home?",
  "What's your number one tip for combating distractions when working from home?",
  "What's your standard uniform when working remotely?",
  "What's one of your favorite/go-to memes or gifs?",
  "When you die, what do you want to be remembered for?",
  "Where did you grow up?",
  "Where do you consider “home”?",
  "Where do you work most frequently from at home? Your office? Your kitchen table? The backyard? Your bed?",
  "Where is your dream location to work from?",
  "Where is your favorite vacation spot?",
  "Where would you choose to haunt for all of eternity?",
  "Which app do you use most frequently?",
  "Which movie made you laugh the most?",
  "Which superpower would you give to your arch enemy?",
  "Which website do you spend the most time on?",
  "Who is the most famous person you've ever met?",
  "Who is your favorite Disney hero or heroine? Would you trade places with them?",
  "Who was your favorite pet?",
  "Who's your favorite Disney character?",
  "Who's your favorite Disney villain?",
  "Would you go in the mother-ship with aliens if they landed on Earth tomorrow?",
  "Would you rather always be slightly late or super early?",
  "Would you rather be a superhero or the world's best chef?",
  "Would you rather be able to run at 100 miles per hour or fly at 10 miles per hour?",
  "Would you rather be able to teleport or fly?",
  "Would you rather be an Olympic gold medallist or an astronaut?",
  "Would you rather be reincarnated as a cat or a dog?",
  "Would you rather be the funniest or smartest person in the room?",
  "Would you rather drink coffee or tea?",
  "Would you rather give up your smartphone or your computer?",
  "Would you rather go back in time or visit the future?",
  "Would you rather go out for the night or stay home?",
  "Would you rather have a pet lion, pet elephant, or pet whale?",
  "Would you rather have a pet sloth or a pet parrot?",
  "Would you rather have an appetizer or dessert?",
  "Would you rather have invisibility or flight?",
  "Would you rather live in the mountains or on the beach?",
  "Would you rather live in the ocean or on the moon?",
  "Would you rather live somewhere it's always hot or somewhere it's always cold?",
  "Would you rather live under the sea or on the moon?",
  "Would you rather live where it only snows or the temperature never falls below 100 degrees?",
  "Would you rather live without heat and AC or live without social media?",
  "Would you rather lose all of your money or all of your pictures?",
  "Would you rather medal in the Olympics or win a Pulitzer Prize?",
  "Would you rather meet your descendants or your ancestors?",
  "Would you rather travel back in time to meet your ancestors or to the future to meet your descendants?",
  "Would you rather start early or work late?",
  "Would you rather wake up early or stay up late?",
  "Would you rather watch TV or read a book?",
  "Would you rather work from the beach or a mountain cabin?",
  "Would you vote online?",
  "Would you want to have a personal assistant follow you around everywhere and do what you asked of them?",
  "Would you want to have an imaginary friend today? Did you have one as a child?",
  "You can have an unlimited supply of one thing for the rest of your life, what is it? Sushi? Scotch Tape?",
  "You can have anyone fictional as your imaginary friend, who do you choose and why?",
  "You can only eat one food again for the rest of your life. What is it?",
  "You can visit any fictional time or place. Which would you pick?",
  "You have to sing karaoke, what song do you pick?",
  "You have your own late night talk show, who do you invite as your first guest?",
  "You're going to sail around the world, what's the name of your boat?",
  "You're stranded on a remote desert island. Are you alone or with your worst enemy?",
  "You're the best criminal mastermind in the world. What crime would you commit if you knew you'd get away with it?"
]

const getRandomIceBreaker = () => {
  return ICE_BREAKERS[Math.floor(Math.random() * ICE_BREAKERS.length)]
}

module.exports = {
  getRandomIceBreaker
}