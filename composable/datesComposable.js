export const totalMonth = (start, end) => {
    start = start.split(" ")[0];
    const startTime = new Date(start);
    end = end.split(" ")[0];
    const endTime = new Date(end);

    const monthsLeft =new Date(endTime - startTime);

    if (monthsLeft.getMonth() < 1) {
        const daysLeft = monthsLeft.getDay();
        return `${daysLeft} روز`
        if (daysLeft < 1) {
            const daysLeft = monthsLeft.getDay();
            return `${daysLeft} روز `
        }
    }

    return `${monthsLeft.getMonth()} ماه `
}