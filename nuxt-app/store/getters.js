const getters = {
  getSelectedStory: (state) => (_storyId) => {
    console.log('getSelectedStory', _storyId);
    const stories = state.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }

    if (_storyId === undefined || _storyId === null) {
      console.error('storyId is not specified', _storyId);
      return;
    }

    for (const story of stories) {
      if (story.hasOwnProperty('id')) {
        if (story.id === _storyId) return story;
      } else {
        console.error('The story object doesn\'t have a storyId!');
      }
    }

    console.error('There are no stories that have the given id', _storyId);
    return;
  },
};

export default getters;
