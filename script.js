document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

       // Story with unique IDs
    const story = [
        // Initial story setup
        { id: 'start', type: 'story', text: 'You find it half-buried in the dirt, its smooth surface glinting in the dim light.', delay: 1000, nextId: 'stone' },
        { id: 'stone', type: 'story', text: 'A small, round stone—ordinary at first glance, but the faint arcane etchings along its edges suggest otherwise.', delay: 1000, nextId: 'initial-choice' },

        // Initial choice: Move along or Pick it up
        { id: 'initial-choice', type: 'choice', choices: [
            { text: 'Pick it up', nextId: 'pick-it-up-1' },
			{ text: 'Move along', nextId: 'move-along-1' }
        ], delay: 1500 },

        // Choice 1: Move along
        { id: 'move-along-1', type: 'story', text: 'Yet, as you walk, an odd sensation prickles at the back of your neck—a feeling of being watched.', delay: 1000, nextId: 'move-along-2' },
        { id: 'move-along-2', type: 'story', text: 'The path ahead seems unchanged, yet something about the air feels... heavier.', delay: 1000, nextId: 'move-along-3' },
        { id: 'move-along-3', type: 'story', text: 'You push forward, unwilling to dwell on whatever secrets lie buried in the dirt.', delay: 1000, nextId: 'move-along-4' },
        { id: 'move-along-4', type: 'story', text: 'And yet, a quiet whisper brushes against the edge of your hearing.', delay: 1000, nextId: 'move-along-5' },
        { id: 'move-along-5', type: 'story', text: 'Or was it just the wind?', delay: 1000, nextId: 'end' },
        
        // End of Demo
        { id: 'end', type: 'end', text: '[End of Demo]', delay: 2000 },

        // Choice 2: Pick it up
        { id: 'pick-it-up-1', type: 'story', text: 'As you pick it up, a chill runs through your fingers.', delay: 1000, nextId: 'pickup2' },
		 { id: 'pickup2', type: 'story', text: 'A sending stone.', delay: 1000, nextId: 'pick-it-up-2' },
        { id: 'pick-it-up-2', type: 'story', text: 'Before you can ponder, a voice—distant and trembling—whispers into your mind.', delay: 1500, nextId: 'npc-message' },
        { id: 'npc-message', type: 'npc', text: 'Is someone there? Please... They took my name. They took... Please... I don\'t know how much time I have.', delay: 1500, nextId: 'stone-hum' },
        { id: 'stone-hum', type: 'story', text: 'The stone hums faintly in your grip.', delay: 1000, nextId: 'sending-stone' },
        { id: 'sending-stone', type: 'story', text: 'If the legends are true, a sending stone allows only a single reply per day.', delay: 1000, nextId: 'choose-words' },
        { id: 'choose-words', type: 'story', text: 'You have to choose your words carefully.', delay: 1000, nextId: 'reply-choice' },

        // Follow-up choices: Who are you? or Where are you?
        { id: 'reply-choice', type: 'choice', choices: [
            { text: 'Who are you?', nextId: 'speak-into-stone' },
            { text: 'Where are you?', nextId: 'speak-into-stone' }
        ], delay: 1500 },

        // Outcome of either choice
        { id: 'speak-into-stone', type: 'story', text: 'You speak into the stone, your words sent across an unseen distance.', delay: 1000, nextId: 'relief-or-dread' },
        { id: 'relief-or-dread', type: 'story', text: 'Whether the person on the other end now feels relief or dread, you may never know.', delay: 1000, nextId: 'connection-severed' },
        { id: 'connection-severed', type: 'story', text: 'The connection is severed.', delay: 1000, nextId: 'continue-choice' },

        // Final choice: Continue
        { id: 'continue-choice', type: 'choice', choices: [
            { text: 'Continue', nextId: 'stone-inert' }
        ], delay: 1500 },

        // Final story sequence
        { id: 'stone-inert', type: 'story', text: 'The stone has gone inert. Whatever connection you had, it’s severed—at least until tomorrow.', delay: 1000, nextId: 'waiting-again' },
        { id: 'waiting-again', type: 'story', text: 'But one thing is certain: someone, somewhere, is waiting for you to listen again.', delay: 1500, nextId: 'end' }
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

