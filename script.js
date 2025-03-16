document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

    // State management for variables
    const storyState = {
        variables: {},
        
        // Set a variable
        set: function(name, value) {
            this.variables[name] = value;
            console.log(`Variable $${name} set to:`, value);
        },
        
        // Get a variable
        get: function(name) {
            return this.variables[name];
        },
        
        // Check if a variable exists
        has: function(name) {
            return this.variables.hasOwnProperty(name);
        },

        // Increment a numeric variable
        increment: function(name, amount = 1) {
            if (!this.has(name)) {
                this.set(name, 0);
            }
            const newValue = Number(this.get(name)) + amount;
            this.set(name, newValue);
            return newValue;
        },

        // Process text and replace variables
        processText: function(text) {
            return text.replace(/\$([a-zA-Z][a-zA-Z0-9_]*)/g, (match, varName) => {
                return this.has(varName) ? this.get(varName) : match;
            });
        }
    };

   // Story
   const story = [
        
    // Chapter 1
    
    // Introductions
    { id: 'start', type: 'story', text: 'A soft, uncertain voice drifts through the air, as if carried by a whispering breeze.', delay: 1000, nextId: 'intro1', onArrival: () => {
        storyState.set('examinedRunes', false);
        storyState.set('examinedBooks', false);
        storyState.set('readBook', false);
        storyState.set('returnedtoRunes', false);
        storyState.set('returnedtoBooks', false);
        storyState.set('lookedaroundtheroom', false);
        
    } },
    { id: 'intro1', type: 'npc', text: 'Hello..?', delay: 1000, nextId: 'intro2' },
    { id: 'intro2', type: 'npc', text: 'Is... is someone there?', delay: 1000, nextId: 'intro3' },
    { id: 'intro3', type: 'npc', text: 'Please, if you can hear me, say something.', delay: 1000, nextId: 'introductions' },
    { id: 'introductions', type: 'choice', choices: [
{ text: 'Who are you?', nextId: 'whoareyou-1' },
{ text: 'I hear you.', nextId: 'ihearyou-1' }
], delay: 1500 },

{ id: 'ihearyou-1', type: 'npc', text: 'Oh, thank the gods! I thought I was alone.', delay: 1000, nextId: 'ihearyou-2' },
{ id: 'ihearyou-2', type: 'npc', text: 'I\'ve been trying for... I don\'t know how long.', delay: 1000, nextId: 'ihearyou-choices' },
{ id: 'ihearyou-choices', type: 'choice', choices: [
{ text: 'Who are you?', nextId: 'whoareyou-1' },
{ text: 'Where are you?', nextId: 'whereareyou-1' }
], delay: 1500 },


{ id: 'whoareyou-1', type: 'npc', text: 'I... I don\'t actually know who I am.', delay: 1000, nextId: 'whoareyou-2' },
{ id: 'whoareyou-2', type: 'npc', text: 'Everything\'s so foggy. My mind, my memories...', delay: 1000, nextId: 'whoareyou-3' },
{ id: 'whoareyou-3', type: 'npc', text: 'It feels... wrong.', delay: 1000, nextId: 'whoareyou-choices' },
{ id: 'whoareyou-choices', type: 'choice', choices: [
{ text: 'What happened?', nextId: 'whathappened-1' },
{ text: 'How do you not know?', nextId: 'hownotknow-1' }
], delay: 1500 },

{ id: 'hownotknow-1', type: 'npc', text: 'Why don\'t I know? Why can\'t I remember anything, like any sane person should?', delay: 1000, nextId: 'hownotknow-2' },
{ id: 'hownotknow-2', type: 'npc', text: 'Because I think I\'m cursed, alright?', delay: 1000, nextId: 'hownotknow-3' },
{ id: 'hownotknow-3', type: 'npc', text: 'Not just a streak of bad fortune, but truly, deeply cursed. The kind of curse that gnaws at your mind and twists your fate.', delay: 1000, nextId: 'hownotknow-4' },
{ id: 'hownotknow-4', type: 'npc', text: 'Every time I try to recall who I am or how I got here, it’s like pushing through thick fog. My own memories slip through my fingers like sand.', delay: 1000, nextId: 'hownotknow-5' },
{ id: 'hownotknow-5', type: 'npc', text: 'This place... these runes... it all feels like a trap. Like I\'ve been woven into some dark spell.', delay: 1000, nextId: 'hownotknow-6' },
{ id: 'hownotknow-6', type: 'npc', text: 'I\'ve heard tales of curses that steal a person\'s name, unravel their sense of self. What if that\'s what\'s happening to me?', delay: 1000, nextId: 'hownotknow-7' },
{ id: 'hownotknow-7', type: 'npc', text: 'What if I\'m just a shadow of who I was, lost in this tower forever?', delay: 1000, nextId: 'hownotknow-choices' },
{ id: 'hownotknow-choices', type: 'choice', choices: [
{ text: 'Steady yourself.', nextId: 'steady-1' },
{ text: 'Take a breath.', nextId: 'breath-1' }
], delay: 1500 },

{ id: 'breath-1', type: 'npc', text: '\'Take a breath\'!?', delay: 1000, nextId: 'breath-2' },
{ id: 'breath-2', type: 'npc', text: 'I\'m trapped in a tower filled with shifting runes and eerie silence. I have no idea who I am, where I am, or why I\'m here.', delay: 1000, nextId: 'breath-3' },
{ id: 'breath-3', type: 'npc', text: 'And you\'re telling me to \'take a breath\'!?', delay: 1000, nextId: 'breath-4' },
{ id: 'breath-4', type: 'npc', text: 'Look, if I am cursed, then I might not even be... real. What if I\'m just a whisper in someone else\'s dream?', delay: 1000, nextId: 'breath-5' },
{ id: 'breath-5', type: 'npc', text: 'I\'m trying not to panic, okay? But... I\'m fucking terrified!', delay: 1000, nextId: 'breath-choices' },
{ id: 'breath-choices', type: 'choice', choices: [
{ text: 'We\'ll find a way out.', nextId: 'steady-1' },
{ text: 'Stop whining.', nextId: 'stopwhining-1' }
], delay: 1500 },

{ id: 'stopwhining-1', type: 'npc', text: 'Oh, and I suppose you get trapped in a cursed tower every day, do you? Surrounded by shifting runes and whispers in the shadows?', delay: 1000, nextId: 'stopwhining-2' },
{ id: 'stopwhining-2', type: 'npc', text: 'You\'d make a terrible cleric, you know that? \'Oh, you\'ve got a festering wound? Well, then stop bleeding!\'', delay: 1000, nextId: 'stopwhining-3' },
{ id: 'stopwhining-3', type: 'npc', text: 'I think I was better off talking to myself. At least my inner voice doesn\'t judge me.', delay: 1000, nextId: 'stopwhining-4' },
{ id: 'stopwhining-4', type: 'npc', text: 'Look, I... I need a moment. I\'ll reach out into... whatever void this is when I\'ve gathered my thoughts.', delay: 1000, nextId: 'stopwhining-wait' },
{ id: 'stopwhining-wait', type: 'story', text: 'Waiting time: 30 min', delay: 1000, nextId: 'stopwhining-5' }, // 30-minute delay
{ id: 'stopwhining-5', type: 'npc', text: 'Okay, maybe you were a bit right.', delay: 1000, nextId: 'stopwhining-6' },
{ id: 'stopwhining-6', type: 'npc', text: 'Sitting here feeling sorry for myself won’t break this curse. I\'ve got to do something. Anything.', delay: 1000, nextId: 'stopwhining-7' },
{ id: 'stopwhining-7', type: 'npc', text: 'Just... I\'m terrified, okay? I don\'t even know who I am. I\'m grateful to hear a real voice, I really am, but... take it easy on me, alright?', delay: 1000, nextId: 'stopwhining-choices' },
{ id: 'stopwhining-choices', type: 'choice', choices: [
{ text: 'I\'m sorry about earlier.', nextId: 'steady-1' },
{ text: 'You need to toughen up.', nextId: 'toughenup-1' }
], delay: 1500 },

{ id: 'toughenup-1', type: 'npc', text: 'Alright, you\'ve certainly got the \'tough\' part of \'tough love\' nailed down. A little warmth wouldn\'t hurt, though.', delay: 1000, nextId: 'toughenup-2' },
{ id: 'toughenup-2', type: 'npc', text: 'Look, I\'m going to keep speaking to you... mostly because your voice is better than the silence of this cursed place.', delay: 1000, nextId: 'toughenup-3' },
{ id: 'toughenup-3', type: 'npc', text: 'If you can offer me any help at all, well, that\'d be... I don\'t know. A blessing? Or at least, less of a curse.', delay: 1000, nextId: 'toughenup-choices' },
{ id: 'toughenup-choices', type: 'choice', choices: [
{ text: 'Any idea where you are?', nextId: 'whereareyou-1' },
{ text: 'Are you hurt?', nextId: 'areyoualright-1' }
], delay: 1500 },

{ id: 'steady-1', type: 'npc', text: 'Right. Yes. Sorry. It\'s just... this place is getting to me.', delay: 1000, nextId: 'steady-2' },
{ id: 'steady-2', type: 'npc', text: 'I\'ve read stories about curses and enchantments. Warnings carved into ancient stones. But none of those tales mentioned how... small it makes you feel.', delay: 1000, nextId: 'steady-3' },
{ id: 'steady-3', type: 'npc', text: 'But it\'s fine. It has to be fine. I just need to find a way out, break whatever spell is holding me.', delay: 1000, nextId: 'steady-4' },
{ id: 'steady-4', type: 'npc', text: 'Only... what if I can\'t? What if I\'m really cursed? What if this is my prison forever?', delay: 1000, nextId: 'steady-5' },
{ id: 'steady-5', type: 'npc', text: 'Gods, what if I\'m the only one here? What if I\'m... alone?', delay: 1000, nextId: 'steady-choices' },
{ id: 'steady-choices', type: 'choice', choices: [
{ text: 'Steady now. Just breathe.', nextId: 'steadybreathe-1' },
{ text: 'Want to talk about what you remember?', nextId: 'whatdoyouremember-1' }
], delay: 1500 },

{ id: 'steadybreathe-1', type: 'npc', text: 'Right. Yes. Breathe. I can do that.', delay: 1000, nextId: 'steadybreathe-2' },
{ id: 'steadybreathe-2', type: 'npc', text: 'It\'s like I heard once—maybe in a story or from someone I knew:', delay: 1000, nextId: 'steadybreathe-3' },
{ id: 'steadybreathe-3', type: 'npc', text: '\'Worrying about shadows only makes them longer. Focus on the light that you have.\'', delay: 1000, nextId: 'steadybreathe-4' },
{ id: 'steadybreathe-4', type: 'npc', text: 'So... let\'s do that. Focus on what I know, not on what I fear.', delay: 1000, nextId: 'steadybreathe-choices' },
{ id: 'steadybreathe-choices', type: 'choice', choices: [
{ text: 'What do you see around you?', nextId: 'whereareyou-1' },
{ text: 'Are you hurt?', nextId: 'areyoualright-1' }
], delay: 1500 },

{ id: 'whathappened-1', type: 'npc', text: 'I... I don\'t know.', delay: 1000, nextId: 'whathappened-2' },
{ id: 'whathappened-2', type: 'npc', text: 'There was darkness. A voice, chanting something I couldn\'t understand.', delay: 1000, nextId: 'whathappened-3' },
{ id: 'whathappened-3', type: 'npc', text: 'And then I woke up here. No memory of how I got here, no idea who I am.', delay: 1000, nextId: 'whathappened-4' },
{ id: 'whathappened-4', type: 'npc', text: 'This place feels... wrong.', delay: 1000, nextId: 'whathappened-5' },
{ id: 'whathappened-5', type: 'npc', text: 'I don\'t know if I was brought here, if I walked in willingly, or if I was thrown into some terrible ritual.', delay: 1000, nextId: 'whathappened-choices' },
{ id: 'whathappened-choices', type: 'choice', choices: [
{ text: 'Are you alright?', nextId: 'areyoualright-1' },
{ text: 'Where are you?', nextId: 'whereareyou-1' }
], delay: 1500 },

{ id: 'whereareyou-1', type: 'npc', text: 'The only way I can answer that with any certainty is to say... \'trapped.\'', delay: 1000, nextId: 'whereareyou-2' },
{ id: 'whereareyou-2', type: 'npc', text: 'If you\'ve ever tossed something into a bag of holding and forgotten about it, that\'s me. Lost in the void, waiting to be found—or never to be found at all.', delay: 1000, nextId: 'whereareyou-3' },
{ id: 'whereareyou-3', type: 'npc', text: 'This place feels old. Ancient. But not abandoned. It\'s like the walls themselves are watching.', delay: 1000, nextId: 'whereareyou-4' },
{ id: 'whereareyou-4', type: 'npc', text: 'I don\'t know how I got here. I don\'t know how long I\'ve been here.', delay: 1000, nextId: 'whereareyou-choices' },
{ id: 'whereareyou-choices', type: 'choice', choices: [
{ text: 'Describe the room.', nextId: 'describeroom-1' },
{ text: 'Do you remember anything?', nextId: 'whatdoyouremember-1' }
], delay: 1500 },

{ id: 'areyoualright-1', type: 'npc', text: 'Let\'s see. I woke up in a tower with no memory, no idea how I got here, and no clue who I am.', delay: 1000, nextId: 'areyoualright-2' },
{ id: 'areyoualright-2', type: 'npc', text: 'No doors, no way out, and the only staircase is blocked by a glowing barrier.', delay: 1000, nextId: 'areyoualright-3' },
{ id: 'areyoualright-3', type: 'npc', text: 'And, oh! Let\'s not forget—this whole place feels wrong. Like the air itself is heavy, pressing down on me, like it\'s waiting for something.', delay: 1000, nextId: 'areyoualright-4' },
{ id: 'areyoualright-4', type: 'npc', text: 'I don\'t feel hurt, exactly, but... I don\'t feel right, either.', delay: 1000, nextId: 'areyoualright-5' },
{ id: 'areyoualright-5', type: 'npc', text: 'It\'s like something is missing. Like I\'m not whole.', delay: 1000, nextId: 'areyoualright-6' },
{ id: 'areyoualright-6', type: 'npc', text: 'But hey, I\'m breathing. So that\'s something.', delay: 1000, nextId: 'areyoualright-choices' },
{ id: 'areyoualright-choices', type: 'choice', choices: [
{ text: 'What do you mean \'not whole\'?', nextId: 'nothole-1' },
{ text: 'At least you\'re not injured.', nextId: 'notinjured-1' }
], delay: 1500 },

{ id: 'whatdoyouremember-1', type: 'npc', text: 'There was darkness. Then a voice... Chanting, maybe?', delay: 1000, nextId: 'whatdoyouremember-2' },
{ id: 'whatdoyouremember-2', type: 'npc', text: 'I also remember... feeling cold. Like I\'d never be warm again.', delay: 1000, nextId: 'whatdoyouremember-3' },
{ id: 'whatdoyouremember-3', type: 'npc', text: 'Gods, I\'d give anything for a warm cup of tea right about now.', delay: 1000, nextId: 'whatdoyouremember-4' },
{ id: 'whatdoyouremember-4', type: 'npc', text: 'If this all turns out for the best, maybe we can sit by a fire somewhere and have some real tea.', delay: 1000, nextId: 'whatdoyouremember-5' },
{ id: 'whatdoyouremember-5', type: 'npc', text: 'Or, honestly? If I get out of here alive, I might go for something a lot stronger than tea.', delay: 1000, nextId: 'whatdoyouremember-choices' },
{ id: 'whatdoyouremember-choices', type: 'choice', choices: [
{ text: 'Sounds good.', nextId: 'soundsgood-1' },
{ text: 'Describe where you are now.', nextId: 'describeroom-1' }
], delay: 1500 },

{ id: 'soundsgood-1', type: 'npc', text: 'Yeah, anything sounds good right about now...', delay: 1000, nextId: 'soundsgood-2' },
{ id: 'soundsgood-2', type: 'npc', text: 'I have this ridiculous thought that if I just start looking hard enough, a nice little tavern will magically appear in the corner of this tower.', delay: 1000, nextId: 'soundsgood-3' },
{ id: 'soundsgood-3', type: 'npc', text: 'Cozy, warm, serving fresh bread and stew...', delay: 1000, nextId: 'soundsgood-4' },
{ id: 'soundsgood-4', type: 'npc', text: 'But knowing my luck? I\'d just get a pile of dust and a goblet full of ghostly whispers.', delay: 1000, nextId: 'soundsgood-choices' },
{ id: 'soundsgood-choices', type: 'choice', choices: [
{ text: 'Let\'s focus.', nextId: 'letsfocus-1' },
{ text: 'Describe the room.', nextId: 'describeroom-1' }
], delay: 1500 },

{ id: 'nothole-1', type: 'npc', text: 'I wish I knew.', delay: 1000, nextId: 'nothole-2' },
{ id: 'nothole-2', type: 'npc', text: 'It\'s like... trying to hold onto a dream after waking up. The harder I try to remember, the more it slips away.', delay: 1000, nextId: 'nothole-3' },
{ id: 'nothole-3', type: 'npc', text: 'I reach for my name, my past—anything—and there\'s just... nothing. Like those parts of me were taken, or maybe never there at all.', delay: 1000, nextId: 'nothole-4' },
{ id: 'nothole-4', type: 'npc', text: 'This place doesn\'t help. It\'s like I\'m part of something I don\'t understand.', delay: 1000, nextId: 'nothole-5' },
{ id: 'nothole-5', type: 'npc', text: 'It\'s like ... I\'m cursed.', delay: 1000, nextId: 'nothole-6' },
{ id: 'nothole-6', type: 'npc', text: 'I\'ve heard stories of magic that can strip away memories, untether someone from who they were. I never thought much of them before.', delay: 1000, nextId: 'nothole-7' },
{ id: 'nothole-7', type: 'npc', text: 'But now ... now I wonder.', delay: 1000, nextId: 'nothole-choices' },
{ id: 'nothole-choices', type: 'choice', choices: [
{ text: 'Where are you now?', nextId: 'whereareyou-1' },
{ text: 'Steady yourself.', nextId: 'steady-1' }
], delay: 1500 },


{ id: 'letsfocus-1', type: 'npc', text: 'Yeah, yeah. You\'re right. Dreaming about taverns isn\'t going to get me out of here.', delay: 1000, nextId: 'letsfocus-2' },
{ id: 'letsfocus-2', type: 'npc', text: 'Look, let me tell you what I can see from here. Maybe you can help me figure out what to do next.', delay: 1000, nextId: 'describeroom-1' },

{ id: 'notinjured-1', type: 'npc', text: 'Oh, sure. No broken bones, no stab wounds, not even a paper cut from one of these ominous floating books.', delay: 1000, nextId: 'notinjured-2' },
{ id: 'notinjured-2', type: 'npc', text: 'So, really, what more could I ask for? I\'m perfectly fine—aside from the minor inconvenience of having no memories and being trapped in a tower steeped in unsettling magic.', delay: 1000, nextId: 'notinjured-3' },
{ id: 'notinjured-3', type: 'npc', text: 'But hey, I\'ll count my blessings.', delay: 1000, nextId: 'notinjured-choices' },
{ id: 'notinjured-choices', type: 'choice', choices: [
{ text: 'Your humor seems intact.', nextId: 'humorintact-1' },
{ text: 'Describe the room.', nextId: 'describeroom-1' }
], delay: 1500 },

{ id: 'humorintact-1', type: 'npc', text: 'Well, if I lose that too, I really am doomed.', delay: 1000, nextId: 'humorintact-2' },
{ id: 'humorintact-2', type: 'npc', text: 'But enough about me—let\'s talk about this place, because it\'s not exactly putting me at ease.', delay: 1000, nextId: 'describeroom-1' },

{ id: 'describeroom-1', type: 'npc', text: 'Alright, so, this definitely looks like a wizard\'s tower.', delay: 1000, nextId: 'describeroom-2' },
{ id: 'describeroom-2', type: 'npc', text: 'The walls are basically bookshelves. This room is packed with books. A few are floating in place.', delay: 1000, nextId: 'describeroom-3' },
{ id: 'describeroom-3', type: 'npc', text: 'The floor is covered in strange symbols, drawn in what looks like silver dust. When I glance away and back, they seem to shift slightly, like they\'re alive. I don\'t like that.', delay: 1000, nextId: 'describeroom-4' },
{ id: 'describeroom-4', type: 'npc', text: 'There is a staircase spiraling both up and down, carved straight into the stone.', delay: 1000, nextId: 'describeroom-5' },
{ id: 'describeroom-5', type: 'npc', text: 'But there\'s a problem.', delay: 1000, nextId: 'describeroom-6' },
{ id: 'describeroom-6', type: 'npc', text: 'A shimmering barrier blocks the way down. It hums softly. And its light is pulsing in time with the runes on the floor. I don\'t know if it\'s keeping something out... or keeping me in.', delay: 1000, nextId: 'describeroom-7' },
{ id: 'describeroom-7', type: 'npc', text: 'I can\'t see where the staircases lead.', delay: 1000, nextId: 'describeroom-8' },
{ id: 'describeroom-8', type: 'npc', text: 'So ... what do you think?', delay: 1000, nextId: 'describeroom-choices' },
{ id: 'describeroom-choices', type: 'choice', choices: [
{ text: 'Examine the books.', nextId: 'examinebooks-1' },
{ text: 'Examine the runes.', nextId: 'examinerunes-1' }
], delay: 1500 },

// Examine the Books
{ id: 'examinebooks-1', type: 'npc', text: 'Alright, let\'s see if any of these books are useful.', delay: 1000, nextId: 'examinebooks-2', onArrival: () => {
    storyState.set('examinedBooks', true);
} },
{ id: 'examinebooks-2', type: 'story', text: '(Waiting 10 minutes)', delay: 1000, nextId: 'examinebooks-3' },
{ id: 'examinebooks-3', type: 'npc', text: 'Okay... these books are strange.', delay: 1000, nextId: 'examinebooks-4' },
{ id: 'examinebooks-4', type: 'npc', text: 'They\'re written in a language I don\'t recognize. The letters shift when I try to focus on them, like they don\'t want to be read.', delay: 1000, nextId: 'examinebooks-5' },
{ id: 'examinebooks-5', type: 'npc', text: 'And some of them... breathe. The pages flutter on their own, like they\'re alive. Not in a friendly way, either. More like they\'re waiting.', delay: 1000, nextId: 'examinebooks-6' },
{ id: 'examinebooks-6', type: 'npc', text: 'I don\'t think they\'re meant for me. Or maybe they are, but not yet.', delay: 1000, nextId: 'examinebooks-7' },
{ id: 'examinebooks-7', type: 'npc', text: 'Maybe there\'s a clue somewhere else in the tower—something that could help me understand them.', delay: 1000, nextId: 'examinebooks-8' },
{ id: 'examinebooks-8', type: 'npc', text: 'For now, I\'d rather not risk opening one at random. Not until I know what I\'m dealing with.', delay: 1000, nextId: 'examinebooks-choices' },

// Conditional Choices
{ id: 'examinebooks-choices', type: 'choice', 
  onArrival: () => {
    const hasExaminedRunes = storyState.get('examinedRunes');
    
    let availableChoices;

    if (hasExaminedRunes) {
        availableChoices = [
            { text: 'Look around the room.', nextId: 'lookaround-1' },
            { text: 'Try to read the book.', nextId: 'tryreadbook-1' }
        ];
    } else {
        availableChoices = [
            { text: 'Inspect the runes.', nextId: 'examinerunes-1' },
            { text: 'Try to read the book.', nextId: 'tryreadbook-1' }
        ];
    }

    story.find(item => item.id === 'examinebooks-choices').choices = availableChoices;
  },
  choices: [], 
  delay: 1500 
},

// Try to Read the Book
{ id: 'tryreadbook-1', type: 'npc', text: 'Are you sure?', delay: 1000, nextId: 'tryreadbook-2' },
{ id: 'tryreadbook-2', type: 'npc', text: 'These books feel ... wrong. I don\'t think they want to be read.', delay: 1000, nextId: 'tryreadbook-3' },
{ id: 'tryreadbook-3', type: 'npc', text: 'I really have no idea what will happen if I open one. And I\'m not sure if I wanna know.', delay: 1000, nextId: 'tryreadbook-choices' },

// Conditional Choices
{ id: 'tryreadbook-choices', type: 'choice', 
  onArrival: () => {
    const hasExaminedRunes = storyState.get('examinedRunes');
    
    let availableChoices;

    if (hasExaminedRunes) {
        availableChoices = [
            { text: 'Look around the room.', nextId: 'lookaround-1' },
            { text: 'Open the book.', nextId: 'openbook-1' }
        ];
    } else {
        availableChoices = [
            { text: 'Go to the runes.', nextId: 'examinerunes-1' },
            { text: 'Open the book.', nextId: 'openbook-1' }
        ];
    }

    story.find(item => item.id === 'tryreadbook-choices').choices = availableChoices;
  },
  choices: [], 
  delay: 1500 
},

{ id: 'openbook-1', type: 'npc', text: 'Here goes nothing...', delay: 1000, nextId: 'openbook-2', onArrival: () => {
    storyState.set('readBook', true);
} },
{ id: 'openbook-2', type: 'npc', text: 'The pages—wait. The letters are moving. They\'re crawling across the page like ink bleeding in reverse.', delay: 1000, nextId: 'openbook-3' },
{ id: 'openbook-3', type: 'npc', text: 'My hands—why can\'t I move my hands?', delay: 1000, nextId: 'openbook-4' },
{ id: 'openbook-4', type: 'npc', text: 'The ink—it’s spreading. Crawling onto my fingers. No—into my fingers. I can feel it—inside me.', delay: 1000, nextId: 'openbook-5' },
{ id: 'openbook-5', type: 'npc', text: 'It burns—it’s changing something—', delay: 1000, nextId: 'openbook-6' },
{ id: 'openbook-6', type: 'npc', text: 'Voices? So many voices! I can’t tell where they’re coming from.', delay: 1000, nextId: 'openbook-7' },
{ id: 'openbook-7', type: 'npc', text: 'No... no, they’re saying something. The same word, over and over—', delay: 1000, nextId: 'openbook-choices' },
{ id: 'openbook-choices', type: 'choice', choices: [
    { text: 'Shut the book!', nextId: 'shutbook-1' },
    { text: 'Keep reading.', nextId: 'keepreading-1' }
], delay: 1500 },

{ id: 'keepreading-1', type: 'npc', text: "It's... a name. My name?", delay: 1000, nextId: 'keepreading-2' },
{ id: 'keepreading-2', type: 'npc', text: "No. No, that's not my name.", delay: 1000, nextId: 'keepreading-3' },
{ id: 'keepreading-3', type: 'npc', text: 'Stop. Stop saying that!', delay: 1000, nextId: 'keepreading-4' },
{ id: 'keepreading-4', type: 'npc', text: "It's wrong. It's all wrong—", delay: 1000, nextId: 'keepreading-5' },
{ id: 'keepreading-5', type: 'npc', text: 'Oh gods, I can feel them. They’re inside—inside me—', delay: 1000, nextId: 'keepreading-6' },
{ id: 'keepreading-6', type: 'npc', text: 'No, no, no, NO—', delay: 1000, nextId: 'keepreading-7' },
{ id: 'keepreading-7', type: 'story', text: 'You didn\'t even reach the end of the demo.', delay: 2000 },

{ id: 'shutbook-1', type: 'story', text: '(Wait 10 seconds.)', delay: 1000, nextId: 'shutbook-2' },
{ id: 'shutbook-2', type: 'npc', text: 'The voices are gone. The ink... it\'s fading.', delay: 1000, nextId: 'shutbook-3' },
{ id: 'shutbook-3', type: 'npc', text: 'I don\'t know what that was, but I don\'t want to try again.', delay: 1000, nextId: 'shutbook-4' },
{ id: 'shutbook-4', type: 'npc', text: 'Alright, give me a few minutes to catch my breath.', delay: 1000, nextId: 'shutbook-5' },
{ id: 'shutbook-5', type: 'story', text: '(Wait 5 minutes.)', delay: 1000, nextId: 'shutbook-continue' },
{ id: 'shutbook-continue', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasExaminedRunes = storyState.get('examinedRunes');
    const hasLookedAround = storyState.get('lookedaroundtheroom');
    const hasReturnedToRunes = storyState.get('returnedtoRunes');

    let nextId;

    if (!hasExaminedRunes) {
        nextId = 'examinerunes-1';
    } else if (hasLookedAround && hasReturnedToRunes) {
        nextId = 'stepintothecircle-1';
    } else if (hasLookedAround && !hasReturnedToRunes) {
        nextId = 'returntotherunes-1';
    } else {
        nextId = 'lookaround-1';
    }

    story.find(item => item.id === 'shutbook-continue').nextId = nextId;
} },

