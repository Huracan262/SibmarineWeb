function formatDate(dateString: string): string {
    const options: {year: 'numeric', month: 'long', day: 'numeric',} = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const date = new Date(dateString);

    return date.toLocaleDateString('ru-RU', options);
}

export default formatDate;
