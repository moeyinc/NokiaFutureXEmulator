import STORY_CONFIG from '@/config/story-config.json';

const getters = {
  getStories: (state) => {
    const stories = STORY_CONFIG.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }
    return stories;
  },
  getSelectedStory: (state) => (_storyId) => {
    const stories = STORY_CONFIG.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }

    if (_storyId === undefined || _storyId === null) {
      console.error('storyId is not specified', _storyId);
      return;
    }

    for (let story of stories) {
      if (story.hasOwnProperty('storyId')) {
        if (story.storyId === _storyId) return story;
      } else {
        console.error('The story object doesn\'t have a storyId!');
      }
    }

    console.error('There are no stories that have the given id', _storyId);
    return;
  },
};

export default getters;
