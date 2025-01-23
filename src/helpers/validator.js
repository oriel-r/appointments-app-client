import regex from "./regexValidations";

export const formChecker = (input) => {
    const { name, value } = input;
    if (name in regex) {
        return regex[name]?.test(String(value)) || false;
    }
};