// Examine the Runes
{ id: 'examinerunes-1', type: 'npc', text: 'Alright, now for the runes...', delay: 1000, nextId: 'examinerunes-2', onArrival: () => {
    storyState.set('examinedRunes', true);
} },
{ id: 'examinerunes-2', type: 'story', text: '(Waiting for 5 minutes...)', delay: 1000, nextId: 'examinerunes-3' },
{ id: 'examinerunes-3', type: 'npc', text: 'They\'re drawn in silver dust, spread in a perfect circle across the floor. But the strange part? They\'re shifting.', delay: 1000, nextId: 'examinerunes-4' },
{ id: 'examinerunes-4', type: 'npc', text: 'I\'ll look away for a second, and when I glance back, they\'ve changed. Just slightly, but enough to notice.', delay: 1000, nextId: 'examinerunes-5' },
{ id: 'examinerunes-5', type: 'npc', text: 'I don\'t know if that means they\'re active... or if they\'re reacting to me.', delay: 1000, nextId: 'examinerunes-conditional' },
{ id: 'examinerunes-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasReadBook = storyState.get('readBook');
    const hasExaminedBooks = storyState.get('examinedBooks');

    let nextId;
    let text;

    if (hasReadBook) {
        text = 'The symbols are pulsing... faster than before. I don\'t like this.\n\nI swear, the shapes—they\'re forming the same letters that burned into my hands from the book.';
    } else if (hasExaminedBooks) {
        text = 'I don\'t know if this is connected, but the books gave me the same feeling—like they were watching me.\n\nIf the books are waiting for something, maybe these runes are, too. I just don\'t know what they want.';
    } else {
        text = 'The runes feel... charged. Like they\'ve been waiting for something. I don\'t know if stepping into them is a good idea, but I don\'t see many other options.';
    }

    story.find(item => item.id === 'examinerunes-conditional').text = text;
    story.find(item => item.id === 'examinerunes-conditional').nextId = 'examinerunes-choices';
} },
{ id: 'examinerunes-choices', type: 'choice', choices: [
    { text: 'Step into the circle.', nextId: 'stepintothecircle-1' },
    { text: 'Leave them alone.', nextId: 'leavethemalone-1' }
], delay: 1500 },

