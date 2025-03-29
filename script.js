document.addEventListener('DOMContentLoaded', () => {
    // Check if story is available
    if (typeof story === 'undefined') {
        console.error('Story not found! Make sure teststory.js is loaded before script.js');
        return;
    }

    const chatContainer = document.getElementById('chat-container');
    const backgroundMusic = document.getElementById('background-music-1');
    
    // Function to start audio playback
    const startAudio = () => {
        if (backgroundMusic) {
            backgroundMusic.play()
                .catch(error => console.log('Audio playback failed:', error));
        }
        // Remove the event listeners once audio is playing
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
    };

    // Add event listeners for both click and touch events
    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);

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

    // Track if user is manually scrolling
    let isManuallyScrolling = false;
    let scrollTimeout;

    // Scroll handler to detect manual scrolling
    const handleScroll = () => {
        isManuallyScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isManuallyScrolling = false;
        }, 150); // Reset after 150ms of no scrolling
    };

    chatContainer.addEventListener('scroll', handleScroll);

    // Ensure instant scroll to bottom if not manually scrolling
    const scrollToBottom = () => {
        if (!isManuallyScrolling) {
            const maxScroll = chatContainer.scrollHeight - chatContainer.clientHeight;
            chatContainer.scrollTop = maxScroll;
        }
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
            // Clean up scroll listener
            chatContainer.removeEventListener('scroll', handleScroll);
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

    // Start the story at the first step
    loadStoryById('start');
});
