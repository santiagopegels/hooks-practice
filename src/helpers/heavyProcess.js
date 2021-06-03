export const heavyProcess = (interations) => {
    for (let i = 0; i < interations; i++) {
        console.log('for loop...');
    }

    return `${interations} iterations`;
}