{ id: 'leavethemalone-1', type: 'npc', text: 'Yeah... I think that\'s the right call.', delay: 1000, nextId: 'leavethemalone-2' },
{ id: 'leavethemalone-2', type: 'npc', text: 'There\'s something off about these runes. Magic, obviously, but not the kind I want to mess with blindly.', delay: 1000, nextId: 'leavethemalone-conditional' },
{ id: 'leavethemalone-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasExaminedBooks = storyState.get('examinedBooks');
    const hasReadBook = storyState.get('readBook');

    let nextId;
    let text;

    if (hasExaminedBooks) {
        text = 'I don\'t like the feeling they\'re giving me.\n\nMaybe I need to figure out more about this place first. There has to be some kind of clue hidden here.';
        nextId = 'leavethemalone-choices-books';
    } else if (hasReadBook) {
        text = 'I\'m going to look around for anything else useful.';
        nextId = 'lookaround-1'; // Automatically continues
    } else {
        text = 'I don\'t like the way they shift when I\'m not looking. It feels like they\'re waiting for me to step in, like they want something from me.\n\nMaybe I need to figure out more about this place first. There has to be some kind of clue hidden here.';
        nextId = 'leavethemalone-choices-default';
    }

    story.find(item => item.id === 'leavethemalone-conditional').text = text;
    story.find(item => item.id === 'leavethemalone-conditional').nextId = nextId;
} },
{ id: 'leavethemalone-choices-books', type: 'choice', choices: [
    { text: 'Return to the books.', nextId: 'examinebooks-1' },
    { text: 'Look around the room.', nextId: 'lookaround-1' }
], delay: 1500 },
{ id: 'leavethemalone-choices-default', type: 'choice', choices: [
    { text: 'Examine the books.', nextId: 'examinebooks-1' },
    { text: 'Look around the room.', nextId: 'lookaround-1' }
], delay: 1500 },

