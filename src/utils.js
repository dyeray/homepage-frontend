
export function cacheStore(key, value) {
    let entry = {
        timestamp: Date.now(),
        value: value
    };
    window.localStorage.setItem(key, JSON.stringify(entry));
}

export function cacheRetrieve(key) {
    let cached = window.localStorage.getItem(key);
    if (cached == null) {
        return null;
    }
    let entry = JSON.parse(cached);
    return (Date.now() - entry.timestamp > 86400000)? null : entry.value;
}
