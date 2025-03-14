document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

       // Story
    const story = [
        
		// Chapter 1
		
		// Introductions
		{ id: 'start', type: 'story', text: 'A soft, uncertain voice drifts through the air, as if carried by a whispering breeze.', delay: 1000, nextId: 'intro1' },
		{ id: 'intro1', type: 'npc', text: 'Hello..?', delay: 1000, nextId: 'intro2' },
		{ id: 'intro2', type: 'npc', text: 'Is... is someone there?', delay: 1000, nextId: 'intro3' },
        { id: 'intro3', type: 'npc', text: 'Please, if you can hear me, say something.', delay: 1000, nextId: 'introductions' },
		{ id: 'introductions', type: 'choice', choices: [
    { text: 'Who are you?', nextId: 'whoareyou-1' },
    { text: 'I hear you.', nextId: 'ihearyou-1' }
], delay: 1500 },



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
            
            requestAnimationFrame(() => {
                setTimeout(revealNextCharacter, delay);
            });
        } else if (callback) {
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