{ id: 'returntobooks-1', type: 'npc', text: '', delay: 1000, onArrival: () => {
    storyState.set('returnedtoBooks', true);
    
    const hasReturnedToBooks = storyState.get('returnedtoBooks');
    const hasReturnedToRunes = storyState.get('returnedtoRunes');

    let text;
    let nextId;

    if (hasReturnedToBooks && !hasReturnedToRunes) {
        text = 'Well... here we are again. Something still feels very wrong though...\n\nWhat do you think?';
        nextId = 'returntobooks-choices-1';
    } else if (hasReturnedToBooks && hasReturnedToRunes) {
        text = 'Well... here we are again. Something still feels very wrong though...\n\nWhat do you think?';
        nextId = 'returntobooks-choices-2';
    } else {
        text = 'These books feel ... wrong. I don\'t think they want to be read.\n\nI really have no idea what will happen if I open one. And I\'m not sure if I wanna know.\n\nWhat do you think?';
        nextId = 'returntobooks-choices-3';
    }

    story.find(item => item.id === 'returntobooks-1').text = text;
    story.find(item => item.id === 'returntobooks-1').nextId = nextId;
} },
{ id: 'returntobooks-choices-1', type: 'choice', choices: [
    { text: 'Open the book.', nextId: 'openbook-1' },
    { text: 'Return to the runes.', nextId: 'returntotherunes-1' }
], delay: 1500 },
{ id: 'returntobooks-choices-2', type: 'choice', choices: [
    { text: 'Open the book.', nextId: 'openbook-1' },
    { text: 'Back to the runes.', nextId: 'stepintothecircle-1' }
], delay: 1500 },
{ id: 'returntobooks-choices-3', type: 'choice', choices: [
    { text: 'Go look around the room.', nextId: 'lookaround-1' },
    { text: 'Open the book.', nextId: 'openbook-1' }
], delay: 1500 },

