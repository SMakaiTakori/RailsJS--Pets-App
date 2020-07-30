Rails/JS - Fun with pets project

Models 

#Pet model
has_many :activities 

name, 
owner, 
type,
mood = "neutral" 
phrase

#Activity model 
belongs_to :pet

name
￼
Activities can include : walking, feeding, playing, discipline, belly rubs, bathing, medicine  

-First screen has drop down for user to choose type of pet they want.. ‘Choose your Pet!’

-Next:
Enter your name (owner)
Enter Pet’s name

(Background and Pet pictures will load)

Each type of Pet will come with a set ‘mood’...(mood = “sad”, “sick”, “happy”, “hungry”, “ecstatic” )

-Click on activity 
-Each activity changes pet mood/happiness...
pet also responds with a phrase after certain activities 
