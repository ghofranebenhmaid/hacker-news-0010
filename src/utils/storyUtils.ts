// Randomly selects 'count' number of IDs from the given array of IDs
export const getRandomStoryIds = (ids: number[], count: number): number[] => {
    const shuffled = [...ids].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Function to convert UNIX timestamp to human-readable date
export const getHumanReadableDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};