// Look Around the Room
{ id: 'lookaround-1', type: 'npc', text: 'Give me a few minutes.', delay: 1000, nextId: 'lookaround-2', onArrival: () => {
    storyState.set('lookedaroundtheroom', true);
} },
{ id: 'lookaround-2', type: 'story', text: '(Wait for 10 minutes)', delay: 1000, nextId: 'lookaround-3' },
{ id: 'lookaround-3', type: 'npc', text: 'Well. That was wildly productive.', delay: 1000, nextId: 'lookaround-4' },
{ id: 'lookaround-4', type: 'npc', text: 'There are some cupboards built into the shelves, so I thought, hey, maybe there\'s something useful in there!', delay: 1000, nextId: 'lookaround-5' },
{ id: 'lookaround-5', type: 'npc', text: 'And I was right—if you consider dust useful. Lots of dust. Probably magical, since wizards seem to hoard that kind of thing.', delay: 1000, nextId: 'lookaround-6' },
{ id: 'lookaround-6', type: 'npc', text: 'Other treasures include: a quill with no ink, a few shattered vials, and what I can only assume was once bread, but now looks more like an arcane experiment gone horribly wrong.', delay: 1000, nextId: 'lookaround-7' },
{ id: 'lookaround-7', type: 'npc', text: 'Oh, and the grand prize? A brass telescope! Which would be great... if I had anything to look at.', delay: 1000, nextId: 'lookaround-8' },
{ id: 'lookaround-8', type: 'npc', text: 'But apparently, I do have a window. Didn\'t notice it before—it\'s high up, just a narrow slit in the stone.', delay: 1000, nextId: 'lookaround-9' },
{ id: 'lookaround-9', type: 'npc', text: 'And what\'s outside, you ask? A breathtaking view of absolutely nothing. Just swirling fog, stretching on forever. No sky, no ground, no landmarks. Just mist.', delay: 1000, nextId: 'lookaround-10' },
{ id: 'lookaround-10', type: 'npc', text: 'Looking at it gives me a very bad feeling. But hey, at least I now know that if I ever want to admire infinite void, I have a front-row seat!', delay: 1000, nextId: 'lookaround-11' },
{ id: 'lookaround-11', type: 'npc', text: 'No clues, no secret exits, no sudden bursts of insight. If there\'s something useful in here, it\'s doing an excellent job of hiding from me.', delay: 1000, nextId: 'lookaround-conditional' },

