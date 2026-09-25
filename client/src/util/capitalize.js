export const capitalizeWords = (value) => {

    if (Array.isArray(value)) {
        return value
            .map(word => capitalizeWords(word))
            .join(" ");
    }

    if (typeof value !== "string") {
        return value;
    }

    return value
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");
};