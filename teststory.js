  // Story Test
  const story = [
    
    // Variables Test
    { id: 'start', type: 'story', text: 'Examined runes: $examinedRunes. Examined books: $examinedBooks. Read book: $readBook. returned to runes: $returnedtoRunes. returned to books: $returnedtoBooks. looked around the room: $lookedaroundtheroom.', delay: 1000, nextId: 'tryreadbook-1', onArrival: () => {
        storyState.set('examinedRunes', true);
        storyState.set('examinedBooks', true);
        storyState.set('readBook', false);
        storyState.set('returnedtoRunes', false);
        storyState.set('returnedtoBooks', false);
        storyState.set('lookedaroundtheroom', false);
        
    } },

  



  ]