// Conditional Next Steps
{ id: 'lookaround-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasExaminedRunes = storyState.get('examinedRunes');
    const hasExaminedBooks = storyState.get('examinedBooks');
    const hasReadBook = storyState.get('readBook');

    let nextId;
    let availableChoices;

    if (hasExaminedRunes && !hasExaminedBooks) {
        availableChoices = [
            { text: 'Return to the runes.', nextId: 'returntotherunes-1' },
            { text: 'Examine the books.', nextId: 'examinebooks-1' }
        ];
    } else if (hasExaminedRunes && hasExaminedBooks && !hasReadBook) {
        availableChoices = [
            { text: 'Return to the runes.', nextId: 'returntotherunes-1' },
            { text: 'Return to the books.', nextId: 'returntobooks-1' }
        ];
    } else if (!hasExaminedRunes && hasExaminedBooks) {
        availableChoices = [
            { text: 'Examine the runes.', nextId: 'examinerunes-1' },
            { text: 'Return to the books.', nextId: 'returntobooks-1' }
        ];
    } else if (!hasExaminedRunes && hasReadBook) {
        nextId = 'examinerunes-1'; // Automatically continues
    } else if (hasExaminedRunes && hasReadBook) {
        nextId = 'returntotherunes-1'; // Automatically continues
    }

    if (availableChoices) {
        story.find(item => item.id === 'lookaround-conditional').type = 'choice';
        story.find(item => item.id === 'lookaround-conditional').choices = availableChoices;
    } else {
        story.find(item => item.id === 'lookaround-conditional').nextId = nextId;
    }
} },

