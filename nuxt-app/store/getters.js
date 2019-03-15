const getters = {
  selectedStory: (state) => (storyId) => {
    const stories = state.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }

    if (storyId === undefined || storyId === null) {
      console.error('storyId is not specified', storyId);
      return;
    }

    for (const story of stories) {
      if (story.hasOwnProperty('id')) {
        if (story.id === storyId) return story;
      } else {
        console.error('The story object doesn\'t have a storyId!');
      }
    }

    console.error('There are no stories that have the given id', storyId);
    return;
  },
  selectedSection: (state, getters) => ({storyId, sectionId}) => {
    const selectedStory = getters.selectedStory(storyId);
    const sections = selectedStory.sections;
    if (!sections || !Array.isArray(sections)) {
      console.error('There is no sections array in the story', storyId);
      return;
    }
    if (sectionId === undefined || sectionId === null) {
      console.error('sectionId is not specified', sectionId);
      return;
    }
    for (const section of sections) {
      if (section.hasOwnProperty('id')) {
        if (section.id === sectionId) return section;
      } else {
        console.error('The section object doesn\'t have a sectionId!');
      }
    }

    console.error('There are no sections that have the given id', sectionId);
    return;
  },
};

export default getters;
