import Theme from 'enums/Theme';

const getWhiteModifier = (elementName: string, theme: Theme = Theme.dark): string => {
    return theme === Theme.light ? `${elementName} ${elementName}--white` : elementName;
};

export default getWhiteModifier;