// Return to the Runes
{ id: 'returntotherunes-1', type: 'npc', text: 'Alright, back to the runes...', delay: 1000, nextId: 'returntotherunes-2', onArrival: () => {
    storyState.set('returnedtoRunes', true);
} },
{ id: 'returntotherunes-2', type: 'story', text: '(Wait 30 seconds)', delay: 1000, nextId: 'returntotherunes-3' },
{ id: 'returntotherunes-3', type: 'npc', text: 'They\'re still the same—drawn in silver dust, shifting when I look away, pulsing ever so slightly.', delay: 1000, nextId: 'returntotherunes-4' },
{ id: 'returntotherunes-4', type: 'npc', text: 'I don\'t know if they\'re calling to me or warning me.', delay: 1000, nextId: 'returntotherunes-conditional' },

// Conditional Text & Choices
{ id: 'returntotherunes-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasReadBook = storyState.get('readBook');
    const hasExaminedBooks = storyState.get('examinedBooks');

    let text;
    let availableChoices;

    if (hasReadBook) {
        text = 'I swear they\'re moving even faster than before. Like they recognize me.\n\nI don\'t like this.';
        availableChoices = [
            { text: 'Step into the circle.', nextId: 'stepintothecircle-1' }
        ];
    } else if (hasExaminedBooks && !hasReadBook) {
        text = 'Looking at them again, I can\'t shake the feeling they\'re connected to the books somehow. Like different pieces of the same puzzle.';
        availableChoices = [
            { text: 'Return to the books.', nextId: 'returntobooks-1' },
            { text: 'Step into the circle.', nextId: 'stepintothecircle-1' }
        ];
    }

    story.find(item => item.id === 'returntotherunes-conditional').text = text;
    story.find(item => item.id === 'returntotherunes-conditional').type = 'choice';
    story.find(item => item.id === 'returntotherunes-conditional').choices = availableChoices;
} },

// Step into the Circle
{ id: 'stepintothecircle-1', type: 'npc', text: 'Alright. Here we go.', delay: 1000, nextId: 'stepintothecircle-2' },
{ id: 'stepintothecircle-2', type: 'npc', text: 'I\'m in the circle.', delay: 1000, nextId: 'stepintothecircle-conditional' },

// Conditional Text
{ id: 'stepintothecircle-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasReadBook = storyState.get('readBook');

    let text;

    if (hasReadBook) {
        text = 'I feel the runes ... flare to life. The light isn\'t soft anymore—it\'s blinding.\n\nI feel something... watching me. No, not watching—recognizing me.\n\nI have a bad feeling about this.';
    } else {
        text = 'The runes are starting to glow brighter. The light pulses, slow and steady. Sort of like ... no, exactly like my heartbeat.';
    }

    story.find(item => item.id === 'stepintothecircle-conditional').text = text;
    story.find(item => item.id === 'stepintothecircle-conditional').nextId = 'stepintothecircle-choices';
} },

// Choices
{ id: 'stepintothecircle-choices', type: 'choice', choices: [
    { text: 'Stay still and wait.', nextId: 'staystill-1' },
    { text: 'Step out of the circle.', nextId: 'stepout-1' }
], delay: 1500 },

// Step Out of the Circle
{ id: 'stepout-1', type: 'npc', text: 'Alright, I\'m done with this. I\'m stepping out.', delay: 1000, nextId: 'stepout-wait1' },

// 5-second wait
{ id: 'stepout-wait1', type: 'story', text: '(Wait 5 seconds)', delay: 1000, nextId: 'stepout-2' },

{ id: 'stepout-2', type: 'npc', text: '...No.', delay: 1000, nextId: 'stepout-3' },
{ id: 'stepout-3', type: 'npc', text: 'I—I can\'t.', delay: 1000, nextId: 'stepout-4' },
{ id: 'stepout-4', type: 'npc', text: 'My legs won\'t move. It\'s like something\'s holding me in place. Not physically—no chains, no hands gripping me—but I cannot step out.', delay: 1000, nextId: 'stepout-conditional' },

// Conditional Text
{ id: 'stepout-conditional', type: 'npc', text: '', delay: 1000, onArrival: () => {
    const hasReadBook = storyState.get('readBook');

    let text;

    if (hasReadBook) {
        text = 'This feeling… it\'s the same as the book. The same dark force, the same pull, the same whispering pressure under my skin.\n\nBut it\'s not hurting me this time.\n\nIt\'s... guiding me. Holding me still. Like it wants something from me.';
    } else {
        text = 'It\'s not pulling me down. It\'s just... holding me. Like it\'s waiting for something.';
    }

    story.find(item => item.id === 'stepout-conditional').text = text;
    story.find(item => item.id === 'stepout-conditional').nextId = 'staystill-3';
} },

{ id: 'staystill-1', type: 'npc', text: 'Alright... I\'m not moving.', delay: 1000, nextId: 'staystill-2' },
{ id: 'staystill-2', type: 'npc', text: 'The runes are pulsing faster. Not in time with my heartbeat anymore—ahead of it. Like they\'re pulling something from me.', delay: 1000, nextId: 'staystill-3' },
{ id: 'staystill-3', type: 'npc', text: 'Wait...', delay: 1000, nextId: 'staystill-4' },
{ id: 'staystill-4', type: 'npc', text: 'The barrier! It\'s... it\'s gone.', delay: 1000, nextId: 'staystill-5' },
{ id: 'staystill-5', type: 'npc', text: 'The shimmering light in front of the staircase just... vanished. Like it was never there.', delay: 1000, nextId: 'staystill-6' },
{ id: 'staystill-6', type: 'npc', text: 'Damn, I feel... drained.', delay: 1000, nextId: 'staystill-wait1' },
{ id: 'staystill-wait1', type: 'story', text: '(Wait 10 seconds)', delay: 1000, nextId: 'staystill-7' },
{ id: 'staystill-7', type: 'npc', text: 'I don\'t know what just happened, but I know this—I can move forward now.', delay: 1000, nextId: 'staystill-8' },
{ id: 'staystill-8', type: 'npc', text: 'The staircase spirals in both directions.', delay: 1000, nextId: 'staystill-9' },
{ id: 'staystill-9', type: 'npc', text: 'I don\'t know which is safer. Or if safe is even an option.', delay: 1000, nextId: 'staystill-wait2' },
{ id: 'staystill-wait2', type: 'story', text: '(Wait 5 seconds)', delay: 1000, nextId: 'staystill-10' },
{ id: 'staystill-10', type: 'npc', text: '…That\'s strange.', delay: 1000, nextId: 'staystill-11' },
{ id: 'staystill-11', type: 'npc', text: 'There\'s a smell coming from below. Faint, but… warm? Like something cooking. Spiced bread, maybe? Or herbs steeping in hot water.', delay: 1000, nextId: 'staystill-12' },
{ id: 'staystill-12', type: 'npc', text: 'It doesn\'t make sense. This place feels abandoned, but that scent… it\'s fresh.', delay: 1000, nextId: 'staystill-13' },
{ id: 'staystill-13', type: 'npc', text: 'What do you think I should do?', delay: 1000, nextId: 'staircase-choice' },

