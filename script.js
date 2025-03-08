document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

       // Story
    const story = [
        
		// Chapter 1
		
		// Introductions
		{ id: 'start', type: 'story', text: 'A faint, disoriented voice emerges.', delay: 1000, nextId: 'intro2' },
		{ id: 'intro2', type: 'npc', text: 'Hello? Is… is someone there?', delay: 1000, nextId: 'intro3' },
		{ id: 'intro3', type: 'npc', text: 'Please, if you can hear me, say something.', delay: 1000, nextId: 'introductions' },
		{ id: 'introductions', type: 'choice', choices: [
    { text: 'Who are you?', nextId: 'whoareyou-1' },
    { text: 'I hear you.', nextId: 'ihearyou-1' }
], delay: 1500 },
		
		// Choice: Who are you?
		{ id: 'whoareyou-1', type: 'npc', text: 'I... I don’t know. My mind is a haze. I can\'t remember anything, not even my own name.', delay: 1000, nextId: 'whoareyou-2' },
{ id: 'whoareyou-2', type: 'npc', text: 'All I know is that I’m trapped somewhere.', delay: 1000, nextId: 'whoareyou-3' },
{ id: 'whoareyou-3', type: 'npc', text: 'It looks like the top of a tower. There are books, strange symbols...', delay: 1000, nextId: 'whoareyou-4' },
{ id: 'whoareyou-4', type: 'npc', text: 'I think it might be a wizard’s tower.', delay: 1000, nextId: 'whoareyou-5' },
{ id: 'whoareyou-5', type: 'npc', text: 'Please, you have to help me.', delay: 1000, nextId: 'whoareyou-choices' },
{ id: 'whoareyou-choices', type: 'choice', choices: [
    { text: 'Where are you?', nextId: 'howcanihelpyou-1' },
    { text: 'What do you remember?', nextId: 'whatdoyouremember-1' }
], delay: 1500 },
		
// Choice: I hear you
{ id: 'ihearyou-1', type: 'npc', text: 'Oh, thank the gods! I thought I was alone.', delay: 1000, nextId: 'ihearyou-2' },
{ id: 'ihearyou-2', type: 'npc', text: 'I... I don’t know where I am. Or who I am. Everything is foggy.', delay: 1000, nextId: 'ihearyou-3' },
{ id: 'ihearyou-3', type: 'npc', text: 'I found this stone... I think it’s enchanted.', delay: 1000, nextId: 'ihearyou-4' },
{ id: 'ihearyou-4', type: 'npc', text: 'It’s letting me speak to you, but I don’t know how. I just need help.', delay: 1000, nextId: 'ihearyou-choices' },

{ id: 'ihearyou-choices', type: 'choice', choices: [
    { text: 'What kind of stone?', nextId: 'whatkindofstone-1' },
    { text: 'How can I help you?', nextId: 'howcanihelpyou-1' }
], delay: 1500 },
		
		// Choice: What kind of stone
{ id: 'whatkindofstone-1', type: 'npc', text: 'It’s small and smooth, with a faint blue glow. There are runes carved into it—nothing I recognize, but they seem... ancient.', delay: 1000, nextId: 'whatkindofstone-2' },
{ id: 'whatkindofstone-2', type: 'npc', text: 'When I hold it, I feel this pull, like it’s connecting me to you. Maybe it’s a sending stone? But I thought those could only send short messages...', delay: 1000, nextId: 'whatkindofstone-3' },
{ id: 'whatkindofstone-3', type: 'npc', text: 'I don’t know. All I know is that you’re the only voice I can hear, and I need help.', delay: 1000, nextId: 'whatkindofstone-choices' },

{ id: 'whatkindofstone-choices', type: 'choice', choices: [
    { text: 'What do you see?', nextId: 'seemagical-1' },
    { text: 'What do you remember?', nextId: 'whatdoyouremember-1' }
], delay: 1500 },
		
		// Choice: How can I help you?
{ id: 'howcanihelpyou-1', type: 'npc', text: 'I’m in a room. Round walls, stone floors, an old, dusty window. It feels... wrong. Like I shouldn’t be here.', delay: 1000, nextId: 'howcanihelpyou-2' },
{ id: 'howcanihelpyou-2', type: 'npc', text: 'I... I think I’m trapped.', delay: 1000, nextId: 'howcanihelpyou-3' },
{ id: 'howcanihelpyou-3', type: 'npc', text: 'Can you help me figure out what’s going on?', delay: 1000, nextId: 'howcanihelpyou-choices' },

{ id: 'howcanihelpyou-choices', type: 'choice', choices: [
    { text: 'Describe the room.', nextId: 'seemagical-1' },
    { text: 'Do you see any doors or stairs?', nextId: 'doorsstairs-1' }
], delay: 1500 },
		
		// Choice: Do you see any doors?
{ id: 'doorsstairs-1', type: 'npc', text: 'There’s a single wooden door, iron-bound, and it won’t budge. I’ve tried everything.', delay: 1000, nextId: 'doorsstairs-2' },
{ id: 'doorsstairs-2', type: 'npc', text: 'There’s also a staircase leading down, but a shimmering barrier blocks the way.', delay: 1000, nextId: 'doorsstairs-choices' },

{ id: 'doorsstairs-choices', type: 'choice', choices: [
    { text: 'Try to break the barrier.', nextId: 'breakbarrier-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },

		// Choice: Describe the room
{ id: 'seemagical-1', type: 'npc', text: 'There’s a window, but all I can see is an endless fog. I can’t tell if it’s day or night.', delay: 1000, nextId: 'seemagical-2' },
{ id: 'seemagical-2', type: 'npc', text: 'Candles are floating near the ceiling. They’re giving off a soft, blue light, but the ceiling is way too high to reach.', delay: 1000, nextId: 'seemagical-3' },
{ id: 'seemagical-3', type: 'npc', text: 'There are strange symbols carved into the floor. They seem to shift when I’m not looking directly at them.', delay: 1000, nextId: 'seemagical-4' },
{ id: 'seemagical-4', type: 'npc', text: 'I see some bookshelves. Might be worth a look.', delay: 1000, nextId: 'seemagical-5' },
{ id: 'seemagical-5', type: 'npc', text: 'There’s also a staircase leading down, but it’s blocked by a shimmering barrier. It looks like a wall of light, pulsing with faint runes.', delay: 1000, nextId: 'seemagical-6' },
{ id: 'seemagical-6', type: 'npc', text: 'What should I do?', delay: 1000, nextId: 'seemagical-choices' },

{ id: 'seemagical-choices', type: 'choice', choices: [
    { text: 'Try to break the barrier.', nextId: 'breakbarrier-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' },
	{ text: 'Check the bookshelves.', nextId: 'examinebooks-1' }
], delay: 1500 },

// Choice: What do you remember?
{ id: 'whatdoyouremember-1', type: 'npc', text: 'I... I remember darkness. And a voice. I think it was chanting.', delay: 1000, nextId: 'whatdoyouremember-2' },
{ id: 'whatdoyouremember-2', type: 'npc', text: 'There was this... this sensation, like falling, but I couldn\'t move. Everything was cold.', delay: 1000, nextId: 'whatdoyouremember-3' },
{ id: 'whatdoyouremember-3', type: 'npc', text: 'Then I woke up here. The air feels thick, almost heavy. I don\'t think this is a normal place.', delay: 1000, nextId: 'whatdoyouremember-4' },
{ id: 'whatdoyouremember-4', type: 'npc', text: 'Do you think I was... kidnapped? Or maybe enchanted?', delay: 1000, nextId: 'whatdoyouremember-5' },
{ id: 'whatdoyouremember-5', type: 'npc', text: 'Gods, I hope I\'m not cursed.', delay: 1000, nextId: 'whatdoyouremember-choices' },

{ id: 'whatdoyouremember-choices', type: 'choice', choices: [
    { text: 'Do you see anything magical around you?', nextId: 'seemagical-1' },
    { text: 'Can you find anything that might help?', nextId: 'findhelp-1' }
], delay: 1500 },
		
		// Choice: Do you see anything magical around you?
{ id: 'seemagical-1', type: 'npc', text: 'Besides the stone I\'m holding? Yes. The place is filled with magical stuff.', delay: 1000, nextId: 'seemagical-2' },
{ id: 'seemagical-2', type: 'npc', text: 'There are books on every shelf. Some of them are glowing, and others are bound in metal.', delay: 1000, nextId: 'seemagical-3' },
{ id: 'seemagical-3', type: 'npc', text: 'There\'s a circle on the floor, made of silver dust and strange symbols. It gives off this faint hum, almost like it\'s alive.', delay: 1000, nextId: 'seemagical-4' },
{ id: 'seemagical-4', type: 'npc', text: 'Should I... should I touch anything?', delay: 1000, nextId: 'seemagical-choices' },

{ id: 'seemagical-choices', type: 'choice', choices: [
    { text: 'Examine the books.', nextId: 'examinebooks-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },
		
		// Choice: Can you find anything that might help?
{ id: 'findhelp-1', type: 'npc', text: 'There\'s a mirror on the wall—ornate, with twisting vines and tiny gemstones embedded in the frame.', delay: 1000, nextId: 'findhelp-2' },
{ id: 'findhelp-2', type: 'npc', text: 'When I look into it, the face staring back feels... wrong. Like it should be someone else\'s reflection, not mine.', delay: 1000, nextId: 'findhelp-3' },
{ id: 'findhelp-3', type: 'npc', text: 'I think I\'m human. No, wait—my ears... they\'re slightly pointed. Maybe I\'m a half-elf? Everything feels jumbled, like pieces of a puzzle that don\'t quite fit.', delay: 1000, nextId: 'findhelp-4' },
{ id: 'findhelp-4', type: 'npc', text: 'My clothes are worn, practical. There\'s a faint scar above my eyebrow. I wish I could remember where it came from.', delay: 1000, nextId: 'findhelp-5' },
{ id: 'findhelp-5', type: 'npc', text: 'What should I do?', delay: 1000, nextId: 'findhelp-choices' },

{ id: 'findhelp-choices', type: 'choice', choices: [
    { text: 'Touch the mirror.', nextId: 'touchmirror-1' },
    { text: 'Look away.', nextId: 'findwayout-1' }
], delay: 1500 },

		// Choice: Touch the mirror
{ id: 'touchmirror-1', type: 'npc', text: 'All right... here goes nothing.', delay: 1000, nextId: 'touchmirror-2' },
{ id: 'touchmirror-2', type: 'npc', text: 'The mirror feels warm. No, not warm—alive. The vines on the frame... they\'re moving. Gods, they\'re twisting around my hand!', delay: 1000, nextId: 'touchmirror-3' },
{ id: 'touchmirror-3', type: 'npc', text: 'I... I see something. A memory. There\'s a forest, dark and misty. I\'m running...', delay: 1000, nextId: 'touchmirror-4' },
{ id: 'touchmirror-4', type: 'npc', text: 'Then... pain. Bright light. And now... here.', delay: 1000, nextId: 'touchmirror-5' },
{ id: 'touchmirror-5', type: 'npc', text: 'What does this mean!?', delay: 1000, nextId: 'touchmirror-choices' },

{ id: 'touchmirror-choices', type: 'choice', choices: [
    { text: 'Focus on the memory.', nextId: 'focusmemory-1' },
    { text: 'Pull away!', nextId: 'pullaway-1' }
], delay: 1500 },

		// Choice: Focus on the memory
{ id: 'focusmemory-1', type: 'npc', text: 'I\'m trying. The forest... it\'s fading. The trees are turning into shadows. No, wait—everything is.', delay: 1000, nextId: 'focusmemory-2' },
{ id: 'focusmemory-2', type: 'npc', text: 'The mirror\'s light is dimming. The vines have gone still. It\'s... dead. Whatever magic it had, it\'s gone now.', delay: 1000, nextId: 'focusmemory-3' },
{ id: 'focusmemory-3', type: 'npc', text: 'My hand is cold where I touched it. Like it drew something out of me.', delay: 1000, nextId: 'focusmemory-4' },
{ id: 'focusmemory-4', type: 'npc', text: 'I guess that\'s it. No more answers from the mirror.', delay: 1000, nextId: 'focusmemory-5' },
{ id: 'focusmemory-5', type: 'npc', text: 'What now?', delay: 1000, nextId: 'focusmemory-choices' },

{ id: 'focusmemory-choices', type: 'choice', choices: [
    { text: 'What else do you see?', nextId: 'seemagical-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },

		// Choice: Pull away from the mirror
{ id: 'pullaway-1', type: 'npc', text: 'Yeah, you\'re right. There\'s something wrong with it. The vines... they were moving, but now they look like ordinary carvings again.', delay: 1000, nextId: 'pullaway-2' },
{ id: 'pullaway-2', type: 'npc', text: 'I feel a chill where I touched the glass. Like it was trying to pull something out of me.', delay: 1000, nextId: 'pullaway-3' },
{ id: 'pullaway-3', type: 'npc', text: 'The mirror\'s light has faded. It looks dull now, like any other piece of old furniture.', delay: 1000, nextId: 'pullaway-4' },
{ id: 'pullaway-4', type: 'npc', text: 'Okay. No more creepy mirrors. What should I do next?', delay: 1000, nextId: 'pullaway-choices' },

{ id: 'pullaway-choices', type: 'choice', choices: [
    { text: 'What else do you see?', nextId: 'seemagical-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },

		// Choice: Look away
{ id: 'findwayout-1', type: 'npc', text: 'Yeah, okay. No point staring at a creepy mirror. It’s not like it’ll tell me who I am.', delay: 1000, nextId: 'findwayout-2' },
{ id: 'findwayout-2', type: 'npc', text: 'I turned away, but... something happened. The mirror’s glow just... died. The vines that were moving before, they’re still now.', delay: 1000, nextId: 'findwayout-3' },
{ id: 'findwayout-3', type: 'npc', text: 'It’s like I broke whatever spell it had. I think it’s just a regular mirror now.', delay: 1000, nextId: 'findwayout-4' },
{ id: 'findwayout-4', type: 'npc', text: 'I guess that was my chance to find out more. Maybe it’s for the best—I didn’t exactly get a good feeling from it.', delay: 1000, nextId: 'findwayout-5' },
{ id: 'findwayout-5', type: 'npc', text: 'All right, what next?', delay: 1000, nextId: 'findwayout-choices' },

{ id: 'findwayout-choices', type: 'choice', choices: [
    { text: 'What else do you see?', nextId: 'seemagical-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },

		// Choice: Examine the books
{ id: 'examinebooks-1', type: 'npc', text: 'Okay, I’ll take a closer look.', delay: 1000, nextId: 'examinebooks-2' },
{ id: 'examinebooks-2', type: 'story', text: 'The mystery person is busy', delay: 5000, nextId: 'examinebooks-3' },
{ id: 'examinebooks-3', type: 'npc', text: 'These books are... strange. They are written in languages I don’t recognize.', delay: 1000, nextId: 'examinebooks-4' },
{ id: 'examinebooks-4', type: 'npc', text: 'There\'s this one book... It\'s like it\'s glowing. But it also isn\'t.', delay: 1000, nextId: 'examinebooks-5' },
{ id: 'examinebooks-5', type: 'npc', text: 'The cover is bound in leather, with a symbol on it—like an eye with a flame in the center.', delay: 1000, nextId: 'examinebooks-6' },
{ id: 'examinebooks-6', type: 'npc', text: 'Should I try to read it?', delay: 1000, nextId: 'examinebooks-choices' },

{ id: 'examinebooks-choices', type: 'choice', choices: [
    { text: 'Yes, read the book.', nextId: 'readbook-1' },
    { text: 'No, that sounds dangerous.', nextId: 'dangerousbook-1' }
], delay: 1500 },

		// Choice: Yes, read the book
{ id: 'readbook-1', type: 'npc', text: 'Okay... here goes nothing.', delay: 1000, nextId: 'readbook-2' },
{ id: 'readbook-2', type: 'npc', text: 'The pages feel warm, almost... alive. The letters are moving. No, not moving—shifting, like they’re trying to avoid my eyes.', delay: 1000, nextId: 'readbook-choices' },

{ id: 'readbook-choices', type: 'choice', choices: [
    { text: 'Keep trying.', nextId: 'keeptrying-1' },
    { text: 'Close the book.', nextId: 'dangerousbook-1' }
], delay: 1500 },

		// Choice: Keep trying
{ id: 'keeptrying-1', type: 'npc', text: 'Alright, I’ll push through.', delay: 1000, nextId: 'keeptrying-2' },
{ id: 'keeptrying-2', type: 'npc', text: 'The letters keep shifting, but I... I think I can make out some of the words.', delay: 1000, nextId: 'keeptrying-3' },
{ id: 'keeptrying-3', type: 'npc', text: 'I’m going to read it aloud—maybe it’ll help.', delay: 1000, nextId: 'keeptrying-4' },
{ id: 'keeptrying-4', type: 'npc', text: 'By flame and shadow, the eye shall pierce the veil. Truth lies where light bends, and shadows dance.', delay: 1000, nextId: 'keeptrying-5' },
{ id: 'keeptrying-5', type: 'npc', text: 'Hold on, something\'s happening. The symbols on the floor... they\'re glowing. I think they’re reacting to the book.', delay: 1000, nextId: 'keeptrying-6' },
{ id: 'keeptrying-6', type: 'npc', text: 'There’s a pulse—like a heartbeat. The room feels... smaller. Or maybe I’m getting pulled into something?', delay: 1000, nextId: 'keeptrying-7' },
{ id: 'keeptrying-7', type: 'npc', text: 'What should I do?', delay: 1000, nextId: 'keeptrying-choices' },

{ id: 'keeptrying-choices', type: 'choice', choices: [
    { text: 'Keep reading.', nextId: 'keepreading-1' },
    { text: 'Close the book.', nextId: 'dangerousbook-1' }
], delay: 1500 },

       // Choice: Keep reading
{ id: 'keepreading-1', type: 'npc', text: 'The book feels heavier now, like it’s pulling me in.', delay: 1000, nextId: 'keepreading-2' },
{ id: 'keepreading-2', type: 'npc', text: 'The letters are moving faster. It’s like they’re alive.', delay: 1000, nextId: 'keepreading-3' },
{ id: 'keepreading-3', type: 'npc', text: 'Through the eye of flame, the truth shall burn. The shadows hold what the light cannot reveal.', delay: 1000, nextId: 'keepreading-4' },
{ id: 'keepreading-4', type: 'npc', text: 'The symbols on the floor are pulsing in time with my heartbeat.', delay: 1000, nextId: 'keepreading-5' },
{ id: 'keepreading-5', type: 'npc', text: 'The room is spinning. Or... am I moving?', delay: 1000, nextId: 'keepreading-6' },
{ id: 'keepreading-6', type: 'npc', text: 'I don’t know. Everything feels... wrong.', delay: 1000, nextId: 'keepreading-7' },
{ id: 'keepreading-7', type: 'npc', text: 'I can’t stop now. I think I’m close to something. Should I keep going?', delay: 1000, nextId: 'keepreading-choices' },

{ id: 'keepreading-choices', type: 'choice', choices: [
    { text: 'Read to the end.', nextId: 'readtoend-1' },
    { text: 'Close the book!', nextId: 'dangerousbook-1' }
], delay: 1500 },

		// Choice: Read to the end
{ id: 'readtoend-1', type: 'npc', text: 'The letters are searing into my vision. They’re not just on the page anymore—they’re behind my eyes. Crawling under my skin.', delay: 1000, nextId: 'readtoend-2' },
{ id: 'readtoend-2', type: 'npc', text: 'Through shadow and flame, the eye opens. The vessel shall awaken, and the truth shall consume.', delay: 1000, nextId: 'readtoend-3' },
{ id: 'readtoend-3', type: 'npc', text: 'The symbols on the floor are burning white-hot. The light isn’t just bright—it’s devouring. Everything else is slipping away.', delay: 1000, nextId: 'readtoend-4' },
{ id: 'readtoend-4', type: 'npc', text: 'I can’t look away. I... I can’t move. My hands... they’re sinking into the book. The leather is swallowing my skin, stitching me into the pages.', delay: 1000, nextId: 'readtoend-5' },
{ id: 'readtoend-5', type: 'npc', text: 'It hurts. Gods, it hurts.', delay: 1000, nextId: 'readtoend-6' },
{ id: 'readtoend-6', type: 'npc', text: 'I thought you’d help me! Why aren’t you helping me!?', delay: 1000, nextId: 'readtoend-7' },
{ id: 'readtoend-7', type: 'npc', text: 'There’s something in my head. Cold fingers, twisting through my thoughts. Pulling things out. I can feel them...', delay: 1000, nextId: 'readtoend-8' },
{ id: 'readtoend-8', type: 'npc', text: 'So many eyes. They’re not just watching... they’re feeding.', delay: 1000, nextId: 'readtoend-9' },
{ id: 'readtoend-9', type: 'npc', text: 'They see everything. They see me. No... they see through me.', delay: 1000, nextId: 'readtoend-10' },
{ id: 'readtoend-10', type: 'npc', text: 'It’s cold. So cold. I can’t... I can’t feel my body. I can’t...', delay: 1000, nextId: 'readtoend-11' },
{ id: 'readtoend-11', type: 'story', text: 'The faint, disoriented voice disappears.', delay: 1000, nextId: 'readtoend-12' },
		{ id: 'readtoend-12', type: 'end', text: 'Forever.', delay: 1000, nextId: 'start' },

		// Choice: Close the book
{ id: 'dangerousbook-1', type: 'npc', text: 'Yeah, I think you’re right. There’s something... wrong about this book.', delay: 1000, nextId: 'dangerousbook-2' },
{ id: 'dangerousbook-2', type: 'npc', text: 'When I closed it, the glow faded. The room feels... lighter, somehow. Like I avoided something bad.', delay: 1000, nextId: 'dangerousbook-3' },
{ id: 'dangerousbook-3', type: 'npc', text: 'Okay, no more weird books. What should I do now?', delay: 1000, nextId: 'dangerousbook-choices' },

{ id: 'dangerousbook-choices', type: 'choice', choices: [
    { text: 'What else do you see?.', nextId: 'seemagical-1' },
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' }
], delay: 1500 },

		// Choice: Try to break the barrier
{ id: 'breakbarrier-1', type: 'npc', text: 'Alright. Gimme a sec.', delay: 1000, nextId: 'breakbarrier-2' },
{ id: 'breakbarrier-2', type: 'story', text: 'The mystery person is busy.', delay: 5000, nextId: 'breakbarrier-3' },
{ id: 'breakbarrier-3', type: 'npc', text: 'I made up my mind. I\'m going to touch it.', delay: 1000, nextId: 'breakbarrier-4' },
{ id: 'breakbarrier-4', type: 'npc', text: 'The barrier feels... warm? And there’s this weird tingle—like when you touch something with static electricity.', delay: 1000, nextId: 'breakbarrier-5' },
{ id: 'breakbarrier-5', type: 'npc', text: 'There\'s this... hum, almost like... Ow! — a spark shot out. I think it burned me.', delay: 1000, nextId: 'breakbarrier-6' },
{ id: 'breakbarrier-6', type: 'npc', text: 'Okay, that didn’t work. I need to try something else.', delay: 1000, nextId: 'breakbarrier-7' },
{ id: 'breakbarrier-7', type: 'npc', text: 'What now?', delay: 1000, nextId: 'breakbarrier-choices' },

{ id: 'breakbarrier-choices', type: 'choice', choices: [
    { text: 'Examine the symbols on the floor.', nextId: 'examinesymbols-1' },
    { text: 'Look around for anything magical.', nextId: 'seemagical-1' }
], delay: 1500 },

		// Choice: Examine the symbols
{ id: 'examinesymbols-1', type: 'npc', text: 'Alright...', delay: 1000, nextId: 'examinesymbols-2' },
{ id: 'examinesymbols-2', type: 'npc', text: 'The symbols… they’re all different. Runes, I think?', delay: 1000, nextId: 'examinesymbols-3' },
{ id: 'examinesymbols-3', type: 'npc', text: 'I feel like I should know what they mean, but fuck... My head...', delay: 1000, nextId: 'examinesymbols-choices' },

{ id: 'examinesymbols-choices', type: 'choice', choices: [
    { text: 'Step into the center.', nextId: 'stepintocircle-1' },
    { text: 'Touch one of the runes.', nextId: 'touchrune-1' }
], delay: 1500 },

		// Choice: Step into the center of the circle
{ id: 'stepintocircle-1', type: 'npc', text: 'Alright, standing in the middle now.', delay: 1000, nextId: 'stepintocircle-2' },
{ id: 'stepintocircle-2', type: 'npc', text: 'Oh! The runes are lighting up! All of them!', delay: 1000, nextId: 'stepintocircle-3' },
{ id: 'stepintocircle-3', type: 'npc', text: 'The barrier on the stairs is... flickering. I think it’s weakening!', delay: 1000, nextId: 'stepintocircle-choices' },

{ id: 'stepintocircle-choices', type: 'choice', choices: [
    { text: 'Step towards the barrier.', nextId: 'towardsbarrier-1' },
    { text: 'Stay where you are.', nextId: 'stayput-1' }
], delay: 1500 },

		// Choice: Touch one of the runes
{ id: 'touchrune-1', type: 'npc', text: 'Okay… I’m touching one of the runes. It’s cold to the touch.', delay: 1000, nextId: 'touchrune-2' },
{ id: 'touchrune-2', type: 'npc', text: 'Nothing seems to be happening.', delay: 1000, nextId: 'touchrune-choices' },

{ id: 'touchrune-choices', type: 'choice', choices: [
    { text: 'Try a different rune.', nextId: 'interactrunes-1' },
    { text: 'Step into the center.', nextId: 'stepintocircle-1' }
], delay: 1500 },

		// Choice: Step towards the barrier
{ id: 'towardsbarrier-1', type: 'npc', text: 'Okay, I’m moving closer.', delay: 1000, nextId: 'towardsbarrier-2' },
{ id: 'towardsbarrier-2', type: 'npc', text: 'The runes are pulsing, almost like they’re breathing. The whole room feels... charged?', delay: 1000, nextId: 'towardsbarrier-3' },
{ id: 'towardsbarrier-3', type: 'npc', text: 'The barrier is flickering. I think it’s working!', delay: 1000, nextId: 'towardsbarrier-4' },
{ id: 'towardsbarrier-4', type: 'npc', text: 'My skin is tingling. The hair on my arms is standing up.', delay: 1000, nextId: 'towardsbarrier-5' },
{ id: 'towardsbarrier-5', type: 'npc', text: 'I’m right in front of it now. I can see the staircase beyond!', delay: 1000, nextId: 'towardsbarrier-6' },
{ id: 'towardsbarrier-6', type: 'npc', text: 'What do you think I should do?', delay: 1000, nextId: 'towardsbarrier-choices' },

{ id: 'towardsbarrier-choices', type: 'choice', choices: [
    { text: 'Head down the stairs.', nextId: 'godownstairs-1' },
    { text: 'Interact with the runes.', nextId: 'interactrunes-1' }
], delay: 1500 },

		// Choice: Stay where you are
{ id: 'stayput-1', type: 'npc', text: 'Maybe I need to stay here to keep it open? But I need to get out of this room.', delay: 1000, nextId: 'stayput-2' },
{ id: 'stayput-2', type: 'npc', text: 'What do you think? Should I take the risk?', delay: 1000, nextId: 'stayput-choices' },

{ id: 'stayput-choices', type: 'choice', choices: [
    { text: 'Step towards the barrier.', nextId: 'towardsbarrier-1' },
    { text: 'Keep standing in the circle.', nextId: 'keepstanding-1' }
], delay: 1500 },

		
		// Choice: Keep standing in the circle
{ id: 'keepstanding-1', type: 'npc', text: 'Okay, I’ll hold my ground. The runes are still glowing, and the barrier is flickering, but nothing else is happening.', delay: 1000, nextId: 'keepstanding-2' },
{ id: 'keepstanding-2', type: 'npc', text: 'It feels like the room is waiting for something. Like I need to take the next step to make it work.', delay: 1000, nextId: 'keepstanding-3' },
{ id: 'keepstanding-3', type: 'npc', text: 'The barrier looks weaker than before.', delay: 1000, nextId: 'keepstanding-4' },
{ id: 'keepstanding-4', type: 'npc', text: 'I think it’s safe, but I’m not sure how long this will last.', delay: 1000, nextId: 'keepstanding-choices' },

{ id: 'keepstanding-choices', type: 'choice', choices: [
    { text: 'Step towards the barrier.', nextId: 'towardsbarrier-1' },
    { text: 'Interact with the runes.', nextId: 'interactrunes-1' }
], delay: 1500 },

		// Choice: Interact with the runes
{ id: 'interactrunes-1', type: 'npc', text: 'Alright, I’ll take a closer look. They’re still pulsing with that soft glow.', delay: 1000, nextId: 'interactrunes-2' },
{ id: 'interactrunes-2', type: 'npc', text: 'I’ll try touching this one...', delay: 1000, nextId: 'interactrunes-3' },
{ id: 'interactrunes-3', type: 'npc', text: 'The rune feels warm, and when I trace the shape with my finger, it lights up even brighter! It’s like it’s responding to me.', delay: 1000, nextId: 'interactrunes-4' },
{ id: 'interactrunes-4', type: 'npc', text: 'Okay, I’ll try another. And another...', delay: 1000, nextId: 'interactrunes-5' },
{ id: 'interactrunes-5', type: 'npc', text: 'Yes! They’re all lighting up, one by one.', delay: 1000, nextId: 'interactrunes-6' },
{ id: 'interactrunes-6', type: 'npc', text: 'The barrier is almost gone now!', delay: 1000, nextId: 'interactrunes-7' },
{ id: 'interactrunes-7', type: 'npc', text: 'I think just a bit more and it’ll disappear completely.', delay: 1000, nextId: 'interactrunes-8' },
{ id: 'interactrunes-8', type: 'npc', text: 'The runes are humming softly, and I feel... good. Stronger, maybe? Like the room is helping me.', delay: 1000, nextId: 'interactrunes-choices' },

{ id: 'interactrunes-choices', type: 'choice', choices: [
    { text: 'Finish activating the runes.', nextId: 'activaterunes-1' },
    { text: 'Step back and see what happens.', nextId: 'stepback-1' }
], delay: 1500 },

		// Choice: Step back
{ id: 'stepback-1', type: 'npc', text: 'Okay, I’ll take a step back.', delay: 1000, nextId: 'stepback-2' },
{ id: 'stepback-2', type: 'npc', text: 'The barrier is still flickering, almost gone but not quite.', delay: 1000, nextId: 'stepback-3' },
{ id: 'stepback-3', type: 'npc', text: 'The room feels... patient. Like it’s waiting for me to decide?', delay: 1000, nextId: 'stepback-4' },
{ id: 'stepback-4', type: 'npc', text: 'The runes are still connected by that soft light. It almost looks like a path, leading right to the barrier.', delay: 1000, nextId: 'stepback-5' },
{ id: 'stepback-5', type: 'npc', text: 'I think... I think it needs me to do something.', delay: 1000, nextId: 'stepback-6' },
{ id: 'stepback-6', type: 'npc', text: 'Maybe a final step to break the barrier completely?', delay: 1000, nextId: 'stepback-choices' },

{ id: 'stepback-choices', type: 'choice', choices: [
    { text: 'Finish activating the runes.', nextId: 'activaterunes-1' },
    { text: 'Step towards the barrier.', nextId: 'towardsbarrier-1' }
], delay: 1500 },

		
		// Choice: Finish activating the runes
{ id: 'activaterunes-1', type: 'story', text: 'The mystery person is busy.', delay: 5000, nextId: 'activaterunes-2' },
{ id: 'activaterunes-2', type: 'npc', text: 'They’re all glowing now—soft, steady light.', delay: 1000, nextId: 'activaterunes-3' },
{ id: 'activaterunes-3', type: 'npc', text: 'The humming has turned into a gentle, almost musical tone. It feels... calming.', delay: 1000, nextId: 'activaterunes-4' },
{ id: 'activaterunes-4', type: 'npc', text: 'The barrier is barely visible. It’s just a faint shimmer in the air.', delay: 1000, nextId: 'activaterunes-5' },
{ id: 'activaterunes-5', type: 'npc', text: 'I just touched the last rune and the light spread out! Wow... it\'s beautiful.', delay: 1000, nextId: 'activaterunes-6' },
{ id: 'activaterunes-6', type: 'npc', text: 'And... it’s gone! The barrier just faded away, like mist in the morning sun.', delay: 1000, nextId: 'activaterunes-7' },
{ id: 'activaterunes-7', type: 'npc', text: 'I think I did it!', delay: 1000, nextId: 'activaterunes-choices' },

{ id: 'activaterunes-choices', type: 'choice', choices: [
    { text: 'Head down the stairs.', nextId: 'godownstairs-1' },
    { text: 'Take a moment to look around.', nextId: 'lookaround-1' }
], delay: 1500 },

		// Choice: Look around
{ id: 'lookaround-1', type: 'npc', text: 'Okay, I’ll take a breath and look around before moving on.', delay: 1000, nextId: 'lookaround-2' },
{ id: 'lookaround-2', type: 'npc', text: 'The runes on the floor are still glowing softly, but they seem... at peace? Like whatever magic was here has settled.', delay: 1000, nextId: 'lookaround-3' },
{ id: 'lookaround-3', type: 'npc', text: 'I see some books on the shelves. They are glowing as well. Might be worth a look.', delay: 1000, nextId: 'lookaround-4' },
{ id: 'lookaround-4', type: 'npc', text: 'Wait, I smell... There\'s a scent coming from the staircase of... greenery? Like grass and wildflowers. That has to be a good sign, right?', delay: 1000, nextId: 'lookaround-5' },
{ id: 'lookaround-5', type: 'npc', text: 'I think the room was testing me. And I think... I think I passed.', delay: 1000, nextId: 'lookaround-choices' },

{ id: 'lookaround-choices', type: 'choice', choices: [
    { text: 'Head down the stairs.', nextId: 'godownstairs-1' },
    { text: 'Check the bookshelves.', nextId: 'examinebooks-1' }
], delay: 1500 },

		// Choice: Head down the stairs
{ id: 'godownstairs-1', type: 'end', text: 'To be continued', delay: 1000, nextId: 'start' },

		
		// Chapter 2
		
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
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Make the div full width and fully visible immediately
    messageElement.style.width = '100%';
    messageElement.style.opacity = '1';
    messageElement.style.height = 'auto';
    const initialHeight = messageElement.offsetHeight;
    messageElement.style.height = '0px';
    messageElement.offsetHeight; // Force reflow
    messageElement.style.height = initialHeight + 'px';

    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text.charAt(index);
            charSpan.style.opacity = '0'; // Start hidden for smooth transition
            textSpan.appendChild(charSpan);

            requestAnimationFrame(() => {
                charSpan.style.opacity = '1'; // Smooth fade-in
            });

            index++;
            const newHeight = messageElement.scrollHeight + 'px';
            messageElement.style.height = newHeight;

            setTimeout(typeNextCharacter, 50);
        } else if (callback) {
            callback();
        }
    }

    typeNextCharacter();
}

    // Function to load and display story elements by ID
    function loadStoryById(id) {
        const message = story.find(item => item.id === id);
        if (!message) return;

        if (message.type === 'end') {
            displayMagicalText(message.text, 'story', () => {
                console.log('End of the story reached.');
            });
            return;
        }

        if (message.type === 'choice') {
            setTimeout(() => displayChoices(message.choices), message.delay || 1000);
        } else {
            setTimeout(() => {
                displayMagicalText(message.text, message.type, () => {
                    if (message.nextId) loadStoryById(message.nextId);
                });
            }, message.delay || 1000);
        }
    }

    // Function to display player choices
    function displayChoices(choices) {
        const choiceContainer = document.createElement('div');
        choiceContainer.classList.add('choice-container');

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('player-choice');
            button.innerText = choice.text;
            button.onclick = () => handleChoiceSelection(button, choice);
            choiceContainer.appendChild(button);
        });

        chatContainer.appendChild(choiceContainer);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Function to handle choice selection
    function handleChoiceSelection(selectedButton, choice) {
        const buttons = document.querySelectorAll('.player-choice');
        buttons.forEach(button => {
            button.classList.add('disabled');
            button.disabled = true;
            if (button === selectedButton) {
                button.classList.remove('disabled');
                button.classList.add('selected');
                loadStoryById(choice.nextId);
            }
        });
    }

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

