export const getGifs = async (category) => {
    const apiKey = 'A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=${apiKey}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}