// Ending choices
{ id: 'staircase-choice', type: 'choice', choices: [
    { text: 'Go up.', nextId: 'end-of-demo' },
    { text: 'Go down.', nextId: 'end-of-demo' }
], delay: 1500 },

{ id: 'end-of-demo', type: 'story', text: 'End of the demo. Thank you for playtesting!', delay: 1000, nextId: '' },


];

	// Typewriter Effect
function displayMagicalText(text, type = 'story', callback) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);

    const textSpan = document.createElement('span');
    textSpan.classList.add('message-text');
    messageElement.appendChild(textSpan);

    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');
    messageWrapper.appendChild(messageElement);

    chatContainer.appendChild(messageWrapper);

    // Ensure smooth scrolling to bottom
    const scrollToBottom = () => {
        const scrollHeight = chatContainer.scrollHeight;
        const maxScroll = chatContainer.scrollHeight - chatContainer.clientHeight;
        chatContainer.scrollTo({
            top: maxScroll,
            behavior: 'smooth'
        });
    };

    // Initial scroll
    scrollToBottom();

    // Make the div full width and fully visible immediately
    messageElement.style.width = '100%';
    messageElement.style.opacity = '1';

    let index = 0;
    const chars = text.split('');
    
    // Pre-create all spans with initial opacity 0
    chars.forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.opacity = '0';
        charSpan.style.transition = 'opacity 0.3s ease-in-out';
        textSpan.appendChild(charSpan);
    });

    const spans = textSpan.children;
    
    function revealNextCharacter() {
        if (index < spans.length) {
            spans[index].style.opacity = '1';
            
            // Slightly fade the previous character for a trailing effect
            if (index > 0) {
                spans[index - 1].style.opacity = '0.95';
            }
            
            index++;
            
            // Adjust timing based on punctuation
            let delay = 30;
            if ('.!?'.includes(chars[index - 1])) {
                delay = 200; // Longer pause at punctuation
            } else if (',;:'.includes(chars[index - 1])) {
                delay = 100; // Medium pause at other punctuation
            } else if (chars[index - 1] === ' ') {
                delay = 40; // Slight pause at spaces
            }
            
            // Scroll to bottom after each character
            scrollToBottom();
            
            requestAnimationFrame(() => {
                setTimeout(revealNextCharacter, delay);
            });
        } else if (callback) {
            // Final scroll after all characters are revealed
            scrollToBottom();
            callback();
        }
    }

    // Start the animation
    requestAnimationFrame(revealNextCharacter);
}

    // Function to load and display story elements by ID
    function loadStoryById(id) {
        const message = story.find(item => item.id === id);
        if (!message) return;

        // Execute onArrival function if it exists
        if (message.onArrival && typeof message.onArrival === 'function') {
            message.onArrival();
        }

        if (message.type === 'choice') {
            setTimeout(() => {
                if (message.choices && Array.isArray(message.choices)) {
                    displayChoices(message.choices);
                } else {
                    console.error('Invalid choices format:', message);
                }
            }, message.delay || 1000);
            return;
        }

        // Process any variables in the text
        const processedText = storyState.processText(message.text || '');

        if (message.type === 'end') {
            displayMagicalText(processedText, 'story', () => {
                console.log('End of the story reached.');
            });
            return;
        }

        setTimeout(() => {
            displayMagicalText(processedText, message.type, () => {
                if (message.nextId) loadStoryById(message.nextId);
            });
        }, message.delay || 1000);
    }

    // Function to display player choices
    function displayChoices(choices) {
        const choiceContainer = document.createElement('div');
        choiceContainer.classList.add('choice-container');
        
        // Add two-choices class if exactly two choices
        if (choices.length === 2) {
            choiceContainer.classList.add('two-choices');
        }

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('player-choice');
            button.textContent = storyState.processText(choice.text);
            button.onclick = () => handleChoiceSelection(button, choice);
            choiceContainer.appendChild(button);
        });

        chatContainer.appendChild(choiceContainer);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Function to handle choice selection with variable effects
    function handleChoiceSelection(selectedButton, choice) {
        const buttons = document.querySelectorAll('.player-choice');
        buttons.forEach(button => {
            button.classList.add('disabled');
            button.disabled = true;
            if (button === selectedButton) {
                button.classList.remove('disabled');
                button.classList.add('selected');
                
                // Execute choice effects if they exist
                if (choice.effect && typeof choice.effect === 'function') {
                    choice.effect();
                }
                
                loadStoryById(choice.nextId);
            }
        });
    }

    // Example of how to use variables in your story:
    /*
    {
        id: 'trust_check',
        type: 'choice',
        text: 'Your trust level is $trust',
        choices: [
            {
                text: 'Increase trust',
                nextId: 'next_scene',
                effect: () => storyState.increment('trust')
            },
            {
                text: 'Set name to Alice',
                nextId: 'next_scene',
                effect: () => storyState.set('name', 'Alice')
            }
        ]
    }
    */

    // Start the story at the first step
    loadStoryById('start');
});


// Autoplay Music
document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.2; // Set the volume (0.0 to 1.0)
    
    // Attempt to play the music immediately
    function playBackgroundMusic() {
        backgroundMusic.play().catch(() => {
            console.log('Autoplay prevented. Waiting for user interaction...');
        });
    }
    
    // Add event listeners for any interaction
    window.addEventListener('click', playBackgroundMusic, { once: true });
    window.addEventListener('touchstart', playBackgroundMusic, { once: true });

    // Ensure music starts if already allowed
    playBackgroundMusic();
});

