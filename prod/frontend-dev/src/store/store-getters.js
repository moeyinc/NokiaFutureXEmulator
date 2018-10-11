import STORY_CONFIG from '@/config/story-config.json';

const getters = {
  getSelectedStory: (state) => {
    const stories = STORY_CONFIG.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }

    const _id = state.selectedStoryId;
    if (_id === null || _id === undefined) {
      console.error('There is no selectedStoryId in store.state');
      return;
    }

    for (let story of stories) {
      if (story.hasOwnProperty(storyId)) {
        if (story.storyId === _id) return story;
      } else {
        console.error('The story object doesn\'t have a storyId!');
      }
    }

    console.error('There are no story obejects that have the given id', _id);
    return;
  },
};

export default getters;
