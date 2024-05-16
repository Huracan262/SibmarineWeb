const getWhiteModifier = (elementName: string, white: boolean = false): string => {
    return white ? `${elementName} ${elementName}--white` : elementName;
};

export default getWhiteModifier;
